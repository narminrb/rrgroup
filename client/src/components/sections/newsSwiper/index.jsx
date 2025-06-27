import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import {Navigation } from 'swiper/modules'; 
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import './style.css'; 
import ArrowLeft from '../../../assets/arrow-left.svg';
import ArrowRight from '../../../assets/arrow-right.svg';
import NewsSwiperCard from '@/components/shared/newsSwiperCard';



export default function NewsSwiper() {
  const { data:newswip, isLoading:certificateLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.NEWSSWIP],
    queryFn: async () => await getAPiData('/v1/news')
  });
  console.log(newswip)

  if (certificateLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

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
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
      className="about-swiper"
    >
      {newswip?.map((el, index) => {
         const firstImage = el.images?.[0];
         const imageUrl = firstImage
           ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${firstImage}`
           : 'https://via.placeholder.com/300';
           return(
        <SwiperSlide className="font-worksans" key={index}>
          <NewsSwiperCard ImageSrc={imageUrl} />
        </SwiperSlide>
           )
})}
    </Swiper>
    <div className="swiper-button-next-cert custom-swiper-button hidden sm:flex">
      <ArrowRight />
    </div>
  </div>
  
  
  );
}
