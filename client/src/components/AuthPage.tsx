import { FC, ReactNode } from "react";
import { LinkBold } from "../styled-components/link-el";
import { VSpacer } from "../styled-components/spacer-el";
import MyAuthCarousel from "./auth/carousel/AuthCarousel";
import MyFooter from "./auth/footer/AuthFooter";
import AppPlayStore from "./auth/getApp/AppPlayStore";

import styled from "styled-components";

interface AuthPageProps {
  question: string;
  link: string;
  url: string;
  children: ReactNode;
  steps?: string[];
  isWithCarousel: boolean;
}

const AuthPage: FC<AuthPageProps> = ({
  children,
  link,
  question,
  url,
  isWithCarousel,
}) => {
  return (
    <AuthPageArea>
      <MainArea>
        <FormAuthAndCarouselContainer>
          {isWithCarousel && <MyAuthCarousel />}
          <FormAuth>
            <Paper>{children}</Paper>
            <VSpacer />
            <Paper>
              <AuthQuestion>
                {question}&nbsp;<LinkBold to={url}>{link}</LinkBold>
              </AuthQuestion>
            </Paper>
            <VSpacer aa_length="20px" />
            <AppPlayStore />
          </FormAuth>
        </FormAuthAndCarouselContainer>
      </MainArea>
      <MyFooter />
    </AuthPageArea>
  );
};

export default AuthPage;

export const AuthPageArea = styled.div`
  width: 100vw;
  min-height: 100%;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
`;

export const MainArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 32px 0;
  width: 100%;
  height: 100%;
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
  color: #777777;
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
  width: 350px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 15px;

  p {
    width: 270px;
    text-align: center;

    span {
      color: #03a9f4;
      cursor: pointer;
    }
  }

  .title {
    font-weight: 500;
    font-size: 1.1rem;
    margin: 20px 0;
  }

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
