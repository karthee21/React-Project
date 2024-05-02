import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './CartSlice'

import "./Cart.css"
const Cart = () => {
    const cartData = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    console.log(cartData)
    const handleRemove = (id) => {
        dispatch(remove(id))
    }
    const [quantity, setQuantity] = useState(1)
let i =0
i++
    const total = cartData[i].price *  quantity 
    console.log(cartData[i].price)
    return (
        <div className='body'>
            <div className='second-body'>
                <div>
                    {cartData && cartData.length > 0 ? (
                        cartData.map((item) => (
                            <div key={item.id} className='row my-3 border-top border-bottom cart-row'>
                                <div className=''>
                                    <img src={item.imgUrl} alt={item.productName} className='image w-100' />
                                </div>
                                <div className='pro-price'>
                                    <h4>{item.productName}</h4>

                                    <span>$ {item.price}  </span>
                                    <span>✕</span>
                                    <span>{quantity}</span>
                                    <span>=</span>
                                    <span>{total}</span>

                                </div>
                                    <button className="btn btn-outline-danger"
                                        onClick={() => { handleRemove(item.id) }}
                                    >✕</button>
                            </div>
                        ))
                    ) : <p>Please add some products</p>
                    }
                </div>
                <aside className='mt-3'>
                    <h2>Cart Summary</h2>
                    <h6>Total Price</h6>
                </aside>
            </div>
        </div>
    )
}

export default Cart
