import React from "react";
import { AuthFooter, AuthFooterRow, Footer } from "./authFooter-el";

interface FooterProps {}

const MyFooter: React.FC<FooterProps> = () => {
  return (
    <Footer>
      <AuthFooter>
        <AuthFooterRow>
          <div>About</div>
          <div>Blog</div>
          <div>Jobs</div>
          <div>Help</div>
          <div>API</div>
          <div>Privacy</div>
          <div>Terms</div>
          <div>Top Accounts</div>
          <div>Hashtag</div>
          <div>Locations</div>
        </AuthFooterRow>
        <AuthFooterRow>
          <div>Beauty</div>
          <div>Dance & Performance</div>
          <div>Fitness</div>
          <div>Food & Drink</div>
          <div>Home & Garden</div>
          <div>Music</div>
          <div>Visual Arts</div>
        </AuthFooterRow>
        <AuthFooterRow>
          <div>
            English
            <select
              style={{ border: "none", color: "#ccc" }}
              name="select"
              id="select"
            ></select>
          </div>
          <div>&copy; InstagramClone from Arridha</div>
        </AuthFooterRow>
      </AuthFooter>
    </Footer>
  );
};

export default MyFooter;
