import React from 'react'
import { discoutProducts } from '../../Assets/products'
import { LiaStarSolid } from "react-icons/lia";
import { PlusCircle } from 'react-feather';
import "./BigDis.css"
function BigDis() {
    return (
        <>
            {/* -----------------BIG DISCOUNT------------------ */}
            <div className='big-dis'>
                <div>
                    <h2>Big Discount</h2>
                </div>

                <div className='container'>
                    <div className='row'>
                        {discoutProducts.map((Discount, index) => (
                            <div key={index} className='col-md-4 my-3'>
                                <div className='card'>
                                    <p>{Discount.discount}% Off</p>
                                    <img src={Discount.imgUrl} alt='img' />
                                    <p>{Discount.productName}</p>
                                    <section>
                                        <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                        <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                        <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                        <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                        <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                    </section>
                                    <h2>${Discount.price}</h2>
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
