import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthFormAreaOne,
  AuthFormOuter,
  AuthOrText,
  AuthQuestion,
  AuthTitle,
  AuthWrapper,
  OrText,
  Outer,
} from "../../components/auth/auth.elements";
import InstagramText from "../../images/ig2.svg";
import { Button } from "../../styled-components/button-el";
import { VSpacer } from "../../styled-components/spacer-el";
import { MyLink } from "../../styled-components/link-el";
import MyFooter from "../../components/auth/footer/AuthFooter";
import MyAuthCarousel from "../../components/auth/carousel/AuthCarousel";
import FacebookButton from "../../components/auth/FacebookButton";
import AuthInput from "../../components/auth/input/AuthInput";
import AppPlayStore from "../../components/auth/getApp/AppPlayStore";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Outer>
      <VSpacer aa_length="20px" />
      <AuthContainer>
        <AuthWrapper>
          <MyAuthCarousel />
          <AuthForm>
            <AuthFormOuter>
              <AuthFormAreaOne>
                <VSpacer aa_length="15px" />
                <AuthTitle>
                  <img src={InstagramText} alt="instagram" />
                </AuthTitle>
                <VSpacer aa_length="40px" />
                <AuthInput
                  type="text"
                  value={state.username}
                  label="Username or email"
                  name="username"
                  handleChange={handleChange}
                />
                <VSpacer aa_length="7px" />
                <AuthInput
                  type="password"
                  value={state.password}
                  label="Password"
                  name="password"
                  handleChange={handleChange}
                />
                <VSpacer aa_length="15px" />
                <Button disabled type="submit" aa_isFullWidth>
                  Log in
                </Button>
                <VSpacer aa_length="20px" />
                <AuthOrText>
                  <OrText>OR</OrText>
                </AuthOrText>
                <VSpacer aa_length="20px" />
                <FacebookButton />
                <VSpacer />
                <MyLink to="/forgot-password">Forgot password?</MyLink>
                <VSpacer />
              </AuthFormAreaOne>
            </AuthFormOuter>
            <AuthFormOuter>
              <AuthQuestion>
                Don't have an account? &nbsp;
                <MyLink to="/register">Sign up</MyLink>
              </AuthQuestion>
            </AuthFormOuter>
            <VSpacer />
            <AppPlayStore />
          </AuthForm>
        </AuthWrapper>
      </AuthContainer>
      <MyFooter />
    </Outer>
  );
};

export default Login;
