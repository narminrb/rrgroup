// // import React from 'react'
// // import { useParams } from 'react-router-dom'
// // import { useQuery } from '@tanstack/react-query'
// // import { getAPiData } from '@/http/api'
// // import clsx from 'clsx'
// // import styles from './style.module.scss'
// // import ProjectSwiper from '@/components/sections/projectSwiper'
// // const ProjectDetailTemplate = () => {
// //   const { id } = useParams()
  

// //   const {
// //     data: allProjects,
// //     isLoading,
// //     isError,
// //     error,
// //   } = useQuery({
// //     queryKey: ['all-projects'],
// //     queryFn: async () => await getAPiData('projectcards'), 
// //   })

// //   if (isLoading) return <p>Loading...</p>
// //   if (isError) return <p>Error: {error.message}</p>

// //   const project = allProjects.find((p) => String(p.id) === id)

// //   if (!project) return <p>Project not found.</p>

// //   const imageUrl = project?.image?.url
// //   ? project.image.url.startsWith('http')
// //     ? project.image.url
// //     : `${import.meta.env.VITE_API_BASE_URL}${project.image.url}`
// //   : 'https://via.placeholder.com/300'
// //   const name = project.name || 'No name'
// //   const date = project.date || 'No date'
// //   const customer = project.customer || 'No customer'


// //   return (
// //     <div className="container mx-auto my-20 px-4 max-w-screen-xl">
// //       <div className={clsx(styles.projectimage)}>
// //            <img
// //               className={clsx(styles.projectimg)}
// //               src={imageUrl}
// //               alt={name}
// //             />
// //            </div>
// //      <div className='py-7'>
// //      <div className='flex gap-6 py-6'>
// //         <h2 className={clsx(styles.detailname)}>Layihə adı  </h2>
// //       <h1 className={clsx(styles.detname)}> {name}</h1>
// //       </div>
// //       <div className='flex gap-6 py-6'>
// //         <h2 className={clsx(styles.detailname)}>İnşaat tarixi </h2>
// //       <h1 className={clsx(styles.detname)}> {date}</h1>
// //       </div>
// //       <div className='flex gap-6 py-6'>
// //         <h2 className={clsx(styles.detailname)}>Sifarişçi</h2>
// //       <h1 className={clsx(styles.detname)}> {customer}</h1>
// //       </div>
// //       <div className='flex gap-6 py-6'>
// //   <h2 className={clsx(styles.detailname)}>Məzmun</h2>
// //   <div className={clsx(styles.detname)} dangerouslySetInnerHTML={{ __html: project.context }} />
// // </div>

// //      </div>
// //      <ProjectSwiper/>
// //     </div>
// //   )
// // }

// // export default ProjectDetailTemplate

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { getAPiData } from '@/http/api';
// import clsx from 'clsx';
// import styles from './style.module.scss';
// import ProjectSwiper from '@/components/sections/projectSwiper';

// const ProjectDetailTemplate = () => {
//   const { slug } = useParams(); 

//   const {
//     data: project,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['project', slug],
//     queryFn: () => getAPiData(`/v1/projects/getBySlug/${slug}`), 
//     enabled: !!slug, 
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: {error.message}</p>;
//   if (!project) return <p>Project not found.</p>;

//   const imageUrl = project?.images?.[0]
//     ? project.images[0].startsWith('http')
//       ? project.images[0]
//       : `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${project.images[0]}`
//     : 'https://via.placeholder.com/300';

//   const name = project.name || 'No name';
//   const date = project.constructDate || 'No date';
//   const customer = project.orderOwner || 'No customer';

//   return (
//     <div className="container mx-auto my-20 px-4 max-w-screen-xl">
//       <div className={clsx(styles.projectimage)}>
//         <img className={clsx(styles.projectimg)} src={imageUrl} alt={name} />
//       </div>
//       <div className="py-7">
//         <div className="flex gap-6 py-6">
//           <h2 className={clsx(styles.detailname)}>Layihə adı</h2>
//           <h1 className={clsx(styles.detname)}> {name}</h1>
//         </div>
//         <div className="flex gap-6 py-6">
//           <h2 className={clsx(styles.detailname)}>İnşaat tarixi</h2>
//           <h1 className={clsx(styles.detname)}> {date}</h1>
//         </div>
//         <div className="flex gap-6 py-6">
//           <h2 className={clsx(styles.detailname)}>Sifarişçi</h2>
//           <h1 className={clsx(styles.detname)}> {customer}</h1>
//         </div>
//         <div className="flex gap-6 py-6">
//           <h2 className={clsx(styles.detailname)}>Məzmun</h2>
//           <div className={clsx(styles.detname, 'ql-editor')} dangerouslySetInnerHTML={{ __html: project.content || '' }} />

//         </div>
//       </div>
//       <ProjectSwiper images={project.images || []} />

//     </div>
//   );
// };

// export default ProjectDetailTemplate;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '@/http/api';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowLeft from '@/assets/arrow-left.svg';
import ArrowRight from '@/assets/arrow-right.svg';
import ProjectSwiper from '@/components/sections/projectSwiper'; 
import './style.css'

const ProjectDetailTemplate = () => {
  const { slug } = useParams();

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['project', slug],
    queryFn: () => getAPiData(`/v1/projects/getBySlug/${slug}`),
    enabled: !!slug,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!project) return <p>Project not found.</p>;

  const images = project.images || [];
  const name = project.name || 'No name';
  const date = project.constructDate || 'No date';
  const customer = project.orderOwner || 'No customer';

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      {images.length > 0 && (
        <div className="relative">
          <div className="swiper-button-prev-cert custom-swiper-button hidden sm:flex">
            <ArrowLeft />
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={{
              nextEl: '.swiper-button-next-cert',
              prevEl: '.swiper-button-prev-cert',
            }}
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
            modules={[Navigation]}
            className={clsx(styles.projectSwiper)}
          >
            {images.map((img, index) => {
              const imageUrl = img.startsWith('http')
                ? img
                : `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${img}`;
              return (
                <SwiperSlide key={index}>
                  <img className={clsx(styles.projectimg)} src={imageUrl} alt={`Project ${index + 1}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-next-cert custom-swiper-button hidden sm:flex">
            <ArrowRight />
          </div>
        </div>
      )}

      {/* Project Info */}
      <div className="py-7">
        <div className="flex gap-6 py-6">
          <h2 className={clsx(styles.detailname)}>Layihə adı</h2>
          <h1 className={clsx(styles.detname)}>{name}</h1>
        </div>
        <div className="flex gap-6 py-6">
          <h2 className={clsx(styles.detailname)}>İnşaat tarixi</h2>
          <h1 className={clsx(styles.detname)}>{date}</h1>
        </div>
        <div className="flex gap-6 py-6">
          <h2 className={clsx(styles.detailname)}>Sifarişçi</h2>
          <h1 className={clsx(styles.detname)}>{customer}</h1>
        </div>
        <div className="flex gap-6 py-6">
          <h2 className={clsx(styles.detailname)}>Məzmun</h2>
          <div
            className={clsx(styles.detname, 'ql-editor')}
            dangerouslySetInnerHTML={{ __html: project.content || '' }}
          />
        </div>
      </div>
      <ProjectSwiper images={project.images || []} />
    </div>
  );
};

export default ProjectDetailTemplate;

