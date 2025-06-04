import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import KsmCards from '@/components/shared/ksmCards';

export default function KsmSection() {
  const { data:ksmData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.KSMS],
    queryFn: async () => await getAPiData('ksms?populate=*')
  });
  console.log(ksmData)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container max-w-screen-xl mx-auto my-10 px-3 relative"> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {ksmData?.map((el, index) => (
       <div key={index}>
         <KsmCards ImageSrc={el.image?.url} 
         hoverImageSrc={el.hoverimage.url}
          name={el.name}
          id={el.id}
          desc={el.desc}
          />
       </div>
      ))}
      </div>
  </div>
  
  );
}
