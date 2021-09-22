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
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";

interface ProfileDataProps {}

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

  const { authenticatedUser } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <ModalBackground2 isShow={isShow} ref={myRef} onClick={ToggleModal}>
        <SettingsOptions isShow={isShow} />
      </ModalBackground2>

      <ProfileFirstLine>
        <ProfileUsername>{authenticatedUser?.username}</ProfileUsername>
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
          <span>{authenticatedUser?.followers}</span> followers
        </Followers>
        <Followings>
          <span>{authenticatedUser?.followings}</span> followings
        </Followings>
      </PostFollowersFollowingsArea>

      <AccountDetails>
        <AccountName>{authenticatedUser?.fullName}</AccountName>
        <Bio>{authenticatedUser?.bio}</Bio>
        <Web>{authenticatedUser?.website}</Web>
      </AccountDetails>
    </>
  );
};

export default ProfileData;
