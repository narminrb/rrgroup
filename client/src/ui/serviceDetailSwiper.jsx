import { styled } from "styled-components";

export const ServiceDetailSwiperContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  
`;


export const ServiceDetailSwiperImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
    aspect-ratio: 379/284;
    width: 576px;
height: 420px;
border-radius: 10px;
background: #4C3333;
  
  
`;

export const ServiceDetailSwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
`;



export const NewsSwiperImageContainerWithHover = styled(ServiceDetailSwiperContainer)`
 
`;
