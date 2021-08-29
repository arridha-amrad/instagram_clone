import React from "react";
import { Nav, NavContainer } from "../../appbar/appbar.elements";
import IGText from "../../../images/ig2.svg";

interface AuthAppbarProps { }

const AuthAppbar: React.FC<AuthAppbarProps> = () => {
  return (
    <Nav>
      <NavContainer>
        <div>
          <img src={IGText} style={{ height: "30px" }} alt="instagram" />
        </div>
      </NavContainer>
    </Nav>
  );
};

export default AuthAppbar;
