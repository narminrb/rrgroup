import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants/QueryKeys';
import { getAPiData } from '@/http/api';
import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';

const AboutBoard = () => {
  const { data: boardData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.ABOUTBOARDS],
    queryFn: async () => await getAPiData('aboutboards?populate=*')
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-10">
             <div className='flex text-center justify-center my-5 mx-auto'>
                   <h1 className={clsx(styles.mission)}>Missiyamız</h1>
                 </div>
     <div className="flex flex-wrap gap-6 justify-center">
     {boardData?.map((board) => {
        const { id, image, name } = board;
        const imageUrl = image?.url || 'https://via.placeholder.com/150';

        return (
          <div
            key={id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-3">
              <img
                className="rounded-t-lg w-full object-cover h-48"
                src={imageUrl}
                alt={name}
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default AboutBoard;
