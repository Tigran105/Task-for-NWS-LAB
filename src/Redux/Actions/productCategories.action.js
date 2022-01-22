import {axiosMiddleware, setLoadingShow} from "./cammon.action";
import {getCategoriesUrl} from "../../config/apiUrls";

export const GET_PRODUCTS_CATEGORIES = "GET_PRODUCTS_CATEGORIES"
export const SET_ACTIVE_CATEGORY_ID = "SET_ACTIVE_CATEGORY_ID"
export const SET_LIMIT = "SET_LIMIT"


export const getProductsCategories = (payload) => {
    return {
        type: GET_PRODUCTS_CATEGORIES,
        payload
    }
}
export const setActiveCategoryId = (payload) => {
    return {
        type: SET_ACTIVE_CATEGORY_ID,
        payload
    }
}
export const setLimit = (payload) => {
    return {
        type: SET_LIMIT,
        payload
    }
}

export const getProductsCategoriesThunk = () => {
    return async dispatch => {
        try {
            const url = getCategoriesUrl()
            const response = await axiosMiddleware("GET", url)
            dispatch(setLoadingShow(false))
            if (response.status) {
                dispatch(getProductsCategories(response.data))
            }
        } catch (err) {
            throw err
        }
    }
}
