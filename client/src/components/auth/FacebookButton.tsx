import React from "react";
import {
  GButton,
  IconWrapper,
  IconBtn,
  BtnText,
} from "../../styled-components/button-el";
import FButton from "../../icons/facebook.svg";

interface FacebookButtonProps {}

const FacebookButton: React.FC<FacebookButtonProps> = () => {
  return (
    <GButton>
      <IconWrapper>
        <IconBtn src={FButton} />
      </IconWrapper>
      <BtnText className="bt">Log in with Facebook</BtnText>
    </GButton>
  );
};

export default FacebookButton;
