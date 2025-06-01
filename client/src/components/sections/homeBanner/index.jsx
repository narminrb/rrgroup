import React from 'react';

const HomeBanner = () => {
  return (
    <div className="w-full h-[607px] relative"> {/* adjust height as needed */}
      <img
        src="public/assets/banner.svg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HomeBanner;
