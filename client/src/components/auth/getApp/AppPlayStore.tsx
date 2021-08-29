import React from "react";
import PlayStoreIcon from "./playstore.svg";
import AppStoreIcon from "./appstore.svg";
import { VSpacer } from "../../../styled-components/spacer-el";
import { GetAppText, GetAppStoreContainer, AppWrapper } from "./getApp-el";

interface AppPlayStoreProps {}

const AppPlayStore: React.FC<AppPlayStoreProps> = () => {
  return (
    <>
      <GetAppText>
        <p>Get the app.</p>
      </GetAppText>
      <VSpacer />
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
