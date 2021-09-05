import { VerifyEmailData } from "../dto/AuthDTO";
import { verifyEmail } from "../redux/reduxActions/AuthActions";
import { Button } from "../styled-components/button-el";
import { VSpacer } from "../styled-components/spacer-el";
import UseFormAuth from "../utils/UseFormAuth";
import { VerifyEmailValidator } from "../validators/AuthValidator";
import AuthInput from "./auth/input/AuthInput";

interface EmailVerificationProps {
  goToBackStep: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  goToBackStep,
}) => {
  const { errors, loadingAuth, handleChange, handleSubmit, states } =
    UseFormAuth<VerifyEmailData>(
      verifyEmail,
      { verificationCode: "" },
      VerifyEmailValidator
    );
  const { verificationCode } = states;
  return (
    <>
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

      <VSpacer />
      <Button aa_bg="#fff" aa_color="#03a9f4" onClick={() => goToBackStep()}>
        Go Back
      </Button>
      <VSpacer />
    </>
  );
};

export default EmailVerification;
