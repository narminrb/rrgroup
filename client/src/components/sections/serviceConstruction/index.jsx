// import React from 'react'
// import ServiceConstructSwiper from '../serviceConstructSwiper'
// import clsx from 'clsx'
// import styles from './style.module.scss'
// import ServiceSwiper from '@/components/shared/serviceSwiper'

// const ServiceConstruction = () => {
//   return (
//     <div className="container max-w-screen-xl mx-auto my-20 px-5 relative">
//         <div className='px-5'>
//             <h1 className={clsx(styles.constname)}>Tikinti</h1>
//             <p className={clsx(styles.constdesc)}>Ölkənin kənd təsərrüfatı məhsullarının saxlanılması və topdan satışı sahəsindəki iki ən böyük logistik mərkəzdən biri olan 'Aqrovest Logistics' RR group of Companies tərəfindən inşa edilmişdir. </p>
//         </div>
//         <ServiceSwiper/>
//         <ServiceConstructSwiper/>
//     </div>
//   )
// }

// export default ServiceConstruction
// import { useQuery } from '@tanstack/react-query';
// import { getAPiData } from '../../../http/api';
// import ServiceConstructSwiper from '../serviceConstructSwiper';
// import ServiceSwiper from '@/components/shared/serviceSwiper';

// const ServiceConstruction = () => {
//   const { data: headCategories = [] } = useQuery({
//     queryKey: ['headCategories'],
//     queryFn: () => getAPiData('/v1/service/head-category/all'),
//   });

//   const { data: subCategories = [] } = useQuery({
//     queryKey: ['subCategories'],
//     queryFn: () => getAPiData('/v1/service/sub-category/all'),
//   });

//   const { data: serviceCards = [] } = useQuery({
//     queryKey: ['serviceCards'],
//     queryFn: () => getAPiData('/v1/service/card/all'),
//   });
//   const handleSubCategoryClick = (slug) => {
//     setSelectedSlug(slug === selectedSlug ? null : slug); // toggles selection
//   };

//   return (
//     <div>
//       {headCategories.map((category) => {
//         const filteredSubCategories = subCategories.filter(
//           sub => sub.headCategorySlug === category.slug
//         );

//         const filteredCards = serviceCards.filter(
//           card => card.headCategorySlug === category.slug
//         );

//         return (
//           <div key={category.id} className="mb-16">
//             <div className="container max-w-screen-xl mx-auto my-10 px-5">
//               <h1 className="text-2xl font-bold">{category.name}</h1>
//               <p className="text-gray-600">{category.description}</p>
//             </div>

//             {/* <ServiceSwiper data={filteredSubCategories} /> */}
//                       <ServiceSwiper
//             data={filteredSubCategories}
//             onSubCategoryClick={handleSubCategoryClick}
//             selectedSlug={selectedSlug}
//           />

//             <ServiceConstructSwiper data={filteredCards} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ServiceConstruction;
import React, { useState } from 'react'; // <-- You missed this
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '../../../http/api';
import ServiceConstructSwiper from '../serviceConstructSwiper';
import ServiceSwiper from '@/components/shared/serviceSwiper';

const ServiceConstruction = () => {
  const [selectedSlug, setSelectedSlug] = useState(null); // <-- You forgot this

  const { data: headCategories = [] } = useQuery({
    queryKey: ['headCategories'],
    queryFn: () => getAPiData('/v1/service/head-category/all'),
  });

  const { data: subCategories = [] } = useQuery({
    queryKey: ['subCategories'],
    queryFn: () => getAPiData('/v1/service/sub-category/all'),
  });

  const { data: serviceCards = [] } = useQuery({
    queryKey: ['serviceCards'],
    queryFn: () => getAPiData('/v1/service/card/all'),
  });

  const handleSubCategoryClick = (slug) => {
    setSelectedSlug(slug === selectedSlug ? null : slug);
  };

  return (
    <div>
      {headCategories.map((category) => {
        const filteredSubCategories = subCategories.filter(
          sub => sub.headCategorySlug === category.slug
        );

        const filteredCards = serviceCards.filter(
          card =>
            card.headCategorySlug === category.slug &&
            (!selectedSlug || card.subCategorySlug === selectedSlug) 
        );

        return (
          <div key={category.id} className="mb-16">
            <div className="container max-w-screen-xl mx-auto my-10 px-5">
              <h1 className="text-2xl font-bold">{category.name}</h1>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <ServiceSwiper
              data={filteredSubCategories}
              onSubCategoryClick={handleSubCategoryClick}
              selectedSlug={selectedSlug}
            />

            <ServiceConstructSwiper data={filteredCards} />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceConstruction;
