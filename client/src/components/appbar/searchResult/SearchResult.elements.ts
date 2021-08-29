import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImgStory, ImgStoryWrapper } from "../../home/story/story.elements";

export const ResultContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: -5rem;
  width: 377px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #ccc;
  z-index: 90;
  height: 365px;
  &::before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    background-color: #fff;
    position: absolute;
    top: -10px;
    left: 50%;
    z-index: -99;
    transform: rotate(45deg);
    box-shadow: -2px -2px 2px 0px #ccc;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: #efefef;
  }
`;

export const AvatarWrapper = styled(ImgStoryWrapper)`
  width: 55px;
  height: 55px;
  margin-right: 10px;
`;
export const Avatar = styled(ImgStory)`
  width: 51px;
  height: 51px;
`;

export const Username = styled(Link)`
  text-decoration: none;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
`;

export const Name = styled.p`
  color: #8e8e8e;
`;
