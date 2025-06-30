import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAPiData } from '@/http/api'
import clsx from 'clsx'
import styles from './style.module.scss'
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
    </div>
  )
}

export default ServiceOfficeTemplates
