import {
  START_ADD_USER,
  END_ADD_USER
} from "./actionTypes";

export const getAddUserAction = () => {
  return {
    type: START_ADD_USER
  };
};

export const endAddUserAction = () => {
  return {
    type: END_ADD_USER
  };
};
