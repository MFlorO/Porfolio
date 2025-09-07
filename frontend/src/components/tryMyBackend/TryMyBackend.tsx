"use client"
import React, { useActionState, useState } from "react";
import { Title } from "../ui";
import { Project } from "@/domain/entities/Project";
import { searchProjects } from "@/server-actions";
import { Seccion } from "@/interfaces";
import { useTranslations } from 'next-intl';
import TryGetForm from "./TryGetForm";

const initialState: Project[] | null | [] = null;

const TryMyBackend = () => {

  const t = useTranslations('backend');
  const [inputData, setInputData] = useState<null | string>(null);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [state, formAction, isPending] = useActionState<Project[] | null, FormData>(handleSubmit, initialState);

  async function handleSubmit(_state: Project[] | null | [], formData: FormData): Promise<Project[] | null> {
    try {
      const title = formData.get("title"); 
      
      if (!title || typeof title !== "string") {
        setErrorMessage(t('messageError1')); 
        return [];
      }

      setInputData(title);
      return await searchProjects(title);
    } catch (error) {
      console.error("Error en handleSubmit on Try my backend:", error);
      setErrorMessage(t('messageError2')); 
      return [];
    }
  }

  return (
    <section className="w-full lg:w-[48%] h-max-[850px] h-[750px] lg:h-full lg:h-max-full flex flex-col bg-gray-800 p-6 rounded-xl text-sm space-y-4 text-white/90 dark:text-white/60" id={Seccion.BACKEND}>

      <Title className="text-[#fff]!">{t('title')}</Title>
      
      <p className="text-text text-sm italic">{t('subtitle')}</p>

      <TryGetForm formAction={formAction} placeholder={t('placeholder')} nameButton={t('button')} isPending={isPending} errorMessage={errorMessage} />

      <div className="flex gap-2 items-center"> 
        <span className="bg-gray-900 text-pink-flour px-3 py-1 rounded-lg text-sm ">GET</span> 
        <span className="flex gap-2 items-center text-sm">projects/search?title={inputData}</span> 
      </div>

      <div className="w-full max-h-72 md:max-h-[23rem] bg-gray-900 p-3 rounded-lg text-pink-400 text-sm font-mono">
      {
        !state
        ? <span>{"{ \"title\": \"summary\", \"stack\": \"...\" }"}</span>
        : state.length === 0
          ? <span>No se encontraron resultados</span>
          : isPending 
            ? <span className="flex items-center gap-1 text-gray-300 w-full max-h-64 md:max-h-60 text-lg leading-none -translate-y-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </span>
            : <div className="w-full max-h-64 md:max-h-[22rem] overflow-auto">
                <pre>{JSON.stringify(state, null, 2)}</pre>
              </div>
        }
      </div>
    </section>
  );
};

export default TryMyBackend;

