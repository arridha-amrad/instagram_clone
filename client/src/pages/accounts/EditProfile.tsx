import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import AccountButton from "../../components/accounts/form/button";
import AccountInput from "../../components/accounts/form/input";
import AccountProfile from "../../components/accounts/profile/AccountProfile";
import { AuthenticatedUserData } from "../../dto/AuthDTO";
import { RootState } from "../../redux/Store";

interface EditProfileProps {}

const EditProfile: React.FC<EditProfileProps> = () => {
  document.title = "Edit Profile - Instagram";
  const user = useSelector((state: RootState) => state.auth.authenticatedUser);

  const [authenticatedUser, setAuthenticatedUser] = useState<
    Partial<AuthenticatedUserData>
  >({
    email: "",
    username: "",
    fullName: "",
    website: "",
    bio: "",
    phoneNumber: "",
    gender: "",
  });

  useEffect(() => {
    setAuthenticatedUser({
      ...authenticatedUser,
      email: user?.email,
      username: user?.username,
      fullName: user?.fullName,
      website: user?.website,
      bio: user?.bio,
      phoneNumber: user?.phoneNumber,
      gender: user?.gender,
    });
    // eslint-disable-next-line
  }, []);

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
  const { email, username, fullName, website, phoneNumber, bio, gender } =
    authenticatedUser;
  return (
    <AccountContainer>
      <AccountProfile
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        username="squarepant"
        enableChangeProfile={true}
      />
      <form onSubmit={handleSubmit}>
        <AccountInput value={fullName ?? ""} label="Name" name="fullName">
          <p>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
          <p>You can only change your name twice within 14 days.</p>
        </AccountInput>
        <AccountInput value={username ?? ""} label="Username" name="username" />
        <AccountInput value={website ?? ""} label="Website" name="website" />
        <AccountInput value={bio ?? ""} label="Bio" name="bio">
          <p>
            <span>Personal Information</span> Provide your personal information,
            even if the account is used for a business, a pet or something else.
            This won't be a part of your public profile.
          </p>
        </AccountInput>
        <AccountInput value={email ?? ""} label="Email" name="email" />
        <AccountInput
          value={phoneNumber ?? ""}
          label="Phone Number"
          name="phoneNumber"
        />
        <AccountInput value={gender ?? ""} label="Gender" name="gender" />
        <AccountInput
          label="Similar Account Suggestions"
          name="accountSuggestion"
          isInputArea={false}
          isChecked={false}
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
