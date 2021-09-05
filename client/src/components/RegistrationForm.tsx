import AuthInput from "./auth/input/AuthInput";
import { RegisterData } from "../dto/AuthDTO";
import { register } from "../redux/reduxActions/AuthActions";
import { Button } from "../styled-components/button-el";
import { VSpacer } from "../styled-components/spacer-el";
import UseFormAuth from "../utils/UseFormAuth";
import { RegisterValidator } from "../validators/AuthValidator";

const RegisterForm = () => {
  const { errors, handleChange, handleSubmit, loadingAuth, states } =
    UseFormAuth<RegisterData>(
      register,
      {
        email: "",
        password: "",
        username: "",
      },
      RegisterValidator
    );
  const { username, email, password } = states;
  return (
    <form onSubmit={handleSubmit}>
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
        disabled={
          username === "" || email === "" || password === "" || loadingAuth
        }
        type="submit"
        aa_isFullWidth
      >
        {loadingAuth ? "loading..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default RegisterForm;
