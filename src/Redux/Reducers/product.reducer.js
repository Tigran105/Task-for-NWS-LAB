import {GET_PRODUCTS} from "../Actions/product.action";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS :
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}