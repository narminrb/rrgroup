import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAPiData } from '@/http/api'
import clsx from 'clsx'
import styles from './style.module.scss'
import NewsSwiper from '@/components/sections/newsSwiper'
const NewsDetailTemplate = () => {
  const { id } = useParams()

  const {
    data: allNews,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['all-projects'],
    queryFn: async () => await getAPiData('newscards'), 
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  const project = allNews.find((p) => String(p.id) === id)

  if (!project) return <p>Project not found.</p>

  const imageUrl = project?.image?.url
  ? project.image.url.startsWith('http')
    ? project.image.url
    : `${import.meta.env.VITE_API_BASE_URL}${project.image.url}`
  : 'https://via.placeholder.com/300'
  const name = project.name || 'No name'
  const context = project.context || 'No context'


  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-[#F7F7F7] p-5">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            {name}
          </h1>
          <p className={clsx(styles.detname)}>
            {context}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full h-auto object-cover rounded"
            src={imageUrl}
            alt={name}
          />
        </div>
      </div>
  
      <div className="mt-12">
        <NewsSwiper />
      </div>
    </div>
  );
  
}

export default NewsDetailTemplate
