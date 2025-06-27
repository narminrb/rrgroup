import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import './style.css'; 
import clsx from 'clsx';
import styles from './style.module.scss'
import ProjectSwiperCard from '@/components/shared/projectSwiperCard';

export default function ProjectSwiper() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.PROJECTCARDS],
    queryFn: async () => await getAPiData(`/v1/projects/getAllProjects`)
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
      <div className='flex text-start justify-start my-5 mx-auto'>
        <h1 className={clsx(styles.values)}>Digər layihələr</h1>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        grabCursor={true} 
        className="mySwiper"
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {/* {data?.map((el, index) => (
          <SwiperSlide className="font-worksans" key={index}>
            <ProjectSwiperCard
              ImageSrc={el.image?.url} 
              name={el.name}
              desc={el.content}
            />
          </SwiperSlide>
        ))} */}
  {data?.map((el, index) => {
  const firstImage = el.images?.[0];
  const imageUrl = firstImage
    ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${firstImage}`
    : 'https://via.placeholder.com/300';

  return (
    <SwiperSlide className="font-worksans" key={index}>
      <ProjectSwiperCard
        ImageSrc={imageUrl}
        name={el.name}
        desc={el.content}
      />
    </SwiperSlide>
  );
})}

      </Swiper>
    </div>
  );
}
