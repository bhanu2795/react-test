import {
  getAddressAction,
  storeAddressAction,
  endAddressAction
} from "./actionCreators";

import { getData } from '../../services/http/http.service';

const mockAddress = () => {
  return getData('api/users/addresses', 'BASE_URL').then(res => {
    return res;
  }).catch(err => console.log(err));
};

export const getAddress = () => async dispatch => {
  dispatch(getAddressAction());
  const response = await mockAddress();
  if(response.success) {
    dispatch(storeAddressAction(response));
  } else { 
    alert(response.full_messages[0]);
  }
  dispatch(endAddressAction());
};
