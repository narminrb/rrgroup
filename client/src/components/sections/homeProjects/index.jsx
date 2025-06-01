import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';
const HomeProjects = () => {
    
  return (
    <div className="container max-w-screen-xl mx-auto my-20 px-3 space-y-6">
         <h1 className={clsx(styles.aboutus)}>Layihələr</h1>
      <div>
        <img
          className="w-full h-[300px] object-cover"
          src="public/assets/proj1.svg"
          alt="Project 1"
        />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <img
            className="w-full h-[300px] object-cover"
            src="public/assets/proj2.svg"
            alt="Project 2"
          />
        </div>
        <div className="col-span-8 grid grid-cols-12 gap-4">
          <div className="col-span-7">
            <img
              className="w-full h-[300px] object-cover"
              src="public/assets/proj3.svg"
              alt="Project 3"
            />
          </div>
          <div className="col-span-5">
            <img
              className="w-full h-[300px] object-cover"
              src="public/assets/proj6.svg"
              alt="Project 6"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <img
            className="w-full h-[300px] object-cover"
            src="public/assets/proj4.svg"
            alt="Project 4"
          />
        </div>
        <div className="col-span-6">
          <img
            className="w-full h-[300px] object-cover"
            src="public/assets/proj5.svg"
            alt="Project 5"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
