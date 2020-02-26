import {
  START_GET_ADDRESS,
  STORE_ADDRESS,
  ADD_ADDRESS,
  END_GET_ADDRESS
} from "./actionTypes";

export const getAddressAction = () => {
  return {
    type: START_GET_ADDRESS
  };
};

export const addAddressAction = (payload) => {
  return {
    type: ADD_ADDRESS,
    payload
  };
};

export const storeAddressAction = (payload) => {
  return {
    type: STORE_ADDRESS,
    payload
  };
};

export const endAddressAction = () => {
  return {
    type: END_GET_ADDRESS
  };
};
