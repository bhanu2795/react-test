import {
    STORE_PRODUCT,
} from "../actions/product/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case STORE_PRODUCT:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};
