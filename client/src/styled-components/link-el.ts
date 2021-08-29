import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyLink = styled(Link)`
  color: #566b97;
  display: block;
  text-align: center;
  font-size: 13px;
  text-decoration: none;
`;

export const MyLinkTwo = styled(Link)`
  text-decoration: none;
  color: #272727;
  font-weight: 500;
  font-size: 15px;
`;

export const MyLinkThree = styled(MyLinkTwo)`
  display: block;
  text-align: center;
  width: inherit;
  padding: 10px 0;
  font-weight: 600;
`;
