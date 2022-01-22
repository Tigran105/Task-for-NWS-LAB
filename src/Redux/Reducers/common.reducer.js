import {CHANGE_LOADING, CHANGE_THEME} from "../Actions/cammon.action";

const initialState = {
    loading: true,
    theme: true
}
export const commonReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_LOADING:
            return {...state, loading: action.payload}

        case CHANGE_THEME:
            return {...state, loading: !state.theme}
        default:
            return state
    }
}