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

interface SignupProps { }

const Signup: React.FC<SignupProps> = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
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
                <AuthTitle>
                  <img src={InstagramText} alt="instagram" />
                </AuthTitle>
                <VSpacer aa_length="20px" />
                <AuthInput
                  label="username"
                  name="username"
                  value={state.username}
                  handleChange={handleChange}
                  type="text"
                />
                <VSpacer aa_length="8px" />
                <AuthInput
                  label="email"
                  name="email"
                  value={state.email}
                  handleChange={handleChange}
                  type="text"
                />
                <VSpacer aa_length="8px" />
                <AuthInput
                  label="password"
                  name="password"
                  value={state.password}
                  handleChange={handleChange}
                  type="password"
                />
                <VSpacer aa_length="15px" />
                <Button disabled type="submit" aa_isFullWidth>
                  Sign up
                </Button>
                <VSpacer aa_length="20px" />
                <AuthOrText>
                  <OrText>OR</OrText>
                </AuthOrText>
                <VSpacer aa_length="20px" />
                <FacebookButton />
              </AuthFormAreaOne>
            </AuthFormOuter>
            <AuthFormOuter>
              <AuthQuestion>
                Already have an account? &nbsp; <MyLink to="/">Log in</MyLink>
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

export default Signup;
