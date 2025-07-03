import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAPiData } from '@/http/api'
import clsx from 'clsx'
import styles from './style.module.scss'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NewsSwiperCard from '@/components/shared/newsSwiperCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const ServiceOfficeTemplates = () => {
  const { slug } = useParams()

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['foreign-office', slug],
    queryFn: async () => await getAPiData(`/v1/foreign/getBySlug/${slug}`),
    enabled: !!slug,
  });
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!project) return <p>Project not found.</p>;
  



  if (!project) return <p>Project not found.</p>

  const name = project.header || 'No name'


  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
         <div className='py-7'>
        <div className='flex gap-6 py-6'>
              <h1 className={clsx(styles.detailname)}> {name}</h1>
              </div>
      <div className='flex justify-start gap-6 py-6'>
      <div className={clsx(styles.detname)}>
  {project.description
    ? project.description.split('\n\n').map((paragraph, idx) => (
        <p key={idx} className="mb-4">{paragraph}</p>
      ))
    : <p className="text-gray-500">Məlumat mövcud deyil.</p>
  }
</div>
</div>
     </div>
     <div className='grid grid-cols-1'>
     {project.officeimage?.length > 0 && (
  <div className="grid grid-cols-2 gap-4">
    {project.officeimage.map((img, idx) => {
      const fullUrl = img.url.startsWith('http')
        ? img.url
        : `${import.meta.env.VITE_API_BASE_URL}${img.url}`

      return (
        <img
          key={idx}
          className={clsx(styles.projectimg)}
          src={fullUrl}
          alt={`Office Image ${idx + 1}`}
        />
      )
    })}
  </div>
)}

     </div>
     {project.content?.images?.length > 0 && (
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
                    {project.content?.images?.map((filename, index) => {
            const imageUrl = filename
                ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${filename}`
                : 'https://via.placeholder.com/300';

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
      )}
    </div>
  )
}

export default ServiceOfficeTemplates
