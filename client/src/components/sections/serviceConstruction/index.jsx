import React from 'react'
import ServiceConstructSwiper from '../serviceConstructSwiper'
import clsx from 'clsx'
import styles from './style.module.scss'
import ServiceSwiper from '@/components/shared/serviceSwiper'

const ServiceConstruction = () => {
  return (
    <div className="container max-w-screen-xl mx-auto my-20 px-5 relative">
        <div className='px-5'>
            <h1 className={clsx(styles.constname)}>Tikinti</h1>
            <p className={clsx(styles.constdesc)}>Ölkənin kənd təsərrüfatı məhsullarının saxlanılması və topdan satışı sahəsindəki iki ən böyük logistik mərkəzdən biri olan 'Aqrovest Logistics' RR group of Companies tərəfindən inşa edilmişdir. </p>
        </div>
        <ServiceSwiper/>
        <ServiceConstructSwiper/>
    </div>
  )
}

export default ServiceConstruction