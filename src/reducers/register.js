import {
    START_ADD_USER,
  } from "../actions/register/actionTypes";
  
  export default (state = {}, action) => {
    switch (action.type) {
      case START_ADD_USER:
        return {
          ...state
          // data: action.payload
        };
      default:
        return state;
    }
  };
  