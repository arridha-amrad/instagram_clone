import React, { useState } from "react";
import {
  AuthForm2,
  AuthFormOuter2,
  AuthOrText,
  AuthWrapper2,
  BackToLoginContainer,
  OrText,
  Outer,
} from "../../components/auth/auth.elements";
import { Button } from "../../styled-components/button-el";
import { VSpacer } from "../../styled-components/spacer-el";
import MyFooter from "../../components/auth/footer/AuthFooter";
import PadLock from "../../icons/padlock.svg";
import { MyLinkThree, MyLinkTwo } from "../../styled-components/link-el";
import AuthInput from "../../components/auth/input/AuthInput";
import AuthAppbar from "../../components/auth/appBar/AuthAppbar"

interface ForgotPasswordProps { }

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [state, setState] = useState({
    email: "",
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <AuthAppbar />
      <Outer>
        <VSpacer aa_length="60px" />
        <AuthWrapper2>
          <AuthForm2>
            <AuthFormOuter2>
              <img alt="padlock" src={PadLock} />
              <h4>Trouble Logging In</h4>
              <p>
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </p>
              <VSpacer aa_length="20px" />
              <AuthInput
                label="email"
                name="email"
                type="text"
                handleChange={handleChange}
                value={state.email}
              />
              <VSpacer aa_length="20px" />
              <Button aa_isFullWidth>Send Login Link</Button>
              <VSpacer aa_length="30px" />
              <AuthOrText>
                <OrText>OR</OrText>
              </AuthOrText>
              <VSpacer aa_length="30px" />
              <MyLinkTwo to="/register">Create New Account</MyLinkTwo>
              <VSpacer aa_length="40px" />
            </AuthFormOuter2>
            <BackToLoginContainer>
              <MyLinkThree to="/">Back To Login</MyLinkThree>
            </BackToLoginContainer>
          </AuthForm2>
        </AuthWrapper2>
        <VSpacer />
        <MyFooter />
      </Outer>
    </>
  );
};

export default ForgotPassword;
