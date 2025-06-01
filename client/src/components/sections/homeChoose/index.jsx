import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import { QueryKeys } from '@/constants/QueryKeys';
import { getAPiData } from '@/http/api';
import { useQuery } from '@tanstack/react-query';

const HomeChoose = () => {
  const { data: boardData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.CHOOSEUS],
    queryFn: async () => await getAPiData('chooseus?populate=*'),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container max-w-screen-xl mx-auto my-20 px-3 space-y-6">
      <h1 className={clsx(styles.aboutus)}>Niyə bizi seçməlisiniz?</h1>

      <div className="grid grid-cols-2 gap-6">
        {boardData?.slice(0, 4).map((board) => {
          const { id, image, name,desc } = board;
          const imageUrl = image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${image.url}`
            : 'https://via.placeholder.com/150';

          return (
       <div  key={id}>
         <div className="bg-white dark:bg-gray-800 flex justify-center items-center  p-5">
         <div className="relative plus-border max-w-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">

            <div className="flex gap-2 items-start">
            <img className="h-16 w-16" src={imageUrl}
              alt={name}/>

            <div>
            <h5 className={clsx(styles.choosename)}>{name}</h5>
            <p className={clsx(styles.choosedesc)}>
            {desc}   </p>
            </div>
            </div>
        </div>
        </div>
            {/* <div
            key={id}
            className="bg-white  shadow-sm p-4 flex items-start gap-4"
          >
            <img
              className="w-[100px] h-[100px] object-cover rounded"
              src={imageUrl}
              alt={name}
            />
            <div className="flex flex-col justify-start">
              <h5 className="text-[20px] font-medium text-black mb-2">{name}</h5>
              <p className="text-sm text-gray-700">
                {desc}
              </p>
            </div>
          </div> */}
       </div>
          
          );
        })}
      </div>
    </div>
  );
};

export default HomeChoose;
