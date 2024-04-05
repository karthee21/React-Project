import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";



const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}
export default Router