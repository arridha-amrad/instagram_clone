import React from "react";
import { AuthorContainer, AuthorWrapper, AuthorImg, AuthorUsername, AuthorOptions } from "./postAuthor.elements";
import MenuImg from "../../images/card/menu.svg";

interface PostAuthorProps {
  avatar: string
  username: string
}

const PostAuthor: React.FC<PostAuthorProps> = ({ avatar, username }) => {
  return (
    <AuthorContainer>
      <AuthorWrapper>
        <AuthorImg src={avatar} alt="profile" />
        <AuthorUsername to="/home">{username}</AuthorUsername>
      </AuthorWrapper>
      <AuthorOptions src={MenuImg} alt="menu" />
    </AuthorContainer>
  )
}

export default PostAuthor