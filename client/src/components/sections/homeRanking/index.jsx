import clsx from 'clsx'
import React from 'react'
import styles from './style.module.scss'

const HomeRanking = () => {
  return (
    <div className='mx-auto my-20 px-3 relative'>
    <div className='grid grid-cols-12'>
            <div className='col-span-6'>
                <div className={clsx(styles.homeimg)}>
                </div>
            <img src="public/assets/home.svg" alt="" />
            </div>
            <div className='col-span-6 p-10'>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1 p-10 mb-4'>
                       <h1 className={clsx(styles.rankingnum)}>1340</h1>
                       <p className={clsx(styles.rankingdesc)}>Uğurlu layihə sayı</p>
                    </div>
                    <div className='col-span-1 p-10 mb-4'>
                    <h1 className={clsx(styles.rankingnum)}>90%</h1>
                    <p className={clsx(styles.rankingdesc)}>Müştəri məmnuniyyəti</p>
                    </div>

                </div>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1 p-10'>
                    <h1 className={clsx(styles.rankingnum)}>13+</h1>
                    <p className={clsx(styles.rankingdesc)}>Uğurlu layihə sayı</p>
                    </div>
                    <div className='col-span-1 p-10'>
                    <h1 className={clsx(styles.rankingnum)}>90%</h1>
                    <p className={clsx(styles.rankingdesc)}>Müştəri məmnuniyyəti</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeRanking