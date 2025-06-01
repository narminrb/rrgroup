import { styled } from "styled-components";


export const KsmSwiperCardContainer = styled.div`
  width: 380px;
  height: 370px;
  box-sizing: border-box;
  padding: 35px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 17px;
  background: #EFEFEF;
`;

export const KsmSwiperImage = styled.div`
 width: 90px;
height: 90px;
flex-shrink: 0;
aspect-ratio: 1/1;
`;
export const KsmImageCont = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: block;

`
export const KsmSwiperName = styled.h2`
  color: #0F2431;
font-family: Inter;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: inline-flex;
padding: 20px 0;
gap: 10px;
`;

export const KsmSwiperDesc = styled.p`
   color: #0F2431;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
`;

export const KsmButton = styled.button`
  margin-top: auto;
  align-self: flex-end;

  padding: 10px 20px;
  gap: 14px;
  border-radius: 9px;
  background: #0F2431;
  color: #FFF;
  font-family: Inter;
  font-size: 22px;
  font-weight: 400;
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


