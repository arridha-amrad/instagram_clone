import React from "react";
import AppBar from "../../appbar/Appbar";
import AccountData from "../details/UserDetails"
import ProfileMenus from "../menu/Menu";
import { SpacerFromNavbarProfile } from "../../../styled-components/spacer-el";
import { AccountHeader, AccountWrapper, AvatarWrapper, AccountAvatar, AccountDataWrapper, AccountWrapper2, Name, Bio, Web, PostFollowerFollowingArea2, PostFoll2, Total2, Menu2 } from "../profile.elements";
import { ProfileContainer, HorizontalLine } from "./userContainer.elements"
import UserFooter from "../footer/UserFooter"

interface UserContainerProps { }

const UserContainer: React.FC<UserContainerProps> = ({ children }) => {
  return (
    <>
      <AppBar />
      <SpacerFromNavbarProfile />
      <ProfileContainer>
        <AccountHeader>

          <AccountWrapper>
            <AvatarWrapper>
              <AccountAvatar src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg?w=600&h=383&crop=1" />
            </AvatarWrapper>
            <AccountDataWrapper>
              <AccountData />
            </AccountDataWrapper>
          </AccountWrapper>

          <AccountWrapper2>
            <Name>Spongebob</Name>
            <Bio>
              A yellow sea sponge named SpongeBob SquarePants.
              <br /> He embarks on various adventures with his friends at Bikini
              Bottom.
            </Bio>
            <Web>www.mrsquare.com</Web>
          </AccountWrapper2>

          <PostFollowerFollowingArea2>
            <PostFoll2>
              <Total2>1000</Total2>
              <Menu2>Post</Menu2>
            </PostFoll2>
            <PostFoll2>
              <Total2>1000</Total2>
              <Menu2>Follwers</Menu2>
            </PostFoll2>
            <PostFoll2>
              <Total2>1000</Total2>
              <Menu2>Followings</Menu2>
            </PostFoll2>
          </PostFollowerFollowingArea2>
        </AccountHeader>

        <HorizontalLine />
        <ProfileMenus />
        {children}
        <UserFooter />
      </ProfileContainer>
    </>
  )
}

export default UserContainer