import axios from "axios";

export const CHANGE_LOADING = "CHANGE_LOADING"
export const CHANGE_THEME = "CHANGE_THEME"

export const setLoadingShow = (payload) => {
    return {
        type: CHANGE_LOADING,
        payload
    }
}
export const changeTheme = () => {
    return {
        type: CHANGE_THEME,

    }
}

export const axiosMiddleware = ( method, url ) => {
    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'Application/json'
        }
    }
    return axios(config)
}