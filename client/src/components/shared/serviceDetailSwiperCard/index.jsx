import React from 'react'
import { ServiceDetailSwiperImage, ServiceDetailSwiperImageContainer } from '@/ui/serviceDetailSwiper';

const ServiceDetailSwiperCard = ({ ImageSrc,  }) => {
  const basePath = import.meta.env.BASE_URL || '';
    return (
        <ServiceDetailSwiperImageContainer>
        <ServiceDetailSwiperImage src={`${basePath}${ImageSrc}`} alt={name} />
      </ServiceDetailSwiperImageContainer>
    )
}

export default ServiceDetailSwiperCard
