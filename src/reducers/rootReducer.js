import { combineReducers } from "redux";
import example from "./example";
import register from "./register";
import login from './login'

export default combineReducers({
  example,
  register,
  login
});
