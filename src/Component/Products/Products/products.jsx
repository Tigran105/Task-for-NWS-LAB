import React from "react";
import productStyle from "./products.module.scss"
import {useSelector} from "react-redux";

function Products() {
    const products = useSelector(state => state?.productReducer.products)
    return (
        <div>
            <div className={productStyle.content}>
                {products && products.map(cat => {
                    return <div key={cat.id}
                                className={productStyle.product}>
                        <div className={productStyle.imgDiv}>
                            <img
                                src={cat.url}
                                alt={cat.id}
                            />
                        </div>

                    </div>
                })}
            </div>
        </div>
    );
}

export default Products;