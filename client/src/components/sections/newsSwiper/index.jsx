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
    queryFn: async () => await getAPiData('newsswip?populate=*')
  });
  console.log(newswip)

  if (certificateLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="about-certificate-swiper container max-w-screen-xl mx-auto my-10 px-3 relative"> 
    <div className="swiper-button-prev-cert custom-swiper-button">
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
      modules={[Navigation]}
      className="about-swiper"
    >
      {newswip?.map((el, index) => (
        <SwiperSlide className="font-worksans" key={index}>
          <NewsSwiperCard ImageSrc={el.image?.url} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-button-next-cert custom-swiper-button">
      <ArrowRight />
    </div>
  </div>
  
  
  );
}
