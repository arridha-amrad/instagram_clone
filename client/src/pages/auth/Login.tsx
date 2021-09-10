import { Button } from "../../styled-components/button-el";
import { VSpacer } from "../../styled-components/spacer-el";
import AuthInput from "../../components/auth/input/AuthInput";
import AuthPage, { OrText, OrTextWrapper } from "../../components/AuthPage";
import UseFormAuth from "../../utils/UseFormAuth";
import { LoginData } from "../../dto/AuthDTO";
import { login } from "../../redux/reduxActions/AuthActions";
import { LoginValidator } from "../../validators/AuthValidator";
import { AuthTitle } from "../../components/AuthPage";
import InstagramText from "../../images/ig2.svg";
import MyAlert from "../../components/alert/MyAlert";
import FacebookButton from "../../components/auth/FacebookButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { MyLink } from "../../styled-components/link-el";

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

  const { messages } = useSelector((state: RootState) => state.message);

  return (
    <AuthPage
      link="Sign Up"
      question="Don't have an account ?"
      url="/register"
      isLoginPage={true}
    >
      <AuthTitle>
        <img src={InstagramText} alt="instagram text" />
      </AuthTitle>
      <VSpacer aa_length="20px" />

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
      <>
        <OrTextWrapper>
          <OrText>OR</OrText>
        </OrTextWrapper>
        <FacebookButton />
      </>
      {messages.map((message) => (
        <MyAlert key={message.id} message={message.text} type={message.type} />
      ))}
      <VSpacer />
      <MyLink to="/forgot-password">forgot password</MyLink>
      <VSpacer aa_length="20px" />
    </AuthPage>
  );
};

export default Login;
