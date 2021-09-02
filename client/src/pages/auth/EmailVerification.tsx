import React from "react";
import AuthInput from "../../components/auth/input/AuthInput";
import AuthPage from "../../components/AuthPage";
import { VerifyEmailData } from "../../dto/AuthDTO";
import { verifyEmail } from "../../redux/reduxActions/AuthActions";
import { Button } from "../../styled-components/button-el";
import { VSpacer } from "../../styled-components/spacer-el";
import UseFormAuth from "../../utils/UseFormAuth";
import { VerifyEmailValidator } from "../../validators/AuthValidator";

interface EmailVerificationProps {
  isNext: boolean;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  isNext = false,
  setNext,
}) => {
  const { errors, loadingAuth, handleChange, handleSubmit, states } =
    UseFormAuth<VerifyEmailData>(
      verifyEmail,
      { verificationCode: "" },
      VerifyEmailValidator
    );
  const { verificationCode } = states;
  return (
    <AuthPage
      isNext={isNext}
      setNext={setNext}
      question="Have an account ? "
      link="Log In"
      url="/"
    >
      <form onSubmit={handleSubmit}>
        <AuthInput
          handleChange={handleChange}
          label="verification code"
          name="verificationCode"
          type="text"
          value={verificationCode}
          error={errors?.verificationCode}
        />
        <VSpacer aa_length="15px" />
        <Button
          disabled={verificationCode === "" || loadingAuth}
          type="submit"
          aa_isFullWidth
        >
          {loadingAuth ? "loading..." : "Next"}
        </Button>
      </form>
    </AuthPage>
  );
};

export default EmailVerification;
