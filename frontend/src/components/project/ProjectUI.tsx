"use client";
import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { fetchProjectsThunk } from '@/store/thunk/project.thunk';
import { Project } from '@/domain/entities/Project';
import ProjectCard from './projectCard/ProjectCard';
import ProjectCreated from './projectCreated/ProjectCreated';
import { useTranslations } from 'next-intl';
import { Button, Title } from '../ui';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Seccion } from '@/interfaces';
import clsx from 'clsx';


const ProjectUI = () => {

  const t = useTranslations('projects');
  const dispatch = useAppDispatch();
  const { items:projects, loading} = useAppSelector((state: RootState) => state.projects);
  const [isModal, setIsModal] = useState<boolean>(false);

  console.log(projects)
  useEffect(() => {
    dispatch(fetchProjectsThunk())
  }, [dispatch]);

  const basesStyles = "w-full min-h-[200px] h-max-[400px] pt-4 pb-10 flex flex-col gap-8 lg:h-max-[70vh] h-min-[600px] text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]"

  return (
    <section className={clsx(
      basesStyles,
      projects.length === 0 ? "h-auto" : "h-[80vh]"
    )} id={Seccion.PROYECTOS}
    >
      
      <div className='flex flex-row gap-3 align-middle justify-between'>
        <Title>{t('title')}</Title>
        <Button onClick={() => setIsModal(true)} variant='outline'>{t('button')}</Button>
      </div>

      { isModal && <ProjectCreated onChangeModal={setIsModal} />}

      {
        loading 
        ? <p className='h-1/2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]'>{t('loading')}</p>
        : projects.length === 0
          ? <p>{t('empty')}</p>
          : <div className='flex w-full h-[80%] lg:h-[90%] justify-center items-center bg-yellow-500'>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }} loop={true} 
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 }, 
                768: { slidesPerView: 2 }, 
                1024: { slidesPerView: 3 },
              }}
            >
              {projects?.map((project: Project, index: number) => <SwiperSlide key={index} className="flex justify-center items-center h-[90%] w-[400px] bg-red-600"><ProjectCard {...project} /></SwiperSlide>)}
          </Swiper>
          </div>
      }
    </section>
  )
}

export default ProjectUI;