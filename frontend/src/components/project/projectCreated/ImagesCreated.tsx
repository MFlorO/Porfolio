import React from 'react';
import { Project, ProjectImages } from '@/domain/entities/Project';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Props {
  images: ProjectImages;
  setProjectData: (prop: (prev: Partial<Project>) => Partial<Project>) => void;
  errors: string
}

const ImagesCreated = ({ images, setProjectData, errors }: Props) => {

  const t = useTranslations('projectCreated');

  return (
    <div className="mb-3">
      <label className="block text-sm font-medium mb-2 text-black">{t('imageInput')}</label>

      {/* Zona Drag & Drop */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const files = Array.from(e.dataTransfer.files).slice(
            0,
            4 - (images?.length || 0)
          );
          const newImages = files.map((file) => ({
            file, 
            url: URL.createObjectURL(file),
            alt: file.name,
          }));
          setProjectData((prev) => ({
            ...prev,
            images: [...(prev.images || []), ...newImages],
          }));
        }}
        className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[var(--color-accent-light)] dark:hover:border-[var(--color-accent-dark)] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] dark:focus:ring-[var(--color-accent-dark)] ${errors ? "border-red-500" : "border-gray-300" }`}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden cursor-pointer"
          id="upload-images"
          onChange={(e) => {
            if (!e.target.files) return;
            const files = Array.from(e.target.files).slice(
              0,
              4 - (images?.length || 0)
            );
            const newImages = files.map((file) => ({
              file,
              url: URL.createObjectURL(file),
              alt: file.name,
            }));
            setProjectData((prev) => ({
              ...prev,
              images: [...(prev.images || []), ...newImages],
            }));
            e.target.value = ""; 
          }}
        />
        <label htmlFor="upload-images" className="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mb-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm">{t('imageTextDrop')}</span>
          <span className="text-xs text-gray-400">({t('imageCount')})</span>
        </label>
      </div>

      {/* Previsualización */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
        {
          images?.map((img, i) => (
              <div key={i} className="relative group rounded-lg overflow-hidden shadow-md">
              <Image
                src={img.url}
                alt={img.alt || "Imagen proyecto"}
                width={300}
                height={200}
                className="object-cover w-full h-32 rounded-lg"
              />
              {/* Overlay para eliminar */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button
                  onClick={() =>
                    setProjectData((prev) => ({
                    ...prev,
                    images: prev.images?.filter((_, index) => index !== i),
                    }))
                }
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm  cursor-pointer hover:bg-red-600"
                  >
                  {t('imagesDelete')}
                  </button>
              </div>
              </div>
          ))
        }
      </div>

      <p className="text-sm text-gray-500 mt-2">{(images?.length || 0)}/4 {t('imagesCount2')}</p>
    </div>
  )
}

export default ImagesCreated;