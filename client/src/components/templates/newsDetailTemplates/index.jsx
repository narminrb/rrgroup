// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { getAPiData } from '@/http/api'
// import clsx from 'clsx'
// import styles from './style.module.scss'
// import NewsSwiper from '@/components/sections/newsSwiper'
// const NewsDetailTemplate = () => {
//   const { id } = useParams()

//   const {
//     data: allNews,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['all-projects'],
//     queryFn: async () => await getAPiData(`/v1/news/${id}`), 
//   })

//   if (isLoading) return <p>Loading...</p>
//   if (isError) return <p>Error: {error.message}</p>

//   const project = allNews.find((p) => String(p.id) === id)

//   if (!project) return <p>Project not found.</p>

//   const icon = project?.images
//   const imageUrl = icon
//   ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${icon}`
//   : 'https://via.placeholder.com/150';
//   const name = project.name || 'No name'
//   const context = project.context || 'No context'


//   return (
//     <div className="container mx-auto my-20 px-4 max-w-screen-xl">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/2 bg-[#F7F7F7] p-5">
//           <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4">
//             {name}
//           </h1>
//           <p className={clsx(styles.detname)}>
//             {context}
//           </p>
//         </div>
//         <div className="md:w-1/2">
//           <img
//             className="w-full h-auto object-cover rounded"
//             src={imageUrl}
//             alt={name}
//           />
//         </div>
//       </div>
  
//       <div className="mt-12">
//         <NewsSwiper />
//       </div>
//     </div>
//   );
  
// }

// export default NewsDetailTemplate


import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '@/http/api';
import NewsSwiper from '@/components/sections/newsSwiper';

const NewsDetailTemplate = () => {
  const { slug } = useParams();

  const {
    data: news,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['news-detail', slug],
    queryFn: async () => await getAPiData(`/v1/news/getBySlug/${slug}`),
    enabled: !!slug,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!news) return <p>Xəbər tapılmadı.</p>;

  const image = news.images?.[0] || null;
  const imageUrl = image
    ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${image}`
    : 'https://via.placeholder.com/150';

  const name = news.title || 'No name';
  const context = news.paragraph || 'No context';

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-[#F7F7F7] p-5">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            {name}
          </h1>
          <div
 className="ql-editor"
  dangerouslySetInnerHTML={{ __html: context }}
/>

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
        <NewsSwiper images={news.images}/>
      </div>
    </div>
  );
};

export default NewsDetailTemplate;
