import axios from "axios";

import {
  GET_USERS_REQUEST,
  USERS_REQUEST_FAILURE,
  USERS_REQUEST_SUCCESS,
} from "./actionTypes";

const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

const userRequestSuccess = (users) => {
  return {
    type: USERS_REQUEST_SUCCESS,
    payload: users,
  };
};

const userRequestFailure = (error) => {
  return {
    type: USERS_REQUEST_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest);
    axios
      .get("https://629f39e78b939d3dc292b3f2.mockapi.io/Crud")
      .then((response) => {
        // console.log(response.data);
        const user = response.data;
        dispatch(userRequestSuccess(user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(userRequestFailure(errorMsg));
      });
  };
};
