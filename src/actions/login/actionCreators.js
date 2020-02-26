import {
  START_LOGIN,
  STORE_LOGIN,
  REMOVE_LOGIN,
  END_LOGIN
} from "./actionTypes";

export const getLoginAction = () => {
  return {
    type: START_LOGIN
  };
};

export const removeLoginAction = payload => {
  return {
    type: REMOVE_LOGIN,
    payload
  };
};

export const storeLoginAction = (payload) => {
  return {
    type: STORE_LOGIN,
    payload
  };
};

export const endLoginAction = () => {
  return {
    type: END_LOGIN
  };
};
