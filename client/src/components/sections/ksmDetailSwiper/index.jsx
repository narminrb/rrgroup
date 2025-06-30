import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import {Navigation } from 'swiper/modules'; 
// import { useQuery } from '@tanstack/react-query';
// import { QueryKeys } from '../../../constants/QueryKeys';
// import { getAPiData } from '../../../http/api'; 
import './style.css'; 
import ArrowLeft from '../../../assets/arrow-left.svg';
import ArrowRight from '../../../assets/arrow-right.svg';
import NewsSwiperCard from '@/components/shared/newsSwiperCard';



export default function KsmDetailSwiper({ images = [] }) {
    if (!images || images.length === 0) return null;

  return (
    <div className="about-certificate-swiper container max-w-screen-xl mx-auto my-10 px-3 relative"> 
    <div className="swiper-button-prev-cert custom-swiper-button hidden sm:flex">
      <ArrowLeft />
    </div>
    <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-cert',
          prevEl: '.swiper-button-prev-cert',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        className="about-swiper"
      >
        {images.map((img, index) => {
          const imageUrl = img.startsWith('http')
            ? img
            : `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${img}`;

          return (
            <SwiperSlide className="font-worksans" key={index}>
              <NewsSwiperCard ImageSrc={imageUrl} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    <div className="swiper-button-next-cert custom-swiper-button hidden sm:flex">
      <ArrowRight />
    </div>
  </div>
  
  
  );
}
