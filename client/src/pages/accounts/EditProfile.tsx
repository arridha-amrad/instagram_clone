import React, { useState } from "react";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import AccountButton from "../../components/accounts/form/button";
import AccountInput from "../../components/accounts/form/input";
import AccountProfile from "../../components/accounts/profile/AccountProfile";

interface EditProfileProps {}

const EditProfile: React.FC<EditProfileProps> = () => {
  const [state] = useState({
    bio: "",
  });
  // const handleChange = (e: any) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(state.bio);
  };
  document.title = "Edit Profile";
  return (
    <AccountContainer>
      <AccountProfile
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        username="squarepant"
        enableChangeProfile={true}
      />
      <form onSubmit={handleSubmit}>
        <AccountInput inputSize="small" labelStr="Name" name="name">
          <p>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
          <p>You can only change your name twice within 14 days.</p>
        </AccountInput>
        <AccountInput labelStr="Username" name="username" />
        <AccountInput labelStr="Website" name="website" />
        <AccountInput labelStr="Bio" name="bio">
          <p>
            <span>Personal Information</span> Provide your personal information,
            even if the account is used for a business, a pet or something else.
            This won't be a part of your public profile.
          </p>
        </AccountInput>
        <AccountInput labelStr="Email" name="email" />
        <AccountInput labelStr="Phone Number" name="phoneNumber" />
        <AccountInput labelStr="Gender" name="gender" />
        <AccountInput
          labelStr="Similar Account Suggestions"
          name="accountSuggestion"
          isInputArea={false}
        >
          <p>
            Include your account when recommending similar accounts people might
            want to follow.
          </p>
        </AccountInput>
        <AccountButton text="Submit" btnSize="small">
          <p>Temporarily disable my account</p>
        </AccountButton>
      </form>
    </AccountContainer>
  );
};

export default EditProfile;
