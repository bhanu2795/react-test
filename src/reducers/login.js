import {
    STORE_LOGIN,
    REMOVE_LOGIN
} from "../actions/login/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case STORE_LOGIN:
            return {
                ...state,
                data: action.payload
            };
        case REMOVE_LOGIN:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
};
