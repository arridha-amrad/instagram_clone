import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface AccountInputProps {
  inputSize?: "big" | "small";
  label: string;
  name: string;
  type?: string;
  isInputArea?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
  isChecked?: boolean;
}

const AccountInput: React.FC<AccountInputProps> = ({
  label,
  name,
  inputSize = "small",
  children,
  type = "text",
  isInputArea = true,
  onChange = undefined,
  value,
  isChecked = false,
}) => {
  return (
    <FormGroup aa_bigInput={inputSize === "big" ? true : false}>
      <label>{label}</label>

      {isInputArea ? (
        <InputArea aa_bigInput={inputSize === "big" ? true : false}>
          {name === "bio" ? (
            <textarea name="bio" value={value} onChange={onChange} />
          ) : (
            <input name={name} type={type} onChange={onChange} value={value} />
          )}
          {children && children}
        </InputArea>
      ) : (
        <SimilarAccountWarningArea>
          <input
            onChange={onChange}
            type="checkbox"
            name={name}
            checked={isChecked}
          />
          {children && children}
        </SimilarAccountWarningArea>
      )}
    </FormGroup>
  );
};

export default AccountInput;

interface FormGroupProps {
  aa_bigInput?: boolean;
}

const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  justify-content: start;
  margin: 15px 0;

  label {
    display: block;
    font-weight: 600;
    width: 200px;
    text-align: right;
    padding-top: 5px;
    font-size: ${(props) => (props.aa_bigInput ? "1rem" : "15px")};
  }
`;

interface InputAreaProps {
  aa_bigInput?: boolean;
}

const InputArea = styled.div<InputAreaProps>`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 10px;
    font-size: 13px;
    color: #8e8e8e;
    margin-left: 30px;
    letter-spacing: 1.3;
    line-height: 1.4;

    span {
      font-weight: 600;
      display: block;
    }
  }

  input {
    outline: none;
    margin-left: 30px;
    display: block;
    font-size: ${(props) => (props.aa_bigInput ? "1.1rem" : "15px")};
    padding: ${(props) => (props.aa_bigInput ? "10px" : "8px")};
    width: 100%;
    border-radius: ${(props) => (props.aa_bigInput ? "10px" : "3px")};
    border: 1px solid #dbdbdb;

    &:focus {
      border-radius: ${(props) => (props.aa_bigInput ? "10px" : "3px")};
      border: 1px solid #aaa;
    }
  }

  textarea {
    margin-left: 30px;
    display: block;
    font-size: 15px;
    padding: 8px;
    width: 100%;
    height: 100px;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    outline: none;

    &:focus {
      border: 1px solid #aaa;
    }
  }
`;

const SimilarAccountWarningArea = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 30px;

  p {
    width: 300px;
    font-weight: 600;
    margin-left: 10px;
    font-size: 15px;
  }
`;
