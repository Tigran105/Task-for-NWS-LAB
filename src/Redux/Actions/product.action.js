import {axiosMiddleware, setLoadingShow} from "./cammon.action";
import {getProductsUrl} from "../../config/apiUrls";

export const GET_PRODUCTS = "GET_PRODUCTS"


export const getProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload
    }
}

export const getProductsThunk = (limit = 10, category_id = 1) => {
    return async dispatch => {
        try {
            // dispatch(setLoadingShow())
            const url = getProductsUrl(limit, category_id)
            const response = await axiosMiddleware("GET", url)
            dispatch(setLoadingShow(false))
            if (response.status) {
                dispatch(getProducts(response.data))
            }
        } catch (err) {
            throw err
        }
    }
}
