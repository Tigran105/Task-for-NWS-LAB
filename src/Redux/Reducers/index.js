import {combineReducers} from "redux";
import {commonReducer} from "./common.reducer";
import {productCategoriesReducer} from "./productCategories.reducer";
import {productReducer} from "./product.reducer";

export const rootReducers = combineReducers({
    commonReducer,
    productCategoriesReducer,
    productReducer
})