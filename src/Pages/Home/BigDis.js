import React from 'react'
import { discoutProducts } from '../../Assets/products'
import { LiaHeart, LiaStarSolid } from "react-icons/lia";
import { PlusCircle } from 'react-feather';
import "./BigDis.css"
import { Link } from 'react-router-dom';
function BigDis() {
    return (
        <>
            {/* -----------------BIG DISCOUNT------------------ */}
            <div className='big-dis'>
                <div className='container'>
                    <div className='row'>
                        {discoutProducts.map((Discount, index) => (
                            <div key={index} className='col-md-4 my-3'>
                                <div className='card'>
                                    <LiaHeart className='heart'/>
                                    <Link to={`/Single/${Discount.id}`}>
                                        <p>{Discount.discount}% Off</p>
                                        <img src={Discount.imgUrl} alt='img' className='w-100' />
                                        <h4>{Discount.productName}</h4>
                                        <section style={{ color: 'rgb(241 194 74)' }}>
                                            {[...Array(5)].map((star,index) =>
                                            (<LiaStarSolid size={25} className='my-2'/>))}
                                        </section>
                                        <h3>${Discount.price}</h3>
                                    </Link>
                                    <button className="position-absolute bottom-0 end-0">
                                        <PlusCircle />
                                    </button>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigDis
