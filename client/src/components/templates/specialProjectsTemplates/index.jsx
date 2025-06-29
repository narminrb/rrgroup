// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { getAPiData } from '@/http/api'
// import clsx from 'clsx'
// import styles from './style.module.scss'
// const SpecialProjectsTemplates = () => {
//   const { id } = useParams()

//   const {
//     data: allProjects,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['all-projects'],
//     queryFn: async () => await getAPiData(`/specials/${id}`), 
//   })

//   if (isLoading) return <p>Loading...</p>
//   if (isError) return <p>Error: {error.message}</p>

//   const project = allProjects.find((p) => String(p.id) === id)

//   if (!project) return <p>Project not found.</p>

//   const name = project.name || 'No name'


//   return (
//     <div className="container mx-auto my-20 px-4 max-w-screen-xl">
//          <div className='py-7'>
//         <div className='flex gap-6 py-6'>
//               <h1 className={clsx(styles.detailname)}> {name}</h1>
//               </div>
//       <div className='flex justify-start gap-6 py-6'>
//       <div className={clsx(styles.detname)}>
//   {project.context
//     ? project.context.split('\n\n').map((paragraph, idx) => (
//         <p key={idx} className="mb-4">{paragraph}</p>
//       ))
//     : <p className="text-gray-500">Məlumat mövcud deyil.</p>
//   }
// </div>
// </div>
//      </div>
//      <div className='grid grid-cols-1'>
//      {project.specialimages?.length > 0 && (
//   <div className={clsx(styles.imagebox)}>
//     {project.specialimages.map((img, idx) => {
//       const fullUrl = img.url.startsWith('http')
//         ? img.url
//         : `${import.meta.env.VITE_API_BASE_URL}${img.url}`

//       return (
//         <img
//           key={idx}
//           className={clsx(styles.projectimg)}
//           src={fullUrl}
//           alt={`Office Image ${idx + 1}`}
//         />
//       )
//     })}
//   </div>
// )}


//      </div>
//     </div>
//   )
// }

// export default SpecialProjectsTemplates
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '@/http/api';
import clsx from 'clsx';
import styles from './style.module.scss';

const SpecialProjectsTemplates = () => {
  const { slug } = useParams();

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['special-project', slug],
    queryFn: () => getAPiData(`/v1/specials/slug/${slug}`),
    enabled: !!slug,
  });
  console.log("slug:", slug);
console.log("project:", project);


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!project) return <p>Project not found.</p>;

  const name = project.name || 'No name';

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className="py-7">
        <div className="flex gap-6 py-6">
          <h1 className={clsx(styles.detailname)}>{name}</h1>
        </div>

        <div className="flex justify-start gap-6 py-6">
        <div className={clsx(styles.detname)}>
      {project.content ? (
        <div
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      ) : (
        <p className="text-gray-500">Məlumat mövcud deyil.</p>
      )}
    </div>
        </div>
      </div>

      {project.images?.length > 0 && (
        <div className={clsx(styles.imagebox)}>
          {project.images.map((filename, idx) => {
            const fullUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${filename}`;
            return (
              <img
                key={idx}
                className={clsx(styles.projectimg)}
                src={fullUrl}
                alt={`Image ${idx + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SpecialProjectsTemplates;
