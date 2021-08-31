import React from "react";
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
import UseFormAuth from "../../utils/UseFormAuth";
import { register } from "../../redux/reduxActions/AuthActions";
import { RegisterData } from "../../dto/AuthDTO";
import { RegisterValidator } from "../../validators/AuthValidator";
import MyAlert from "../../components/alert/MyAlert";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const { handleChange, handleSubmit, loadingAuth, states } =
    UseFormAuth<RegisterData>(
      register,
      {
        email: "",
        password: "",
        username: "",
      },
      RegisterValidator
    );

  const { email, password, username } = states;
  const { messages } = useSelector((state: RootState) => state.message);

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

                {messages.map((message) => (
                  <MyAlert
                    key={message.id}
                    message={message.text}
                    type={message.type}
                  />
                ))}

                <VSpacer aa_length="20px" />
                <form onSubmit={handleSubmit}>
                  <AuthInput
                    label="username"
                    name="username"
                    value={username}
                    handleChange={handleChange}
                    type="text"
                  />
                  <VSpacer aa_length="8px" />
                  <AuthInput
                    label="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    type="text"
                  />
                  <VSpacer aa_length="8px" />
                  <AuthInput
                    label="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    type="password"
                  />
                  <VSpacer aa_length="15px" />
                  <Button
                    disabled={
                      username === "" ||
                      email === "" ||
                      password === "" ||
                      loadingAuth
                    }
                    type="submit"
                    aa_isFullWidth
                  >
                    {loadingAuth ? "loading..." : "Sign Up"}
                  </Button>
                </form>
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

export default Register;
