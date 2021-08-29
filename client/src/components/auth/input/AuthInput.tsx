import React, { useState } from "react";
import {
  Input,
  InputField,
  InputHelperText,
  Label,
  PasswordToggler,
} from "./authInput-el";

interface AuthInputProps {
  type: string;
  value: string;
  label: string;
  name: string;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  value,
  label,
  name,
  error,
  type,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <InputField>
        {type === "password" && !!value && (
          <PasswordToggler onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? "Hide" : "Show"}
          </PasswordToggler>
        )}
        <Label isFloat={!!value}>{label}</Label>
        <Input
          type={
            type === "text"
              ? "text"
              : type === "password" && showPassword
              ? "text"
              : "password"
          }
          name={name}
          isFloat={!!value}
          value={value}
          onChange={handleChange}
        />
      </InputField>
      {error && <InputHelperText>This text to show error</InputHelperText>}
    </>
  );
};

export default AuthInput;
