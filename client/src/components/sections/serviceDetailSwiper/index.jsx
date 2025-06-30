// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'; 
// import {Navigation } from 'swiper/modules'; 
// import { useQuery } from '@tanstack/react-query';
// import { QueryKeys } from '../../../constants/QueryKeys';
// import { getAPiData } from '../../../http/api'; 
// import './style.css'; 
// import ArrowLeft from '../../../assets/arrow-left.svg';
// import ArrowRight from '../../../assets/arrow-right.svg';
// import ServiceDetailSwiperCard from '@/components/shared/serviceDetailSwiperCard';



// export default function ServiceDetailSwiper() {
//   const { data:newswip, isLoading:certificateLoading, isError, error } = useQuery({
//     queryKey: [QueryKeys.SERVICEDETAILSWIPER],
//     queryFn: async () => await  getAPiData(`/v1/service/card/slug/${slug}`)
//   });
//   console.log(newswip)

//   if (certificateLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: {error.message}</p>;

//   return (
//     <div className="about-certificate-swiper container max-w-screen-xl mx-auto my-10 px-3 relative"> 
//     <div className="swiper-button-prev-cert custom-swiper-button">
//       <ArrowLeft />
//     </div>
//     <Swiper
//       slidesPerView={2}
//       spaceBetween={0}
//       pagination={{ clickable: true }}
//       navigation={{
//         nextEl: '.swiper-button-next-cert',
//         prevEl: '.swiper-button-prev-cert',
//       }}
//       modules={[Navigation]}
//       className="about-swiper"
//       breakpoints={{
//         340: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 2,
//         },
//       }}
//     >
//       {newswip?.map((el, index) => (
//         <SwiperSlide className="font-worksans" key={index}>
//           <ServiceDetailSwiperCard ImageSrc={el.image?.url} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//     <div className="swiper-button-next-cert custom-swiper-button">
//       <ArrowRight />
//     </div>
//   </div>
  
  
//   );
// }


// ServiceDetailSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowLeft from '@/assets/arrow-left.svg';
import ArrowRight from '@/assets/arrow-right.svg';
import ServiceDetailSwiperCard from '@/components/shared/serviceDetailSwiperCard';

const ServiceDetailSwiper = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <div className="about-certificate-swiper container max-w-screen-xl mx-auto my-10 px-3 relative">
      <div className="swiper-button-prev-cert custom-swiper-button">
        <ArrowLeft />
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next-cert',
          prevEl: '.swiper-button-prev-cert',
        }}
        modules={[Navigation]}
        className="about-swiper"
        breakpoints={{
          340: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {images.map((filename, index) => {
          const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
          const url = `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${cleanFilename}`;
          return (
            <SwiperSlide key={index} className="font-worksans">
              <ServiceDetailSwiperCard ImageSrc={url} />
            </SwiperSlide>
          );
        })}

      </Swiper>
      <div className="swiper-button-next-cert custom-swiper-button">
        <ArrowRight />
      </div>
    </div>
  );
};

export default ServiceDetailSwiper;
