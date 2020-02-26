import {
  START_GET_PRODUCT,
  STORE_PRODUCT,
  END_GET_PRODUCT
} from "./actionTypes";

export const getProductAction = () => {
  return {
    type: START_GET_PRODUCT
  };
};

export const storeProductAction = (payload) => {
  return {
    type: STORE_PRODUCT,
    payload
  };
};

export const endProductAction = () => {
  return {
    type: END_GET_PRODUCT
  };
};
