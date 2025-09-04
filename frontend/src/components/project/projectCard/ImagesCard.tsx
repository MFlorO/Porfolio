"use client";
import React from 'react';
import Image from 'next/image';
import { ProjectImages } from '@/domain/entities/Project';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';

const ImagesCard = ({images, title}:{images: ProjectImages, title:string}) => {
  return (
    <div className="h-65 w-full lg:h-55">
      <Swiper
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {
          images?.length > 0 
          ? images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={img.url || "/placeholder-imagesCard.png"}
                  alt={`${title} ${idx}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-center"
                />
              </SwiperSlide>
            )) 
          : <SwiperSlide>
              <Image
                src="/placeholder-imagesCard.png"
                alt="placeholder"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
        }
      </Swiper>
    </div>
  )
}

export default ImagesCard;