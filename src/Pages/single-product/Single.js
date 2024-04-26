import React from 'react'
import { Products } from '../../Assets/products'
import "./Single.css"
import { LiaHeart, LiaStarSolid } from 'react-icons/lia';
import { add } from '../Cart/CartSlice';
import { Link, useParams } from 'react-router-dom';
import { PlusCircle } from 'react-feather';
import { useDispatch } from 'react-redux';

const Single = () => {


    const { id } = useParams()
    const productDetails = Products.find((item) => item.id === id)

    // -----HANDLE ADD--------
    const dispatch = useDispatch()

    const handleAdd = (productDetails) => {
        dispatch(add(productDetails))
console.log(add)
    }

    //--------SIMILAR PRODUCTS--------

    const similarProducts = Products.filter((item) => item.category === productDetails.category && item.id !== productDetails.id)


    return (
        <div className='single'>
            <div class="container">
                {Object.keys(productDetails).length > 0 ? (
                    <div class="row">
                        <div class="col-md-6">
                            <img src={productDetails.imgUrl} alt='img' className='w-100' />
                        </div>
                        <div class="col-md-6">
                            <h2>{productDetails.productName}</h2>
                            <div class="rating">
                                <section>
                                    {[...Array(5)].map(() =>
                                        (<LiaStarSolid size={25} className='my-2' />))}
                                        <p>{productDetails.avgRating} ratings</p>
                                </section>
                            </div>
                            <section>
                                <h3 class="price">${productDetails.price}</h3>
                                <p class="category">Category: {productDetails.category}</p>
                            </section>
                            <p class="description">{productDetails.shortDesc}</p>
                            <form>
                                <div class="mb-3">
                                    <input type="number" className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <button type="submit" class="btn"
                                    onClick={() => { handleAdd(productDetails) }}
                                >Add to Cart</button>
                            </form>
                        </div>
                        <div>
                            <section>
                                <h4>description</h4>
                                <h4 className='mx-4'>reviews</h4>
                            </section>
                            <p>{productDetails.description}</p>
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

            {/* ----------------------------------SIMILAR PRODUCTS------------------------- */}

            <div className='container'>
                <h2>You might also like</h2>
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
