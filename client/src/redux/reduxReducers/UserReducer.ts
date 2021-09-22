import { AnyAction } from "redux";
import { UserData } from "../../dto/AuthDTO";
import * as types from "../reduxTypes/UserTypes";

export type UserState = Partial<UserData> & { loadingUser: boolean };

const initialState: UserState = {
  loadingUser: false,
};

const UserReducer = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case types.LOADING_USER:
      return {
        ...state,
        loadingUser: true,
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loadingUser: false,
      };
    case types.SET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.RESET_USER:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default UserReducer;
