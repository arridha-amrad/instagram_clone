import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  AuthCarousel,
  IPhoneXFrameCarousel,
  IPhoneXFrameContainer,
  IPhoneXFrameImage,
} from "./authCarousel-el";

interface MyAuthCarouselProps {}

const MyAuthCarousel: React.FC<MyAuthCarouselProps> = () => {
  return (
    <AuthCarousel>
      <IPhoneXFrameContainer>
        <IPhoneXFrameCarousel>
          <Carousel
            showIndicators={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
          >
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" />
          </Carousel>
        </IPhoneXFrameCarousel>
      </IPhoneXFrameContainer>
    </AuthCarousel>
  );
};

export default MyAuthCarousel;
