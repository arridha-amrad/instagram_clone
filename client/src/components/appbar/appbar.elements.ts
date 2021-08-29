import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  height: 52px;
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: fixed;
  z-index: 90;
`;

export const NavArea = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr 2fr;
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NavContainer = styled.div`
  max-width: 935px;
  width: 100%;
`;

export const NavTitle = styled(Link)`
  display: block;
  align-self: center;
  height: 29px;
  margin-left: 1rem;

  img {
    height: 29px;
  }

  @media (min-width: 940px) {
    margin-left: 0;
  }
`;

export const NavSearchArea = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 600px) {
    display: flex;
  }
`;

interface NavSearchProps {
  searchFocus?: boolean;
}
export const NavSearch = styled.div<NavSearchProps>`
  height: 29px;
  width: 214px;
  position: relative;
  background-color: #fafafa;

  .search {
    position: absolute;
    top: 50%;
    left: ${(props) => (props.searchFocus ? "8%" : "40%")};
    transform: translate(-50%, -50%);
    color: #ccc;
    font-size: 12px;
  }

  .times {
    display: ${(props) => (props.searchFocus ? "block" : "none")};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ccc;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: 1px solid #ccc;
  height: 100%;
  width: 100%;
  padding-left: 6rem;
  outline: none;
  &:focus {
    padding-left: 1.8rem;
  }
`;

interface NavAction768Props {
  aa_show: boolean;
}
export const NavAction768 = styled.div<NavAction768Props>`
  display: ${(props) => (props.aa_show ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const NavActions = styled.div`
  position: relative;
  flex-grow: 1;
  align-items: center;
  flex-basis: 100%;
  height: inherit;
  justify-content: center;
  padding: 0rem 2rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  /* background: #544363; */

  @media (min-width: 940px) {
    padding-right: 0;
  }
`;

export const NavLink = styled(Link)`
  /* background: #766678; */
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  img {
    width: 29px;
    height: 29px;
  }

  /* @media (min-width: 768px) {
    height: 45px;
    width: 45px;
  } */
`;

interface NavbarProfileProps {
  isFocus: boolean;
}

export const NavbarProfile = styled.button<NavbarProfileProps>`
  border: ${(props) => (props.isFocus ? "1px solid #1a1a1a" : "transparent")};
  outline: none;
  height: 25px;
  width: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 50%;
  padding: 2px;

  &:focus {
    border: 1px solid #1a1a1a;
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface FixedLayerProps {
  ref?: any;
}
export const FixedLayer = styled.div<FixedLayerProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: -10;
`;
