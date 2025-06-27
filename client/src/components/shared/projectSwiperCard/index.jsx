import { ProjImageCont, ProjSwiperCardContainer, ProjSwiperDesc, ProjSwiperImage, ProjSwiperName } from '@/ui/projectSwiperCard';
import React from 'react';


export default function ProjectSwiperCard({ ImageSrc, name, desc }) {
  return (
    <ProjSwiperCardContainer>
      {/* <InstaSwiperImage src={ImageSrc} alt={name} /> */}
      <ProjSwiperImage>
      <ProjImageCont src={ImageSrc} alt={name} />
      </ProjSwiperImage>
      <ProjSwiperName>{name}</ProjSwiperName>
      <ProjSwiperDesc>{desc}</ProjSwiperDesc>
    </ProjSwiperCardContainer>
  );
}

