import React from 'react'
import { Products, discoutProducts } from '../../Assets/products'
import { LiaHeart, LiaStarSolid } from "react-icons/lia";
import { PlusCircle } from 'react-feather';
import "./BigDis.css"
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Cart/CartSlice';
import { toast } from 'react-toastify';
function BigDis() {
    const { id } = useParams()
    
    const productDetails = Products.find((Discount) => Discount.id === id)
    
    
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(add({ ...productDetails }))
        console.log(add)
    }
    function click(Discount){
        dispatch(add(Discount))
        toast.dark("added to cart")
    }
    // -----------------BIG DISCOUNT------------------ 
    return (
        <>
            <div className='big-dis'>
                <div className='container'>
                    <div className='row'>
                        {discoutProducts.map((Discount, index) => (
                            <div key={index} className='col-md-4 my-3'>
                                <div className='card'>
                                    <LiaHeart className='heart' />
                                    <Link to={`/Single/${Discount.id}`}>
                                        <p>{Discount.discount}% Off</p>
                                        <img src={Discount.imgUrl} alt='img' className='w-100' />
                                        <h4>{Discount.productName}</h4>
                                        <section style={{ color: 'rgb(241 194 74)' }}>
                                            {[...Array(5)].map(() =>
                                                (<LiaStarSolid size={25} className='my-2' />))}
                                        </section>
                                        <h3>${Discount.price}</h3>
                                    </Link>
                                    <button onClick={() => [click(Discount),
                                    handleAdd(productDetails)]
                                    } className="position-absolute bottom-0 end-0">
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
