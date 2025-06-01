import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
const AboutUs = () => {
  return (
   <div className='container max-w-screen-xl mx-auto my-20 px-3 relative'>
     <div className='grid grid-cols-12'>
        <div className='col-span-4'>
         <h1 className={clsx(styles.aboutus)}>Haqqımızda</h1>
        </div>
        <div className='col-span-8'>
        <p className={clsx(styles.aboutusdesc)}>
        Fəaliyyət göstərdiyi müddət ərzində RR Group 
        <br />
         Companies Azərbaycan özəl şirkətlərindən birinə çevrilmişdir
        </p>
        <div className="flex justify-end mt-4">
           <a href="about">
           <button className={clsx(styles.aboutusbtn)}>
              Daha ətraflı
            </button>
           </a>
          </div>
        </div>
    </div>
   </div>
  )
}

export default AboutUs