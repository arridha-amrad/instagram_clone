import React, { useCallback, useEffect, useRef, useState } from "react";
import Setting from "./settings.svg";
import SettingsOptions from "../modal/settings/settingsModal";
import {
  ProfileFirstLine,
  ProfileUsername,
  EditProfileButton,
  SettingsIcon,
  Post,
  Followers,
  Followings,
  AccountName,
  Bio,
  Web,
  EditProfileButton2,
  AccountDetails,
  PostFollowersFollowingsArea,
} from "./userDetails.element";
import { ModalBackground2 } from "../modal/settings/settingsModal.element";

interface ProfileDataProps { }

const ProfileData: React.FC<ProfileDataProps> = () => {
  const [isShow, setShow] = useState(false);
  const myRef = useRef();

  const ToggleModal = (e: any) => {
    if (myRef.current === e.target) {
      setShow(false);
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isShow) {
        setShow(false);
      }
    },
    [setShow, isShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      <ModalBackground2 isShow={isShow} ref={myRef} onClick={ToggleModal}>
        <SettingsOptions isShow={isShow} />
      </ModalBackground2>

      <ProfileFirstLine>
        <ProfileUsername>square_pants</ProfileUsername>
        <EditProfileButton to="/accounts/edit">Edit Profile</EditProfileButton>
        <SettingsIcon
          onClick={() => setShow(true)}
          className="item"
          src={Setting}
        />
      </ProfileFirstLine>

      <EditProfileButton2 to="/accounts/edit">Edit Profile</EditProfileButton2>

      <PostFollowersFollowingsArea>
        <Post>
          <span>10</span> post
        </Post>
        <Followers>
          <span>1.2k</span> followers
        </Followers>
        <Followings>
          <span>10</span> followings
        </Followings>
      </PostFollowersFollowingsArea>

      <AccountDetails>
        <AccountName>Spongebob</AccountName>
        <Bio>
          A yellow sea sponge named SpongeBob SquarePants. He embarks on various
          adventures with his friends at Bikini Bottom.
        </Bio>
        <Web>www.mrsquare.com</Web>
      </AccountDetails>
    </>
  );
};

export default ProfileData;
