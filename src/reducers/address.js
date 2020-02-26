import {
    STORE_ADDRESS,
} from "../actions/address/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case STORE_ADDRESS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};
