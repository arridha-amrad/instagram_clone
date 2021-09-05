import { useState } from "react";
import AuthPage from "../../components/AuthPage";
import RegisterForm from "../../components/RegistrationForm";
import EmailVerification from "../../components/EmailVerificationForm";
import BirthDayForm from "../../components/BirthDayForm";

const Register = () => {
  const steps = ["register", "setBirthDay", "emailVerification"];
  const [currentStep, setCurrentStep] = useState(1);
  const goToNextStep = () => setCurrentStep((val) => val + 1);
  const goToBackStep = () => setCurrentStep((val) => val - 1);

  return (
    <AuthPage
      link="Log In"
      question="Have an account ?"
      url="/"
      steps={steps}
      currentStep={currentStep}
    >
      {steps[currentStep] === "emailVerification" ? (
        <EmailVerification goToBackStep={goToBackStep} />
      ) : steps[currentStep] === "register" ? (
        <RegisterForm />
      ) : (
        <BirthDayForm />
      )}
    </AuthPage>
  );
};

export default Register;
