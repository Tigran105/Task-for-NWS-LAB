import React, {useEffect} from "react";
import Products from "./Products/products";
import ProductsCategories from "./ProductsCategories/productsCategories";
import productsPageStyles from "./productsPage.module.scss"
import {getProductsThunk} from "../../Redux/Actions/product.action";
import {useDispatch, useSelector} from "react-redux";
import {setLimit} from "../../Redux/Actions/productCategories.action";
import Loading from "../Common/Loading/loading";
import {setLoadingShow} from "../../Redux/Actions/cammon.action";

function ProductsPage() {
    const dispatch = useDispatch()
    const limit = useSelector(state => state?.productCategoriesReducer.limit)
    const loading = useSelector(state => state.commonReducer.loading)
    const activeCategoryId = useSelector(state => state?.productCategoriesReducer.activeCategoryId)
    const moreFnc = () => {
        dispatch(setLoadingShow(true))
        dispatch(setLimit(limit + 10))
    }
    useEffect(() => {
        dispatch(getProductsThunk(limit, activeCategoryId))
    },[limit])

    if (loading) {
        return <Loading/>
    }
    return (
        <div>
            <ProductsCategories/>
            <Products/>
            <button
                className={productsPageStyles.moreButton}
                onClick={moreFnc}
            >
                MORE
            </button>

        </div>
    );
}

export default ProductsPage;
