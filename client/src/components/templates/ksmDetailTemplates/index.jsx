// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { getAPiData } from '@/http/api';
// import clsx from 'clsx';
// import styles from './style.module.scss';

// const KsmDetailTemplates = () => {
//   const { id } = useParams();

//   const {
//     data: ksms,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['ksms'],
//     queryFn: async () => await getAPiData(`/v1/ksm/${id}`),
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: {error.message}</p>;

//   const ksm = ksms.find((item) => String(item.id) === id);

//   if (!ksm) return <p>KSM not found.</p>;

//   // const imageUrl = ksm?.image?.url
//   //   ? ksm.image.url.startsWith('http')
//   //     ? ksm.image.url
//   //     : `${import.meta.env.VITE_API_BASE_URL}${ksm.image.url}`
//   //   : 'https://via.placeholder.com/300';

//   const context = ksm.context || 'No context';
//   console.log("URL Param ID:", id);
//   console.log("Fetched ksms:", ksms);

//   return (
//     <div className="container mx-auto my-20 px-4 max-w-screen-xl">
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//         <div className={clsx(styles.desccont)}>
//           <div className="py-6">
//             <p className={clsx(styles.detname)}>{context}</p>
//           </div>
//         </div>
//       </div>
//       <div style={{ maxWidth: '950px' }}>
//   {ksm.extraimages?.length > 0 && (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//       {ksm.extraimages.map((imgObj, idx) => (
//         <div key={idx} className={clsx(styles.projectimage)}>
//           <img
//             className="w-full h-full object-cover"
//             src={
//               imgObj?.url?.startsWith('http')
//                 ? imgObj.url
//                 : `${import.meta.env.VITE_API_BASE_URL}${imgObj?.url}`
//             }
//             alt={`Extra image ${idx + 1}`}
//           />
//         </div>
//       ))}
//     </div>
//   )}
// </div>


//     </div>
//   );
// };

// export default KsmDetailTemplates;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '@/http/api';
import clsx from 'clsx';
import styles from './style.module.scss';

const KsmDetailTemplates = () => {
  const { id } = useParams();

  const {
    data: ksm,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['ksm', id],
    queryFn: async () => await getAPiData(`/v1/ksm/${id}`),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!ksm) return <p>KSM not found.</p>;

  const context = ksm.paragraph || 'No context';

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className={clsx(styles.desccont)}>
          <div className="py-6">
            <p className={clsx(styles.detname)}>{context}</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '950px' }}>
        {ksm.extraimages?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {ksm.extraimages.map((imgObj, idx) => (
              <div key={idx} className={clsx(styles.projectimage)}>
                <img
                  className="w-full h-full object-cover"
                  src={
                    imgObj?.url?.startsWith('http')
                      ? imgObj.url
                      : `${import.meta.env.VITE_API_BASE_URL}${imgObj?.url}`
                  }
                  alt={`Extra image ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KsmDetailTemplates;

