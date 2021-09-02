import React from "react";
import { Nav, NavContainer } from "../../appbar/appbar.elements";
import IGText from "../../../images/ig2.svg";
import { Link } from "react-router-dom";

interface AuthAppBarProps {}

const AuthAppBar: React.FC<AuthAppBarProps> = () => {
  return (
    <Nav>
      <NavContainer>
        <div>
          <Link to="/">
            <img src={IGText} style={{ height: "30px" }} alt="instagram" />
          </Link>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default AuthAppBar;
