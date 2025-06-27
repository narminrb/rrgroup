import React, { useState } from 'react';
import {
  KsmButton,
  KsmImageCont,
  KsmSwiperCardContainer,
  KsmSwiperDesc,
  KsmSwiperImage,
  KsmSwiperName
} from '@/ui/ksmCards';
import { Link } from 'react-router-dom';

export default function KsmCards({ id, ImageSrc, hoverImageSrc, name, desc }) {
  //const basePath = import.meta.env.BASE_URL || '';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <KsmSwiperCardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <KsmSwiperImage>
        <KsmImageCont
          src={`${isHovered ? hoverImageSrc : ImageSrc}`}
          alt={name}
        />
      </KsmSwiperImage>
      <KsmSwiperName>{name}</KsmSwiperName>
      <KsmSwiperDesc>{desc}</KsmSwiperDesc>
      <Link to={`/rrgroup/ksm/${id}`}>
      <KsmButton>Ətraflı</KsmButton>
      </Link>
    </KsmSwiperCardContainer>
  );
}
