import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import AccountButton from "../../components/accounts/form/button";
import AccountInput from "../../components/accounts/form/input";
import AccountLink from "../../components/accounts/form/link";
import AccountProfile from "../../components/accounts/profile/AccountProfile";
import MyAlert from "../../components/alert/MyAlert";
import { ChangePasswordData } from "../../dto/UserDTO";
import { changePassword } from "../../redux/reduxActions/UserActions";
import { RootState } from "../../redux/Store";

interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  document.title = "Change Password";
  const [state, setState] = useState<
    ChangePasswordData & { confirmedPassword: string }
  >({
    newPassword: "",
    oldPassword: "",
    confirmedPassword: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { messages } = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();
  const { newPassword, oldPassword } = state;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changePassword({ newPassword, oldPassword }));
  };

  return (
    <AccountContainer>
      <AccountProfile
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        username="squarepants"
      />
      <form onSubmit={handleSubmit}>
        <AccountInput
          type="password"
          value={state.oldPassword}
          name="oldPassword"
          onChange={handleChange}
          inputSize="big"
          label="Old Password"
        />
        <AccountInput
          type="password"
          value={state.newPassword}
          onChange={handleChange}
          inputSize="big"
          label="New Password"
          name="newPassword"
        />
        <AccountInput
          type="password"
          value={state.confirmedPassword}
          onChange={handleChange}
          inputSize="big"
          label="Confirm Password"
          name="confirmedPassword"
        />
        <AccountButton btnSize="big" text="Change Password" />
      </form>
      {messages.map((message) => (
        <MyAlert key={message.id} message={message.text} type={message.type} />
      ))}
      <AccountLink link="/forgot-password" text="Forgot Password" />
    </AccountContainer>
  );
};

export default ChangePassword;
