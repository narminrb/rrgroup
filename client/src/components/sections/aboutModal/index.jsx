import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';

const AboutModal = ({ data, onClose }) => {
  if (!data) return null;
  const imageUrl = data.image?.url
  ? `${import.meta.env.VITE_API_BASE_URL}${data.image.url}`
  : 'https://via.placeholder.com/150';

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center z-50">
      <div className="bg-[#F7F6F6] rounded-sm  shadow-lg relative w-[734px] h-[600px]">
      <div className="relative flex justify-center px-8 py-4">
      <img
            className={clsx(styles.modalimg)}
            src={imageUrl}
            alt={data.name}
          />
            <button
            onClick={onClose}
            className={clsx(styles.closebtn, 'absolute -top-4 right-0')}
            >
            +
            </button>

            </div>


        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
          <p className={clsx(styles.modaldesc)}>
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;