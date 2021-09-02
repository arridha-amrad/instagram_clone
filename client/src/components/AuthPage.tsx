import { FC, ReactNode } from "react";
import { MyLink } from "../styled-components/link-el";
import { VSpacer } from "../styled-components/spacer-el";
import MyAlert from "./alert/MyAlert";
import MyAuthCarousel from "./auth/carousel/AuthCarousel";
import FacebookButton from "./auth/FacebookButton";
import MyFooter from "./auth/footer/AuthFooter";
import AppPlayStore from "./auth/getApp/AppPlayStore";
import InstagramText from "../images/ig2.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

import styled from "styled-components";
import { useLocation } from "react-router-dom";
import AuthAppBar from "./auth/appBar/AuthAppBar";

interface AuthPageProps {
  question: string;
  link: string;
  url: string;
  isLoginPage?: boolean;
  children: ReactNode;
}

const AuthPage: FC<AuthPageProps> = ({
  children,
  link,
  question,
  url,
  isLoginPage = false,
}) => {
  const { messages } = useSelector((state: RootState) => state.message);

  const location = useLocation();

  return (
    <>
      {location.pathname === "/forgot-password" && <AuthAppBar />}
      <AuthPageArea>
        <MainArea>
          <FormAuthAndCarouselContainer>
            {location.pathname !== "/forgot-password" && <MyAuthCarousel />}
            <FormAuth>
              <Paper>
                <VSpacer aa_length="30px" />
                <AuthTitle>
                  <img src={InstagramText} alt="instagram" />
                </AuthTitle>

                <VSpacer aa_length="30px" />

                {children}

                <OrTextWrapper>
                  <OrText>OR</OrText>
                </OrTextWrapper>
                <FacebookButton />

                {messages.map((message) => (
                  <MyAlert
                    key={message.id}
                    message={message.text}
                    type={message.type}
                  />
                ))}

                {isLoginPage && (
                  <>
                    <VSpacer />

                    <MyLink to="/forgot-password">forgot password</MyLink>

                    <VSpacer aa_length="20px" />
                  </>
                )}
              </Paper>

              <VSpacer />

              <Paper>
                <AuthQuestion>
                  {question} &nbsp; <MyLink to={url}>{link}</MyLink>
                </AuthQuestion>
              </Paper>

              <VSpacer aa_length="20px" />

              <AppPlayStore />
            </FormAuth>
          </FormAuthAndCarouselContainer>
        </MainArea>
        <MyFooter />
      </AuthPageArea>
    </>
  );
};

export default AuthPage;

export const AuthPageArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainArea = styled.div`
  flex-grow: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormAuthAndCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AuthWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 935px;
  width: 100%;
  height: 584px;
`;

export const OrTextWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 1px;
  background-color: #ccc;
  position: relative;
`;

interface OrTextProps {
  aa_bg?: string;
}
export const OrText = styled.span<OrTextProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.aa_bg || "#fff"};
  padding: 0 1rem;
  color: #ccc;
  font-size: 14px;
  font-weight: 600;
`;

export const FormAuth = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 940px) {
    padding: 0 30px;
  }
`;

export const AuthQuestion = styled.div`
  display: flex;
  height: 63px;
  align-items: center;
  font-size: 15px;
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  z-index: 99;
  background-color: #fff;

  form {
    width: 100%;
  }
`;

export const Paper2 = styled(Paper)`
  flex-direction: column;
  width: 388px;
  padding: 20px 40px;
  margin-top: 50px;
  background: #fff;

  img {
    height: 100px;
  }

  p {
    color: #8e8e8e;
    font-size: 14px;
    text-align: center;
    width: 260px;
    line-height: 1.4;
    letter-spacing: 1.1;
  }

  h4 {
    font-weight: 600;
    padding: 10px 0;
  }
`;

export const AuthTitle = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 50px;
  }
`;

export const AuthFormAreaOne = styled.div`
  padding: 20px 0px 10px 0;
  width: 270px;
`;

export const BackToLoginContainer = styled.div`
  border: 1px solid #ccc;
  width: 388px;
  border-radius: 0 0 3px 3px;
  z-index: 99;
  margin-top: -5px;
  background-color: #fafafa;
`;
