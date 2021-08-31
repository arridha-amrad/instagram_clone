import { FC } from "react";
import { MessageTypes } from "../../redux/reduxReducers/MessageReducer";
import styled from "styled-components";

interface MyAlertProps {
  message: string;
  type: MessageTypes;
}

const MyAlert: FC<MyAlertProps> = ({ message, type }) => {
  return (
    <AlertField sc_type={type}>
      <Alert sc_type={type}>{message}</Alert>
    </AlertField>
  );
};

export default MyAlert;

interface AlertProps {
  sc_type: MessageTypes;
}

export const AlertField = styled.div<AlertProps>`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  background: ${(props) =>
    props.sc_type === "danger" ? "#ffebee" : "#e8f5e9"};
  padding: 10px;
  border-radius: 5px;
`;

export const Alert = styled.p<AlertProps>`
  line-height: 23px;
  border-radius: 5px;
  font-size: 0.9rem;
  width: 100%;
  color: ${(props) => (props.sc_type === "success" ? "#43a047" : "#f44336")};
`;
