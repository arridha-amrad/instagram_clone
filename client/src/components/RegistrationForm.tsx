import AuthInput from "./auth/input/AuthInput";
import { RegisterData } from "../dto/AuthDTO";
import { register } from "../redux/reduxActions/AuthActions";
import { Button } from "../styled-components/button-el";
import { VSpacer } from "../styled-components/spacer-el";
import UseFormAuth from "../utils/UseFormAuth";
import { FieldsError, RegisterValidator } from "../validators/AuthValidator";
import { AuthTitle, OrText, OrTextWrapper } from "./AuthPage";
import InstagramText from "../images/ig2.svg";
import FacebookButton from "./auth/FacebookButton";
import { ChangeEvent, useState } from "react";
import { FC, FormEvent } from "react";

interface RegisterFormProps {
  states: RegisterData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  goToNextStep: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({
  states,
  handleChange,
  goToNextStep,
}) => {
  const { username, email, password } = states;
  const [errors, setErrors] = useState<FieldsError<RegisterData>>();

  const submitRegistrationData = () => {
    const { errors: validatorResults, valid } = RegisterValidator(states);
    if (valid) {
      goToNextStep();
    }
    setErrors({
      ...validatorResults,
    });
  };

  return (
    <>
      <AuthTitle>
        <img src={InstagramText} alt="instagram text" />
      </AuthTitle>
      <VSpacer aa_length="20px" />
      <AuthInput
        label="username"
        name="username"
        value={username}
        handleChange={handleChange}
        type="text"
        error={errors?.username}
      />
      <VSpacer aa_length="8px" />
      <AuthInput
        label="email"
        name="email"
        value={email}
        handleChange={handleChange}
        type="text"
        error={errors?.email}
      />
      <VSpacer aa_length="8px" />
      <AuthInput
        label="password"
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
        onClick={submitRegistrationData}
      >
        Sign Up
      </Button>
      <OrTextWrapper>
        <OrText>OR</OrText>
      </OrTextWrapper>
      <FacebookButton />
      <VSpacer aa_length="15px" />
    </>
  );
};

export default RegisterForm;
