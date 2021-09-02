import React from "react";
import FButton from "../../icons/facebook.svg";
import styled from "styled-components";

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

export const GButton = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  outline: none;
  border: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #fafafa;
  border-radius: 5px;
`;

export const IconBtn = styled.img`
  width: 23px;
`;

export const BtnText = styled.h1`
  font-size: 0.9rem;
  color: #566b97;
  margin-left: 8px;
`;
