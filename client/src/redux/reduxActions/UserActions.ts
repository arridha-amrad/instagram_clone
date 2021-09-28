import { Dispatch } from "redux";
import { UserActionsType } from "../reduxTypes/UserTypes";
import axiosInstance from "../../utils/AxiosInterceptors";
import { ChangePasswordData } from "../../dto/UserDTO";
import { MessageTypes, setMessage } from "../reduxReducers/MessageReducer";

const dispatchMessage = (
  dispatch: Dispatch<any>,
  message: string,
  type: MessageTypes
) => {
  dispatch(setMessage(message, type));
};

export const changePassword =
  (data: ChangePasswordData) => async (dispatch: Dispatch<UserActionsType>) => {
    // dispatch({ type: "LOADING_USER" });
    return axiosInstance
      .post("/user/change-password", data)
      .then((res) => {
        dispatchMessage(dispatch, res.data, "success");
      })
      .catch((err: any) => {
        // console.log("err from actions : ", err);
        dispatchMessage(dispatch, err.response.data.message, "danger");
      });

    // try {
    //   const res = await axiosInstance.post("/user/change-password", data);
    //   if (res) {
    //     dispatchMessage(dispatch, res.data, "success");
    //     dispatch({ type: "STOP_LOADING_USER" });
    //   }
    // } catch (err: any) {
    //   console.log("user actions err : ", err.response.data.message);
    //   dispatchMessage(dispatch, err.response.data.message, "danger");
    // }
  };
