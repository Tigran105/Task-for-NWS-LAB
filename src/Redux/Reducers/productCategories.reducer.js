import {SET_ACTIVE_CATEGORY_ID, GET_PRODUCTS_CATEGORIES, SET_LIMIT} from "../Actions/productCategories.action";

const initialState = {
    activeCategoryId: 1,
    limit: 10,
    categories: []
}

export const productCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_CATEGORIES :
            return {
                ...state,
                categories: action.payload
            }
        case SET_LIMIT:
            return {
                ...state,
                limit: action.payload
            }

        case SET_ACTIVE_CATEGORY_ID :
            return {
                ...state,
                activeCategoryId: action.payload
            }
        default:
            return state
    }
}