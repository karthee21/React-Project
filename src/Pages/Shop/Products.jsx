import React from 'react'
import { CgSearch } from "react-icons/cg";
// ----------------------------------------
import BestSales from '../Home/BestSales'
import Table from "./table.jpg"
import "./Products.css"
const Products = () => {
    return (
        <>
            <div className='banner'>
                <img src={<Table />} alt="BANNER" />
                <h2>Products</h2>
            </div>
            <div>
                <form className='search'>
                    <select >
                        <option value="main" >Filter By Category</option>
                        <option value="mobils">Mobils</option>
                        <option value="chairs">Chairs</option>
                        <option value="Sofas">Sofas</option>
                        <option value="wireless">Wireless</option>
                    </select>
                    <div className='w-100'>
                        <input type="search" placeholder='Search...' />{/* search-icon */}
                        <CgSearch />
                    </div>
                </form>
            </div>
            <BestSales />
        </>
    )
}

export default Products
