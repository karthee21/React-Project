import React, { useState } from 'react'
import { Products, discoutProducts } from '../../Assets/products'
import "./Single.css"
import { LiaHeart, LiaStarSolid } from 'react-icons/lia';
import { add } from '../Cart/CartSlice';
import { Link, useParams } from 'react-router-dom';
import { PlusCircle } from 'react-feather';

const Single = () => {
    const [addToCart, setAddToCart] = useState(false)
    const [product, setProduct] = useState({})

    const { id } = useParams()
    const productDetails = Products.find((item) => item.id === id)
    const item = discoutProducts[0]; // Assuming you are accessing the first item in the array for demonstration
    const handleAdd = (product) => {
        dispatchEvent(add(product))
        setAddToCart(true)
    }
    const similarProducts = Products.filter((item) => item.category === productDetails.category && item.id !== productDetails.id)
    const getProduct = async () => {
        const { data } = `/product/${discoutProducts.id}`
        setProduct(data)
    };

    return (
        <div className='single'>
            <div class="container mt-4">
                {Object.keys(productDetails).length > 0 ? (
                    <div class="row">
                        <div class="col-md-6">
                            <img src={productDetails.imgUrl} alt='img' className='w-100' />
                        </div>
                        <div class="col-md-6">
                            <h2>{productDetails.productName}</h2>
                            <div class="rating">
                                <section style={{ color: 'rgb(241 194 74)' }}>
                                    {[...Array(5)].map((star, index) =>
                                        (<LiaStarSolid size={25} className='my-2' />))}
                                </section>
                            </div>
                            <section>
                                <h3 class="price">${productDetails.price}</h3>
                                <p class="category">Category: {productDetails.category}</p>
                            </section>
                            <p class="description">{productDetails.description}</p>
                            <form>
                                <div class="mb-3">
                                    <input type="number" className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={() => {
                                    handleAdd(product);  // Add product to cart
                                }}>Add to Cart</button>
                            </form>
                        </div>
                    </div>) : (
                    <div className="position-absolute top-50 start-50 translate-middle" role="status">
                        <div role="status">
                            <span className="spinner-grow text-primary"></span>
                            <span className="spinner-grow text-danger mx-2"></span>
                            <span className="spinner-grow text-success"></span>
                        </div>
                    </div>
                )}
            </div>
            <div className='container'>
                <div className='row'>
                    {similarProducts.map((item, index) => (
                        <div key={index} className='col-md-4 my-3'>
                            <div className='card p-3'>
                                <LiaHeart className='heart' />
                                <Link to={`/Single/${item.id}`}>
                                    <img src={item.imgUrl} alt='img' className='w-100' />
                                    <h4>{item.productName}</h4>
                                    <section style={{ color: 'rgb(241 194 74)' }}>
                                        {[...Array(5)].map((star, index) =>
                                            (<LiaStarSolid size={25} className='my-2' />))}
                                    </section>
                                    <h3>${item.price}</h3>
                                </Link>
                                <button className="position-absolute bottom-0 end-0">
                                    <PlusCircle />
                                </button>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default Single
