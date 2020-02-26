import {
  getProductAction,
  storeProductAction,
  getProductDetailAction,
  endProductAction
} from "./actionCreators";

import { getData } from '../../services/http/http.service';

const mockProduct = () => {
  return getData('api/products?', 'BASE_URL').then(res => {
    return res;
  }).catch(err => console.log(err));
};

export const getProduct = () => async dispatch => {
  dispatch(getProductAction());
  const response = await mockProduct();
  if (response.success) {
    dispatch(storeProductAction(response));
  } else {
    alert(response.full_messages[0]);
  }
  dispatch(endProductAction());
};

const mockProductDetail = data => {
  return getData(`api/products/${data}`, 'BASE_URL').then(res => {
    return res;
  }).catch(err => console.log(err));
};

export const getProductDetails = data => async dispatch => {
  const response = await mockProductDetail(data);
  if (response.success) {
    dispatch(getProductDetailAction(response));
  }
};

