import React from "react";
import { Button, ButtonArea, FormGroup } from "./AccountForm.elements";

interface AccountButtonProps {
  text: string;
  btnSize?: "big" | "small";
}

const AccountButton: React.FC<AccountButtonProps> = ({
  text,
  children,
  btnSize,
}) => {
  return (
    <FormGroup>
      <label></label>
      <ButtonArea>
        <Button
          aa_fontSize="15px"
          aa_width={btnSize === "big" ? "150px" : "70px"}
          type="submit"
        >
          {text}
        </Button>
        {children && children}
      </ButtonArea>
    </FormGroup>
  );
};

export default AccountButton;
