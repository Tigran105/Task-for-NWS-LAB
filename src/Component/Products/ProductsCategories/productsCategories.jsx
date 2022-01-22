import React, {useEffect} from 'react'
import productHeaderStyles from './productsCategories.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    getProductsCategoriesThunk,
    setActiveCategoryId, setLimit,
} from "../../../Redux/Actions/productCategories.action";
import {getProductsThunk} from "../../../Redux/Actions/product.action";
import {setLoadingShow} from "../../../Redux/Actions/cammon.action";

const ProductsCategories = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductsCategoriesThunk())
    }, [])
    const categories = useSelector(state => state?.productCategoriesReducer.categories)
    const activeCategoryId = useSelector(state => state?.productCategoriesReducer.activeCategoryId)
    const changeCategory = (id) => {
        dispatch(setLoadingShow(true))
        dispatch(setActiveCategoryId(id))
        dispatch(setLimit(10))
        dispatch(getProductsThunk(10, id))

    }
    return (
        <div className={productHeaderStyles.header}>
            <div className={productHeaderStyles.categories}>
                {categories && categories.map(category => {
                    return <div
                        className={productHeaderStyles.category}
                        key={category.id}
                        onClick={() => changeCategory(category.id)}
                        style={{
                            background: activeCategoryId === category.id ?
                                "rgba(0, 55, 11, 0.46)" : "none"
                        }}
                    >
                        {category.name}
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductsCategories