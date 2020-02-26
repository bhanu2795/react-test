import {
  getLoginAction,
  storeLoginAction,
  removeLoginAction,
  endLoginAction
} from "./actionCreators";

import { postData } from '../../services/http/http.service';

const mockLogin = data => {
  return postData('api/auth/login', data).then(res => {
    return res;
  }).catch(err => console.log(err));
};

export const getLogin = data => async dispatch => {
  dispatch(getLoginAction());
  const response = await mockLogin(data);
  if (response) {
    dispatch(storeLoginAction(response));
  }
  dispatch(endLoginAction());
};

export const getLogout = () => async dispatch => {
  dispatch(removeLoginAction());
};
