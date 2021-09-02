import React from "react";
import PlayStoreIcon from "./playstore.svg";
import AppStoreIcon from "./appstore.svg";
import { VSpacer } from "../../../styled-components/spacer-el";
import styled from "styled-components";

interface AppPlayStoreProps {}

const AppPlayStore: React.FC<AppPlayStoreProps> = () => {
  return (
    <>
      <GetAppText>
        <p>Get the app.</p>
      </GetAppText>
      <VSpacer aa_length="20px" />
      <GetAppStoreContainer>
        <AppWrapper>
          <img src={AppStoreIcon} alt="applestore" />
          <img src={PlayStoreIcon} alt="playstore" />
        </AppWrapper>
      </GetAppStoreContainer>
    </>
  );
};

export default AppPlayStore;

export const GetAppText = styled.div`
  width: 350px;
  font-size: 15px;

  p {
    text-align: center;
  }
`;

export const GetAppStoreContainer = styled.div`
  width: 350px;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;

  img {
    display: block;
    height: 40px;
  }
`;
