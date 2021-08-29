import React from "react";
import { HomeFooterContainer, CopyrightFooter } from "./homeFooter.elements";

interface HomeFooterProps { }

const HomeFooter: React.FC<HomeFooterProps> = () => {
  return (
    <>
      <HomeFooterContainer>
        <div>About</div>
        <div className="dot"></div>
        <div>Help</div>
        <div className="dot"></div>
        <div>Press</div>
        <div className="dot"></div>
        <div>API</div>
        <div className="dot"></div>
        <div>Jobs</div>
        <div className="dot"></div>
        <div>Privacy</div>
        <div className="dot"></div>
        <div>Terms</div>
        <div className="dot"></div>
        <div>Locations</div>
        <div className="dot"></div>
        <div>Top Accounts</div>
        <div className="dot"></div>
        <div>Hashtags</div>
        <div className="dot"></div>
        <div>Language</div>
      </HomeFooterContainer>
      <CopyrightFooter>&copy; instagram_Clone from amrad</CopyrightFooter>
    </>
  );
};

export default HomeFooter;
