import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '@/http/api';
import clsx from 'clsx';
import styles from './style.module.scss';
import ServiceDetailSwiper from '@/components/sections/serviceDetailSwiper';

const ServiceDetailsTemplates = () => {
  const { slug } = useParams();

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['service-card', slug],
    queryFn: async () => await getAPiData(`/v1/service/card/getBySlug/${slug}`),
    enabled: !!slug,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!project) return <p>Project not found.</p>;
  const images = project.content?.images || [];
  // Fix image URL
  const imageUrl = project.content?.mainImage
  ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${project.content.mainImage}`
  : 'https://via.placeholder.com/300';


  const name = project.header || 'No name';

  const contentText = project.content?.contentWrite || '';

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className={clsx(styles.projectimage)}>
        <img className={clsx(styles.projectimg)} src={imageUrl} alt={name} />
      </div>

      <div className="py-7">
        <h1 className={clsx(styles.detailname)}>{name}</h1>

        <div className="flex gap-6 py-6">
          <div className={clsx(styles.detname)}>
            {contentText
              ? contentText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))
              : <p className="text-gray-500">Məlumat mövcud deyil.</p>}
          </div>
        </div>
      </div>

      <ServiceDetailSwiper images={images} />
    </div>
  );
};

export default ServiceDetailsTemplates;
