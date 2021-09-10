import { ChangeEvent, FormEvent, useState } from "react";
import AuthPage from "../../components/AuthPage";
import RegisterForm from "../../components/RegistrationForm";
import EmailVerification from "../../components/EmailVerificationForm";
import BirthDayForm from "../../components/BirthDayForm";
import { RegisterData } from "../../dto/AuthDTO";
import { register } from "../../redux/reduxActions/AuthActions";
import {
  FieldsError,
  NoValidator,
  RegisterValidator,
} from "../../validators/AuthValidator";
import UseFormAuth from "../../utils/UseFormAuth";

const Register = () => {
  const { handleSubmit, handleChange, states } = UseFormAuth<RegisterData>(
    register,
    {
      email: "",
      password: "",
      username: "",
      birthDay: "",
    },
    NoValidator
  );
  const steps = ["register", "setBirthDay", "emailVerification"];
  const [currentStep, setCurrentStep] = useState(0);
  const goToNextStep = () => setCurrentStep((val) => val + 1);
  const goToBackStep = () => setCurrentStep((val) => val - 1);

  // const [states, setState] = useState<RegisterData>({
  //   email: "",
  //   password: "",
  //   username: "",
  // });
  // const { username, email, password } = states;
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setState({
  //     ...states,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const [errors, setErrors] = useState<FieldsError<RegisterData>>();
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const { valid, errors: validationErrors } = RegisterValidator(states);
  //   setErrors({
  //     ...validationErrors,
  //   });
  //   if (valid) {
  //     console.log(states);
  //   }
  // };

  return (
    <AuthPage
      link="login"
      question="Have an account ?"
      url="/"
      steps={steps}
      currentStep={currentStep}
    >
      {steps[currentStep] === "emailVerification" ? (
        <EmailVerification goToBackStep={goToBackStep} />
      ) : steps[currentStep] === "register" ? (
        <RegisterForm
          states={states}
          goToNextStep={goToNextStep}
          handleChange={handleChange}
        />
      ) : (
        <BirthDayForm />
      )}
    </AuthPage>
  );
};

export default Register;
