import React from "react";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import AccountButton from "../../components/accounts/form/button";
import AccountInput from "../../components/accounts/form/input";
import AccountLink from "../../components/accounts/form/link";
import AccountProfile from "../../components/accounts/profile/AccountProfile";

interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  document.title = "Change Password";
  return (
    <AccountContainer>
      <AccountProfile
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        username="squarepants"
      />
      <form>
        <AccountInput inputSize="big" label="Old Password" name="oldPassword" />
        <AccountInput inputSize="big" label="New Password" name="newPassword" />
        <AccountInput
          inputSize="big"
          label="Confirm Password"
          name="confirmPassword"
        />
        <AccountButton btnSize="big" text="Change Password" />
      </form>
      <AccountLink link="/forgot-password" text="Forgot Password" />
    </AccountContainer>
  );
};

export default ChangePassword;
