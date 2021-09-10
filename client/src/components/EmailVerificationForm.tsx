import { VerifyEmailData } from "../dto/AuthDTO";
import { verifyEmail } from "../redux/reduxActions/AuthActions";
import { Button } from "../styled-components/button-el";
import { VSpacer } from "../styled-components/spacer-el";
import UseFormAuth from "../utils/UseFormAuth";
import { VerifyEmailValidator } from "../validators/AuthValidator";
import AuthInput from "./auth/input/AuthInput";
import { AuthTitle } from "./AuthPage";
import EnvelopeIcon from "../icons/email.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

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
  const { messages } = useSelector((state: RootState) => state.message);
  return (
    <>
      <AuthTitle>
        <img src={EnvelopeIcon} alt="envelope" />
        <p className="title">Enter Confirmation Code</p>
        {messages.map((message) => (
          <p key={message.id} className="info">
            {message.text}
            <span>Resend Code.</span>
          </p>
        ))}
      </AuthTitle>
      <VSpacer aa_length="20px" />

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
