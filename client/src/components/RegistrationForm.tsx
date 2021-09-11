import AuthInput from "./auth/input/AuthInput";
import { RegisterData } from "../dto/AuthDTO";
import { register } from "../redux/reduxActions/AuthActions";
import { Button } from "../styled-components/button-el";
import { VSpacer } from "../styled-components/spacer-el";
import UseFormAuth from "../utils/UseFormAuth";
import { RegisterValidator } from "../validators/AuthValidator";
import { AuthTitle, OrText, OrTextWrapper } from "./AuthPage";
import InstagramText from "../images/ig2.svg";
import FacebookButton from "./auth/FacebookButton";
import { FC, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../utils/AxiosInterceptors";

interface RegisterFormProps {
  goToNextStep: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ goToNextStep }) => {
  const { handleSubmit, handleChange, states, errors } =
    UseFormAuth<RegisterData>(
      register,
      {
        email: "",
        password: "",
        username: "",
        fullName: "",
      },
      RegisterValidator,
      goToNextStep
    );

  const { username, email, password, fullName } = states;

  const [validation, setValidation] = useState<Partial<RegisterData>>({});

  const validating = async (data: "email" | "username") => {
    const valRes: Partial<RegisterData> = {};
    if (data.trim() !== "") {
      const res = await axiosInstance.post("/auth/is-exists", { data });
      valRes[data] = res.data;
      console.log("result : ", valRes);
      setValidation({
        ...valRes,
      });
    }
  };

  return (
    <>
      <AuthTitle>
        <img src={InstagramText} alt="instagram text" />
      </AuthTitle>
      <Text>Sign up to see photos and videos from your friends.</Text>
      <FacebookButton isRegisterPage={true} />
      <OrTextWrapper>
        <OrText>OR</OrText>
      </OrTextWrapper>
      <form onSubmit={handleSubmit}>
        <AuthInput
          isWithValidation={true}
          validationResult={validation.email}
          label="Email"
          name="email"
          value={email}
          handleChange={handleChange}
          type="text"
          error={errors?.email}
          onKeyUp={() => validating("email")}
        />
        <VSpacer aa_length="8px" />
        <AuthInput
          isWithValidation={true}
          label="Full Name"
          name="fullName"
          value={fullName}
          handleChange={handleChange}
          type="text"
          error={errors?.fullName}
        />
        <VSpacer aa_length="8px" />
        <AuthInput
          label="Username"
          name="username"
          value={username}
          handleChange={handleChange}
          type="text"
          error={errors?.username}
        />
        <VSpacer aa_length="8px" />
        <AuthInput
          label="Password"
          name="password"
          value={password}
          handleChange={handleChange}
          type="password"
          error={errors?.password}
        />

        <VSpacer aa_length="15px" />
        <Button
          disabled={username === "" || email === "" || password === ""}
          aa_isFullWidth
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <SmallText>
        By signing up, you agree to our <span>Terms</span> ,{" "}
        <span>Data Policy</span> and <span>Cookies Policy</span> .
      </SmallText>
      <VSpacer aa_length="15px" />
    </>
  );
};

export default RegisterForm;

const Text = styled.p`
  text-align: center;
  color: var(--grey);
  font-size: 1.1rem;
  font-weight: 500;
`;

const SmallText = styled.small`
  text-align: center;
  color: var(--grey);
  font-size: 12px;
  margin: 20px 0 25px;

  span {
    font-weight: 600;
  }
`;
