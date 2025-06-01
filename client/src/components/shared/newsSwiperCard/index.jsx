import React from 'react'
import { NewsSwiperImage, NewsSwiperImageContainerWithHover } from '@/ui/newsSwiper';

const NewsSwiperCard = ({ ImageSrc,  }) => {
  const basePath = import.meta.env.BASE_URL || '';
    return (
        <NewsSwiperImageContainerWithHover>
        <NewsSwiperImage src={`${basePath}${ImageSrc}`} alt={name} />
      </NewsSwiperImageContainerWithHover>
    )
}

export default NewsSwiperCard
