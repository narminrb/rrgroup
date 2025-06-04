import Contact from '@/components/sections/contact'
import ContactMap from '@/components/sections/contactMap'
import React from 'react'
import Contact1 from '../../../../public/assets/contact1.svg'
import Contact2 from '../../../../public/assets/contact2.svg'
import Contact3 from '../../../../public/assets/contact3.svg'
import clsx from 'clsx'
import styles from './style.module.scss'

const ContactTemplates = () => {
  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Contact />
        <ContactMap />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[{
          Icon: Contact1,
          title: 'Ünvan',
          description: 'Lökbatan q.',
        }, {
          Icon: Contact2,
          title: 'E-mail',
          description: 'rrgroup@gmail.com',
        }, {
          Icon: Contact3,
          title: 'Tel',
          description: '+994055345434',
        }].map(({ Icon, title, description }, idx) => (
          <div key={idx} className="flex mx-auto items-center gap-4">
            <div className={clsx(styles.contactimg)}>
              <Icon alt={`${title} Illustration`} />
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h1 className={clsx(styles.contactname)}>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactTemplates
