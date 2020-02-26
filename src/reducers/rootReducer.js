// import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { combineReducers } from "redux";

import example from "./example";
import register from "./register";
import login from './login';
import address from './address';
import product from './product';

const config = {
  key: 'root',
  whitelist: [
    'login'
  ],
  storage,
};

const appReducer = {
  example,
  register,
  login,
  address,
  product
};


export default persistCombineReducers(config, appReducer);
