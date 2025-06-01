import { ProjImageCont, ProjSwiperCardContainer, ProjSwiperDesc, ProjSwiperImage, ProjSwiperName } from '@/ui/projectSwiperCard';
import React from 'react';


export default function ProjectSwiperCard({ ImageSrc, name, desc }) {
  const basePath = import.meta.env.BASE_URL || '';
  return (
    <ProjSwiperCardContainer>
      {/* <InstaSwiperImage src={ImageSrc} alt={name} /> */}
      <ProjSwiperImage>
      <ProjImageCont src={`${basePath}${ImageSrc}`} alt={name} />
      </ProjSwiperImage>
      <ProjSwiperName>{name}</ProjSwiperName>
      <ProjSwiperDesc>{desc}</ProjSwiperDesc>
    </ProjSwiperCardContainer>
  );
}

