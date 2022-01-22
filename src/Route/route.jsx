import React from "react";
import {Route, Routes} from "react-router-dom";
import {allRoutes} from "../config/routeConfig";

function Pages() {
    return (
        <Routes>
            {allRoutes.map(route => {
                return <Route
                    key={route.id}
                    path={route.route}
                    element={route.component}
                    exact={route.exact}/>
            })}
        </Routes>
    );
}

export default Pages;
