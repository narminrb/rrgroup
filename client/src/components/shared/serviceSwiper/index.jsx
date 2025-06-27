// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { useQuery } from '@tanstack/react-query';
// import { QueryKeys } from '../../../constants/QueryKeys';
// import { getAPiData } from '../../../http/api'; 
// import './style.css'; 
// import ServiceSwiperCard from '../serviceSwiperCard';

// export default function ServiceSwiper() {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: [QueryKeys.SERVICESWIPERS],
//     queryFn: async () => await getAPiData('serviceswipers')
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: {error.message}</p>;

//   return (
//     <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         grabCursor={true} 
//         className="mySwiper"
//         breakpoints={{
//           340: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {data?.map((el, index) => (
//           <SwiperSlide className="font-worksans" key={index}>
//             <ServiceSwiperCard
//               desc={el.desc}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import ServiceSwiperCard from '../serviceSwiperCard';

// export default function ServiceSwiper({ data = [] }) {
//   if (!data.length) return null;

//   return (
//     <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         grabCursor={true} 
//         className="mySwiper"
//         breakpoints={{
//           340: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {data.map((el, index) => (
//           <SwiperSlide className="font-worksans" key={index}>
//             <ServiceSwiperCard desc={el.name} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// components/shared/ServiceSwiper.jsx
// export default function ServiceSwiper({ data, onSubCategoryClick, selectedSlug }) {
//   return (
//     <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         grabCursor={true}
//         breakpoints={{
//           340: { slidesPerView: 1 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {data?.map((el, index) => (
//           <SwiperSlide key={index}>
//             <button
//               onClick={() => onSubCategoryClick(el.subCategorySlug)}
//               className={`p-4 border rounded-xl w-full h-full ${
//                 selectedSlug === el.subCategorySlug ? 'bg-blue-500 text-white' : 'bg-white'
//               }`}
//             >
//               {el.name}
//             </button>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// components/shared/ServiceSwiper.jsx
// export default function ServiceSwiper({ data, onSubCategoryClick, selectedSlug }) {
//   return (
//     <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         grabCursor={true}
//         className="mySwiper"
//         breakpoints={{
//           340: { slidesPerView: 1 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {data?.map((el, index) => (
//           <SwiperSlide key={index}>
//             <div onClick={() => onSubCategoryClick(el.subCategorySlug)}>
//               <ServiceSwiperCard
//                 desc={el.name}
//                 isActive={selectedSlug === el.subCategorySlug}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

export default function ServiceSwiper({ data, onSubCategoryClick, selectedSlug }) {
  return (
    <div className="container max-w-screen-xl mx-auto my-10 px-1 relative"> 
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          340: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data?.map((el, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => onSubCategoryClick(el.slug)}>
              <ServiceSwiperCard
                desc={el.name}
                isActive={selectedSlug === el.slug}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

