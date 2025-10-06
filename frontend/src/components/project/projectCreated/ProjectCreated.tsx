"use client";
import React, { useState } from "react";
import { Project } from "@/domain/entities/Project";
import { createProjectThunk } from "@/store/thunk/project.thunk";
import { useAppDispatch } from "@/store";
import { Button, FormInput, FormSelect } from "../../ui";
import { useSearchParams } from "next/navigation";
import ImagesCreated from "./ImagesCreated";
import { useTranslations } from 'next-intl';

interface Props {
  onChangeModal: (value: boolean) => void;
}

const ProjectCreated = ({ onChangeModal }: Props) => {

  const t = useTranslations('projectCreated');
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const authKey = searchParams.get("authKey") || "";

  const [projectData, setProjectData] = useState<Partial<Project>>({
    title: "",
    summary: "",
    stack: [],
    repoUrl: "",
    demoUrl: "",
    images: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,field: keyof Project) => setProjectData({ ...projectData, [field]: e.target.value });

  const handleStackChange = (newStack: string[]) => setProjectData({ ...projectData, stack: newStack });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};

    if (!projectData.title) newErrors.title = t('titleInputError');
    if (!projectData.summary) newErrors.summary = t('summaryInputError');
    if (projectData.stack?.length === 0) newErrors.stack = t('stackInputError');
    if (!projectData.repoUrl) newErrors.repoUrl = t('urlInputError');

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    setIsSubmitting(true);

    try {
      
      const resultAction = await dispatch(
        createProjectThunk({ 
        project: projectData as Project, 
        authKey: authKey
      }));

      if (createProjectThunk.rejected.match(resultAction)) {
        let errorMsg = t('error');

        if (resultAction.payload) {
          try {
            const parsed = JSON.parse(resultAction.payload as string);
            errorMsg = parsed.error || errorMsg;
          } catch {
            errorMsg = resultAction.payload as string; 
          }
        } else if (resultAction.error.message) {
          errorMsg = resultAction.error.message;
        }

        setErrors({ form: errorMsg });
        console.log("form-dentro:", errorMsg);
        return;
      }

      onChangeModal(false);
      setProjectData({
        title: "",
        summary: "",
        stack: [],
        repoUrl: "",
        demoUrl: "",
        images: [],
      });
      setErrors({});

    } catch (error) {
      console.log('Error al crear el formulario', error)
    } finally{
      setIsSubmitting(false);
    }
    
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => onChangeModal(false)}>
    <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl animate-fadeIn overflow-y-auto max-h-[90vh]">
      
      <h2 className="text-xl font-semibold mb-4 text-black">{t('title')}</h2>

      <FormInput
        placeholder={t('titleInput')}
        value={projectData.title || ""}
        onChange={(e) => handleInputChange(e, "title")}
        error={errors.title}
      />

      <FormInput
        placeholder={t('summaryInput')}
        value={projectData.summary || ""}
        onChange={(e) => handleInputChange(e, "summary")}
        error={errors.summary}
      />

      <FormSelect
        label={t('stackInput')}
        placeholder={t('stackPlaceholder')}
        value={projectData.stack || []}
        onChange={handleStackChange}
        error={errors.stack}
      />
      
      <FormInput
        type='url'
        placeholder={t('urlRespositoryInput')}
        value={projectData.repoUrl || ""}
        onChange={(e) => handleInputChange(e, "repoUrl")}
        error={errors.repoUrl}
      />

      <FormInput
        type='url'
        placeholder={t('urlDemoInput')}
        value={projectData.demoUrl || ""}
        onChange={(e) => handleInputChange(e, "demoUrl")}
      />

      { projectData.images && <ImagesCreated images={projectData?.images} setProjectData={setProjectData} errors={errors.images} />}

      <div className="w-full flex flex-col text-center gap-1">
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant='solid' type='submit' disabled={!!errors.form} isLoading>{t('proyectCreatedButtonCreate')}</Button>
          <Button variant="border"onClick={() => onChangeModal(false)}>{t('proyectCreatedButtonCancel')}</Button>
        </div>
        {errors.form && <p className="text-red-500">{errors.form}</p>}
      </div>

    </form>
    </div>
  );
};

export default ProjectCreated;
