import { Button } from "../../styled-components/button-el";
import { VSpacer } from "../../styled-components/spacer-el";
import AuthInput from "../../components/auth/input/AuthInput";
import AuthPage from "../../components/AuthPage";
import UseFormAuth from "../../utils/UseFormAuth";
import { LoginData } from "../../dto/AuthDTO";
import { login } from "../../redux/reduxActions/AuthActions";
import { LoginValidator } from "../../validators/AuthValidator";

const Login = () => {
  const { errors, handleChange, handleSubmit, loadingAuth, states } =
    UseFormAuth<LoginData>(
      login,
      {
        identity: "",
        password: "",
      },
      LoginValidator
    );
  const { password, identity } = states;

  return (
    <AuthPage
      link="Sign Up"
      question="Don't have an account ?"
      url="/register"
      isLoginPage={true}
    >
      <form onSubmit={handleSubmit}>
        <AuthInput
          type="text"
          value={identity}
          label="Username or email"
          name="identity"
          handleChange={handleChange}
          error={errors?.identity}
        />
        <VSpacer aa_length="7px" />
        <AuthInput
          type="password"
          value={password}
          label="Password"
          name="password"
          handleChange={handleChange}
          error={errors?.password}
        />
        <VSpacer aa_length="15px" />
        <Button
          disabled={password === "" || identity === "" || loadingAuth}
          type="submit"
          aa_isFullWidth
        >
          {loadingAuth ? "loading..." : "Log In"}
        </Button>
      </form>
    </AuthPage>
  );
};

export default Login;
