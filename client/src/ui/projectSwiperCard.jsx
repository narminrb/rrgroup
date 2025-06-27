// import { styled } from "styled-components";


// export const ProjSwiperCardContainer = styled.div`
// display: flex;
// width: 100%;
// height: 600px;
// padding: 30px 19px;
// flex-direction: column;
// gap: 10px;
// border-radius: 20px;
// align-items: flex-start;
// background: rgba(217, 217, 217, 0.20);
// `;

// export const ProjSwiperImage = styled.div`
//   max-width: 564px;
//   height: 400px;
//   flex-shrink: 0;
//   aspect-ratio: 4/3;
//   border-radius: 10px;
//   align-self: center;
//   overflow: hidden;
//   `;
// export const ProjImageCont = styled.img`
// width: 100%;
//   height: 100%;
//   object-fit: cover;

// `
// export const ProjSwiperName = styled.h2`
//   color: #000;
//   font-family: Inter;
//   font-size: 18px;
//   font-weight: 600;
//   margin: 0;
//   margin-bottom:10px;
//   margin-top:10px;
//   text-align: left;
// `;

// export const ProjSwiperDesc = styled.p`
//     color: #000;
//     font-family: Inter;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 300;
//     line-height: 150%; 
//     text-align: left;
// `;


import { styled } from "styled-components";

export const ProjSwiperCardContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 400px;  /* flexible height */
  padding: 30px 19px;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  align-items: flex-start;
  background: rgba(217, 217, 217, 0.20);

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 20px 15px;
  }
`;

export const ProjSwiperImage = styled.div`
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  aspect-ratio: 4 / 3;
  border-radius: 10px;
  align-self: center;
  overflow: hidden;

  @media (max-width: 768px) {
    aspect-ratio: 16 / 9;  /* better for mobile */
  }
`;

export const ProjImageCont = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjSwiperName = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 10px 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProjSwiperDesc = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
