import React from 'react'
import BestSales from '../Home/BestSales'
import './table.jpg'
import "./Products.css"
const Products = () => {
    return (
        <>
            <div className='banner'>
                <h2>Products</h2>
            </div>
            <div>
                <form className='search'>
                    <select >
                        <option value="main" disabled>Filter By Category</option>
                        <option value="mobils">Mobils</option>
                        <option value="chairs">Chairs</option>
                        <option value="Sofas">Sofas</option>
                        <option value="wireless">Wireless</option>
                    </select>
                    <input type="search" placeholder='Search...'/>
                </form>
            </div>
            <BestSales />
        </>
    )
}

export default Products
