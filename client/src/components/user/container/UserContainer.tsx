import React from "react";
import AppBar from "../../appbar/Appbar";
import AccountData from "../details/UserDetails";
import ProfileMenus from "../menu/Menu";
import { SpacerFromNavbarProfile } from "../../../styled-components/spacer-el";
import { ProfileContainer, HorizontalLine } from "./userContainer.elements";
import UserFooter from "../footer/UserFooter";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";

interface UserContainerProps {}

const UserContainer: React.FC<UserContainerProps> = ({ children }) => {
  const { authenticatedUser } = useSelector((state: RootState) => state.auth);
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
  );
};

export default UserContainer;

const AccountWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 5fr;
  padding: 20px 20px;

  @media (min-width: 736px) {
    grid-template-columns: 2fr 4fr;
    padding: 0 0;
  }
`;

const AccountWrapper2 = styled.div`
  margin: 0px 20px 20px;
  display: block;

  @media (min-width: 736px) {
    display: none;
  }
`;

const Name = styled.p`
  font-weight: 600;
  line-height: 1.9;
  display: block;
`;

const Bio = styled.p`
  line-height: 1.6;
  display: block;
`;

const Web = styled.p`
  font-weight: 600;
  color: #00376b;
  display: block;
`;

const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;

  @media (min-width: 736px) {
    justify-content: center;
  }
`;

const AccountAvatar = styled.img`
  height: 75px;
  width: 75px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;

  @media (min-width: 736px) {
    height: 150px;
    width: 150px;
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;

  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 20px;
  }
  @media (min-width: 935px) {
    padding: 0 0px;
    gap: 27px;
  }
`;

const PostWrapper = styled.div`
  height: 294px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    cursor: pointer;
    .on-hover {
      display: inline-block;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const CommentLikeWrapper = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  z-index: 50;
`;

const Comment = styled.div`
  display: none;
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  i {
    font-size: 23px;
    transform: rotateY(180deg);
    margin-right: 8px;
  }
`;

const Likes = styled(Comment)`
  left: 10%;
  margin-left: 0;
  margin-right: 10px;
  @media (min-width: 736px) {
    left: 20%;
  }
  i {
    font-size: 23px;
    margin-left: 8px;
  }
`;

const PostImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const AccountDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AccountHeader = styled.div`
  margin-bottom: 0;
  @media (min-width: 736px) {
    margin-bottom: 44px;
  }
`;

const PostFollowerFollowingArea2 = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #dbdbdb;

  @media (min-width: 736px) {
    display: none;
  }
`;

const PostFoll2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Total2 = styled.p`
  font-weight: 700;
`;

const Menu2 = styled.p`
  color: #8e8e8e;
`;
