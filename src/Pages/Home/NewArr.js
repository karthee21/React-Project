import React from 'react'
import { PlusCircle } from 'react-feather'
import { Products } from '../../Assets/products';
import "./NewArr.css"
import { LiaHeart, LiaStarSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
function NewArr() {
    const specificIds = ["10", "11", "12", "13", "14", "15", "20", "21", "22", "23"];
    return (
        <>
            {/* ------------------------------------NEW ARRIVALS---------------------------------------- */}
            <div className='new-arr'>


                <div className='container'>
                    <div className='row '>
                        {Products.map((product) => (
                            specificIds.includes(product.id) && ( // Only render if the product ID is in specificIds
                                <div className='col-md-4 my-3' key={product.id}>
                                    <div className='card'>
                                        <Link to={`/Single/${product.id}`}>
                                            <LiaHeart className='heart' />
                                            <img src={product.imgUrl} alt={product.productName} />
                                            <p>{product.productName}</p>
                                            <section style={{ color: 'rgb(241 194 74)' }}>
                                                {[...Array(5)].map(() =>
                                                    (<LiaStarSolid size={25} className='my-2' />))}
                                            </section>
                                            <h2>${product.price}</h2>
                                        </Link>
                                        <button className="position-absolute bottom-0 end-0">
                                            <PlusCircle />
                                        </button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewArr
