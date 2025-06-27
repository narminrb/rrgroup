import React from 'react'
import { NewsSwiperImage, NewsSwiperImageContainerWithHover } from '@/ui/newsSwiper';

const NewsSwiperCard = ({ ImageSrc,  }) => {
    return (
        <NewsSwiperImageContainerWithHover>
        <NewsSwiperImage src={ImageSrc} alt={name} />
      </NewsSwiperImageContainerWithHover>
    )
}

export default NewsSwiperCard
