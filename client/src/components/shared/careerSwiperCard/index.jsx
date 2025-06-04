import { CareerImageCont, CareerNameCont, CareerSwiperCardContainer, CareerSwiperDesc, CareerSwiperImage, CareerSwiperName } from '@/ui/careerSwiperCard';
import { InstaSwiperCardContainer, InstaSwiperImage, MissionImageCont, MissionSwiperDesc, MissionSwiperName } from '@/ui/InstaSwiperCard';
import React from 'react';


export default function CareerSwiperCard({ ImageSrc, name, desc }) {
  const basePath = import.meta.env.BASE_URL || '';
  return (
    <CareerSwiperCardContainer>
      <CareerSwiperImage>
      <CareerImageCont src={`${basePath}${ImageSrc}`} alt={name} />
      </CareerSwiperImage>
      <CareerNameCont>
      <CareerSwiperName>{name}</CareerSwiperName>
      <CareerSwiperDesc>{desc}</CareerSwiperDesc>
      </CareerNameCont>
    </CareerSwiperCardContainer>
  );
}

