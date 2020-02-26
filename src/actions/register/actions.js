import {
  getAddUserAction,
  endAddUserAction
} from "./actionCreators";

import { postData } from '../../services/http/http.service';

const mockAddUser = data => {
  return postData('api/users', data).then(res => {
    return res;
  }).catch(err => console.log(err));
};

export const getAddUser = data => async dispatch => {
  dispatch(getAddUserAction());
  const response = await mockAddUser(data);
  alert(response.full_messages[0])
  dispatch(endAddUserAction());
};
