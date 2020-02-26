import {
  getAddressAction,
  storeAddressAction,
  addAddressAction,
  endAddressAction
} from "./actionCreators";

import { getData, postData } from '../../services/http/http.service';

const mockAddress = () => {
  return getData('api/users/addresses', 'BASE_URL').then(res => {
    return res;
  }).catch(err => console.log(err));
};

const mockGetAddress = data => {
  return postData('api/users/addresses', data).then(res => {
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

export const addAddress = data => async dispatch => {
  const response = await mockGetAddress(data);
  if(response.success) {
    dispatch(addAddressAction(response));
  } else {
    alert(response.full_messages[0]);
  }
};
