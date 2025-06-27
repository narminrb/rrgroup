import React from 'react';
import Contact from '@/components/sections/contact';
import ContactMap from '@/components/sections/contactMap';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '@/http/api';
import clsx from 'clsx';
import styles from './style.module.scss';

const ContactTemplates = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['CONTACT_INFO'],
    queryFn: () => getAPiData('/v1/contact'),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Contact />
        <ContactMap />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[data].map(({ title, desciption, icon }, idx) => (
          <div key={idx} className="flex mx-auto items-center gap-4">
            <div className={clsx(styles.contactimg)}>
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${icon}`}
                alt={`${title} icon`}
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h1 className={clsx(styles.contactname)}>{title}</h1>
              <p>{desciption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTemplates;
