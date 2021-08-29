import React from "react";
import { MyContainer } from "../../../styled-components/container-el";
import { VSpacer } from "../../../styled-components/spacer-el";
import AppBar from "../../appbar/Appbar";
import UserFooter from "../../user/footer/UserFooter";
import AccountMenu from "../menu/AccountMenu";
import { AccountsWrapper, AccountsLeft, AccountsRight } from "./AccountContainer.elements";

interface AccountContainerProps { }

const AccountContainer: React.FC<AccountContainerProps> = ({ children }) => {
  return (
    <>
      <AppBar />
      <VSpacer aa_length="90px" />
      <MyContainer>
        <AccountsWrapper>
          <AccountsLeft>
            <AccountMenu />
            <VSpacer aa_length="70px" />
          </AccountsLeft>
          <AccountsRight>{children}</AccountsRight>
        </AccountsWrapper>
        <UserFooter />
      </MyContainer>
    </>
  )
}

export default AccountContainer