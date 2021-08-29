import React from "react";
import { FormGroup, InputArea, SimilarAccountWarningArea } from "./AccountForm.elements";

interface AccountInputProps {
  inputSize?: "big" | "small";
  labelStr: string;
  name: string;
  type?: string;
  isInputArea?: boolean
}

const AccountInput: React.FC<AccountInputProps> = ({ labelStr, name, inputSize = "small", children, type = "text", isInputArea = true }) => {
  return (
    <FormGroup aa_bigInput={inputSize === "big" ? true : false}>
      <label>{labelStr}</label>

      {isInputArea ? (
        <InputArea aa_bigInput={inputSize === "big" ? true : false}>
          {labelStr === "bio" ? (
            <textarea name="bio" />
          ) : (
            <input name={name} type={type} />
          )}
          {children && (
            children
          )}
        </InputArea>
      ) : (
        <SimilarAccountWarningArea>
          <input type="checkbox" name={name} />
          {children && (
            children
          )}
        </SimilarAccountWarningArea>
      )}

    </FormGroup>
  )
}

export default AccountInput