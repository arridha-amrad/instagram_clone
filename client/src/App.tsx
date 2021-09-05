import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppAndWebsites from "./pages/accounts/AppWebsite";
import ChangePassword from "./pages/accounts/ChangePassword";
import EditProfile from "./pages/accounts/EditProfile";
import EmailsFromInstagram from "./pages/accounts/EmailFromInstagram";
import EmailAndSMS from "./pages/accounts/EmailSMS";
import LoginActivity from "./pages/accounts/LoginActivity";
import ManageContact from "./pages/accounts/ManageContact";
import PrivacySecurity from "./pages/accounts/PrivacySecurity";
import PushNotifications from "./pages/accounts/PushNotification";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import { GlobalStyles } from "./styled-components/global";
import UserTag from "./pages/user/UserTag";
import UserSaved from "./pages/user/UserSaved";
import UserIGTV from "./pages/user/UserIGTV";
import UserPost from "./pages/user/UserPosts";
import Home from "./pages/Home";

interface AppProps {}

const darkMode = {
  bg: "#1a1a1a",
};

const lightMode = {
  bg: "#fafafa",
};

const themes = {
  dark: darkMode,
  light: lightMode,
};

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes["light"]}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user/post" component={UserPost} />
          <Route exact path="/user/igtv" component={UserIGTV} />
          <Route exact path="/user/saved" component={UserSaved} />
          <Route exact path="/user/tagged" component={UserTag} />
          <Route exact path="/accounts/edit" component={EditProfile} />
          <Route
            exact
            path="/accounts/change-password"
            component={ChangePassword}
          />
          <Route
            exact
            path="/accounts/app-websites"
            component={AppAndWebsites}
          />
          <Route exact path="/accounts/email-sms" component={EmailAndSMS} />
          <Route
            exact
            path="/accounts/emails-from-instagram"
            component={EmailsFromInstagram}
          />
          <Route
            exact
            path="/accounts/login-activity"
            component={LoginActivity}
          />
          <Route
            exact
            path="/accounts/manage-contacts"
            component={ManageContact}
          />
          <Route
            exact
            path="/accounts/privacy-security"
            component={PrivacySecurity}
          />
          <Route
            exact
            path="/accounts/push-notifications"
            component={PushNotifications}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
