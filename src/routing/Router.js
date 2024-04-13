import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Shop/Products";
import Single from "../Pages/single-product/Single";



const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/Single/:id" element={<Single />} />
            </Routes>
        </>
    )
}
export default Router