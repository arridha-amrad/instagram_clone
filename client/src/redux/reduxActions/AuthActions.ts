import { Dispatch } from "redux";
import { AuthActionsType } from "../reduxTypes/AuthTypes";
import axiosInstance from "../../utils/AxiosInterceptors";
import {
  BirthDayData,
  ForgotPasswordData,
  LoginData,
  RegisterData,
  ResetPasswordData,
  VerifyEmailData,
} from "../../dto/AuthDTO";
import * as messageActions from "../reduxReducers/MessageReducer";
import { Dispatch as ReactDispatch } from "react";

const dispatchRequiredActions = (dispatch: Dispatch<AuthActionsType>) => {
  dispatch({ type: "RESET_REQUEST_STATUS" });
  dispatch({ type: "LOADING_AUTH" });
};

const dispatchMessage = (
  dispatch: ReactDispatch<any>,
  message: string,
  type: messageActions.MessageTypes
) => {
  dispatch(messageActions.setMessage(message, type));
};

export const verifyEmail =
  (data: VerifyEmailData) => async (dispatch: Dispatch<AuthActionsType>) => {
    dispatchRequiredActions(dispatch);
    try {
      await axiosInstance.put("/auth/verify-email", data);
      dispatchMessage(dispatch, "Email verification is successful", "success");
      dispatch({ type: "REDIRECT_TO_LOGIN" });
    } catch (err: any) {
      console.log(err.response);
      dispatchMessage(dispatch, err.response.data, "danger");
      dispatch({ type: "AUTH_ERROR" });
    }
  };

export const logout = () => async (dispatch: Dispatch<AuthActionsType>) => {
  dispatchRequiredActions(dispatch);
  try {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("data");
    dispatch({ type: "LOGOUT" });
  } catch (err: any) {
    console.log(err);
  }
};

export const login =
  (loginData: LoginData) => async (dispatch: Dispatch<AuthActionsType>) => {
    dispatchRequiredActions(dispatch);
    try {
      await axiosInstance.post("/auth/login", loginData);
      dispatch({
        type: "LOGIN_SUCCESS",
      });
      localStorage.setItem("data", "login");
    } catch (err: any) {
      dispatch({
        type: "AUTH_ERROR",
      });
      dispatchMessage(dispatch, err.response.data.message, "danger");
    }
  };

export const register =
  (registrationData: RegisterData) =>
  async (dispatch: Dispatch<AuthActionsType>): Promise<void> => {
    dispatchRequiredActions(dispatch);
    try {
      const res = await axiosInstance.post("/auth/register", registrationData);
      dispatch({
        type: "AUTH_SUCCESS",
      });
      dispatchMessage(dispatch, res.data, "info");
      console.log("data", registrationData);
    } catch (err: any) {
      dispatch({
        type: "AUTH_ERROR",
      });
      dispatchMessage(dispatch, err.response.data.message, "danger");
    }
  };

export const forgotPassword =
  (formData: ForgotPasswordData) =>
  async (dispatch: Dispatch<AuthActionsType>): Promise<void> => {
    dispatchRequiredActions(dispatch);
    try {
      const res = await axiosInstance.post("/auth/forgot-password", formData);
      dispatch({
        type: "AUTH_SUCCESS",
      });
      dispatchMessage(dispatch, res.data.data, "success");
    } catch (err: any) {
      dispatch({
        type: "AUTH_ERROR",
      });
      dispatchMessage(dispatch, err.response.data.message, "danger");
    }
  };

export const resetPassword =
  (formData: ResetPasswordData) =>
  async (dispatch: Dispatch<AuthActionsType>) => {
    dispatchRequiredActions(dispatch);
    try {
      const res = await axiosInstance.post(
        `/auth/reset-password/${formData.token}`,
        { password: formData.password }
      );
      dispatch({
        type: "AUTH_SUCCESS",
      });
      dispatchMessage(dispatch, res.data.data, "success");
    } catch (err: any) {
      dispatch({
        type: "AUTH_ERROR",
      });
      dispatchMessage(dispatch, err.response.data.message, "danger");
    }
  };
