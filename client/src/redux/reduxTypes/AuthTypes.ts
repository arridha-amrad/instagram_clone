import { AuthenticatedUserData } from "../../dto/AuthDTO";

export const LOADING_AUTH = "LOADING_AUTH";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_UNAUTHENTICATED = "SET_UNAUTHENTICATED";
export const LOGOUT = "LOGOUT";
export const RESET_REQUEST_STATUS = "RESET_REQUEST_STATUS";
export const STOP_LOADING_AUTH = "STOP_LOADING_AUTH";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const REDIRECT_TO_LOGIN = "REDIRECT_TO_LOGIN";
export const AUTHENTICATED_USER_DATA = "AUTHENTICATED_USER_DATA";

export type AuthActionsType =
  | { type: typeof AUTHENTICATED_USER_DATA; payload: AuthenticatedUserData }
  | { type: typeof REDIRECT_TO_LOGIN }
  | { type: typeof AUTH_SUCCESS }
  | { type: typeof AUTH_ERROR }
  | { type: typeof LOGIN_SUCCESS }
  | { type: typeof LOADING_AUTH }
  | { type: typeof STOP_LOADING_AUTH }
  | { type: typeof LOGOUT }
  | { type: typeof SET_UNAUTHENTICATED }
  | { type: typeof SET_AUTHENTICATED }
  | { type: typeof RESET_REQUEST_STATUS };
