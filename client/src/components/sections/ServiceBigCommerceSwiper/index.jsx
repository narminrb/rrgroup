import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import './style.css'; 
import ProjectSwiperCard from '@/components/shared/projectSwiperCard';

export default function ServiceBigCommerceSwiper() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SERVICESCOMMERCE],
    queryFn: async () => await getAPiData('servicescommerce')
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        grabCursor={true} 
        className="mySwiper"
      >
        {data?.map((el, index) => (
          <SwiperSlide className="font-worksans" key={index}>
            <ProjectSwiperCard
              ImageSrc={el.image?.url} 
              name={el.name}
              desc={el.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
