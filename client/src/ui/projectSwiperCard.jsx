import { styled } from "styled-components";


export const ProjSwiperCardContainer = styled.div`
display: flex;
width: 100%;
height: 600px;
padding: 30px 19px;
flex-direction: column;
gap: 10px;
border-radius: 20px;
align-items: flex-start;
background: rgba(217, 217, 217, 0.20);
`;

export const ProjSwiperImage = styled.div`
  width: 564px;
  height: 400px;
  flex-shrink: 0;
  aspect-ratio: 4/3;
  border-radius: 10px;
  align-self: center;
  overflow: hidden;
  `;
export const ProjImageCont = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;

`
export const ProjSwiperName = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-bottom:10px;
  margin-top:10px;
  text-align: left;
`;

export const ProjSwiperDesc = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; 
    text-align: left;
`;

