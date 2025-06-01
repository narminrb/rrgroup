import React from 'react';
import { KsmButton, KsmImageCont, KsmSwiperCardContainer, KsmSwiperDesc, KsmSwiperImage, KsmSwiperName } from '@/ui/ksmCards';


export default function KsmCards({ ImageSrc, name, desc }) {
  const basePath = import.meta.env.BASE_URL || '';
  return (
    <KsmSwiperCardContainer>
      <KsmSwiperImage>
      <KsmImageCont src={`${basePath}${ImageSrc}`} alt={name} />
      </KsmSwiperImage>
      <KsmSwiperName>{name}</KsmSwiperName>
      <KsmSwiperDesc>{desc}</KsmSwiperDesc>
      <KsmButton>Ətraflı</KsmButton>
    </KsmSwiperCardContainer>
  );
}

