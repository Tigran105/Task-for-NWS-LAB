import React from "react";
import loadingStyle from './loading.module.scss'

function Loading() {
    return (
        <div className={loadingStyle.loading}>
            Loading&#8230;
        </div>
    );
}

export default Loading;
