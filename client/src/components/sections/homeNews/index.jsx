import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import './style.css'; 
import NewsCard from '@/components/shared/newsCard';
import clsx from 'clsx';
import styles from './style.module.scss'
export default function HomeNews() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.NEWSCARDS],
    queryFn: async () => await getAPiData('/v1/home/all')
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const news = data?.news;
  return (
    <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
    <h1 className={clsx(styles.mission)}>Xəbərlər</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        grabCursor={true} 
        className="mySwiper"
        breakpoints={{
            340: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
      >
        {news?.map((el, index) => (
          <SwiperSlide className="font-worksans" key={index}>
            <NewsCard news={el} icon={el.images?.[0]}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
