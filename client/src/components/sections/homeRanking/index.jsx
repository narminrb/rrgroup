// import clsx from 'clsx'
// import React from 'react'
// import styles from './style.module.scss'

// const HomeRanking = () => {
//   return (
//     <div className="mx-auto my-2 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         <div className="flex justify-center">
//           <div className={clsx(styles.homeimg)}>
//             <img
//               src={`${import.meta.env.BASE_URL}assets/home.svg`}
//               alt="Home"
//               className="w-full max-w-md md:max-w-full object-contain"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="p-6 text-center sm:text-left">
//             <h1 className={clsx(styles.rankingnum)}>1340</h1>
//             <p className={clsx(styles.rankingdesc)}>Uğurlu layihə sayı</p>
//           </div>
//           <div className="p-6 text-center sm:text-left">
//             <h1 className={clsx(styles.rankingnum)}>90%</h1>
//             <p className={clsx(styles.rankingdesc)}>Müştəri məmnuniyyəti</p>
//           </div>
//           <div className="p-6 text-center sm:text-left">
//             <h1 className={clsx(styles.rankingnum)}>13+</h1>
//             <p className={clsx(styles.rankingdesc)}>İllik təcrübə</p>
//           </div>
//           <div className="p-6 text-center sm:text-left">
//             <h1 className={clsx(styles.rankingnum)}>24/7</h1>
//             <p className={clsx(styles.rankingdesc)}>Texniki dəstək</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomeRanking


import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { getAPiData } from '../../../http/api';

const HomeRanking = () => {
  const [aboutCards, setAboutCards] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    getAPiData('/v1/home/about')
      .then(data => {
        setAboutCards(data?.aboutCards || []);
        setImage(data?.image || '');
      })
      .catch(err => console.error('HomeRanking error:', err));
  }, []);

  return (
    <div className="mx-auto my-2 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex justify-center">
          <div className={clsx(styles.homeimg)}>
            {image && (
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${image}`}
                alt="Home"
                className="w-full max-w-md md:max-w-full object-contain"
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {aboutCards.map((card, index) => (
            <div key={index} className="p-6 text-center sm:text-left">
              <h1 className={clsx(styles.rankingnum)}>{card.title}</h1>
              <p className={clsx(styles.rankingdesc)}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomeRanking;

