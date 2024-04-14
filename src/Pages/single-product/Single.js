import React from 'react'
import { discoutProducts } from '../../Assets/products'
import "./Single.css"
import { LiaStarSolid } from 'react-icons/lia';
const Single = () => {

    const item = discoutProducts[0]; // Assuming you are accessing the first item in the array for demonstration
    const averageRating = item.reviews.reduce((total, review) => total + review.rating, 0) / item.reviews.length;

    return (
        <div className='single'>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-6">
                        <img src={item.imgUrl} alt='img' className='w-100' />
                    </div>
                    <div class="col-md-6">
                        <h2>{item.productName}</h2>
                        <div class="rating">
                            <section>
                                <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                                <span>{averageRating} rating</span>
                            </section>
                        </div>
                        <section>
                            <h3 class="price">${item.price}</h3>
                            <p class="category">Category: {item.category}</p>
                        </section>
                        <p class="description">{item.description}</p>
                        <form>
                            <div class="mb-3">
                                <input type="number" className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <button type="submit" class="btn btn-primary">Add to Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single
