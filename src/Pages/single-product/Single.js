import React from 'react'
import { discoutProducts } from '../../Assets/products'
import "./single.css"
const Single = () => {
    return (
        <div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-6">
                    <img src={discoutProducts.imgUrl} alt='img' className='w-100'/>
                    </div>
                    <div class="col-md-6">
                        <h2>{discoutProducts.productName}</h2>
                        <div class="rating">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <p class="price">$193</p>
                        <p class="category">Category: Sofa</p>
                        <p class="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quis illo voluptates labore tempor!
                        </p>
                        <form>
                            <div class="mb-3">
                                <label for="quantity" class="form-label">Quantity</label>
                                <input type="number" class="form-control" id="quantity" value="1"/>
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
