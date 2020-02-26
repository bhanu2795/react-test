import {
    STORE_PRODUCT,
    GET_PRODUCT_DETAIL
} from "../actions/product/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case STORE_PRODUCT:
            return {
                ...state,
                data: action.payload
            };
        case GET_PRODUCT_DETAIL: 
        return {
            ...state,
            detail: action.payload
        };
        default:
            return state;
    }
};
