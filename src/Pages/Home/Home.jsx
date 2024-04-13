import React from 'react'
// -----------------------------------
import Banner from './Banner'
import Service from './Service'
import BigDis from './BigDis'
import NewArr from './NewArr'
import BestSales from './BestSales'



// const keyhandler = () => {
//     if ((Products.id >= 10 && Products.id <= 16) || (Products.id >= 20 && Products.id <= 25)) {
//         return `range_${Products.id}`; // Generate a key based on the id and the range it falls into
//     } else {
//         return null; // Return null for ids outside the specified ranges
//     }
// }
function Home() {
    return (
        <>
            <Banner />
            <Service />
            <div>
                <h2>Big Discount</h2>
            </div>
            <BigDis />

            <h2>New Arrivals</h2>

            <NewArr />

            <h2>Best Sales</h2>

            <BestSales />
        </>
    )
}
export default Home
