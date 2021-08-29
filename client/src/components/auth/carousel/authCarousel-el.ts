import styled from "styled-components";

export const AuthCarousel = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 100%;

  @media (min-width: 940px) {
    display: flex;
  }
`;

export const IPhoneXFrameContainer = styled.div`
  height: 582px;
  width: 371px;
  position: relative;
  z-index: 3;
  background: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
  background-position: center;
`;

export const IPhoneFrame = styled.div`
  position: absolute;
  left: 30px;
  top: -3px;
  width: inherit;
  z-index: 5;
`;

export const IPhoneFrame2 = styled.div`
  position: absolute;
  height: 420px;
  z-index: 1;
  top: -8px;
  left: -20px;
`;

export const IPhoneXFrame = styled.img`
  object-fit: contain;
  height: 618px;
`;

export const IPhoneX2Frame = styled.img`
  object-fit: contain;
  height: inherit;
  height: 580px;
`;

export const IPhoneXFrameCarousel = styled.div`
  width: 248px;
  position: absolute;
  right: 17px;
  top: 77px;
  z-index: -10;
`;

export const IPhoneXFrameImage = styled.img`
  height: 440px;
  object-fit: cover;
`;
