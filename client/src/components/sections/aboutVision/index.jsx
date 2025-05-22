import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

const AboutVision = () => {
  return (
    <div>
      <div className='flex text-center justify-center my-5 mx-auto'>
            <h1 className={clsx(styles.vision)}>Vizyonumuz</h1>
          </div>
        <section className="bg-[#313756] w-full">
    <div className={clsx(styles.cont)}>
            <div className="space-y-4">
               

                <p className={clsx(styles.desc)}>
                    
«RR Group of Companies» Azərbaycanda və onun xaricində ölkənin tanınmış “biznes brendi"-nə çevirməkdir.
                </p>
            </div>
    </div>
</section>
    </div>
  )
}

export default AboutVision