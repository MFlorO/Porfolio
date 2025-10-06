"use server"
import React from 'react'
import { Button, Title } from '../ui';
import { Seccion } from '@/interfaces';
import { getTranslations } from 'next-intl/server';


const AboutMe = async() => {

  const t = await getTranslations('aboutMe');

  return (
    <section className="w-full h-max flex flex-col justify-center py-6 gap-6 lg:h-screen" id={Seccion.SOBRE_MI}>
      <Title>{t('title')}</Title>
      <div className="max-w-4xl flex flex-col text-grayLight font-light gap-3 dark:text-white">
        <div className="flex flex-wrap">
          {t('intro')}<span className="font-bold px-1">{t('intro1')}</span>{t('intro2')}<span className="font-bold px-1">{t('intro3')}</span>{t('intro4')}
        </div>

        <div className="flex flex-wrap">
          {t('stack')}<span className="font-bold px-1">{t('stack1')}</span>{t('stack2')}<span className="font-bold px-1">{t('stack3')}</span>{t('stack4')}
        </div>

        <div className="flex flex-wrap">{t('learning')}</div>
        <div className="flex flex-wrap font-bold">{t('motto')}</div>
        <div className="flex flex-wrap">{t('teamwork')}</div>
        <div className='flex flex-wrap'>{t('personal')}</div>
      </div>
      <div>
        <a style={{textDecoration:"none"}} href="cv/MFlorenciaOldaniDeveloperFullStackCV.pdf" download="MFlorenciaOldaniDeveloperFullStackCV.pdf">
          <Button variant='border'>{t('cvButton')}</Button>
        </a>
      </div>
    </section>
  )
}

export default AboutMe;