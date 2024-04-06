import React from 'react'
import './Home.css'


// -----------------------------------
import SliderData, { discoutProducts, products } from '../Assets/products'
import { serviceData } from '../Assets/products'
import { Plus } from 'react-feather'
import { LiaStarSolid } from "react-icons/lia";

function Home() {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner bg-light">
                    {SliderData.length > 0 ? (
                        SliderData.map((item, id) => (

                            <div className="carousel-item active" key={item.id}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                                <div>
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>

                        ))
                    ) :
                        <div class="spinner-grow text-info" role="status">
                            <span class="">Loading...</span>
                        </div>
                    }
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='service'>
                {serviceData.length > 0 ? (
                    serviceData.map((service, index) => (
                        <div key={index} style={{ background: service.bg }}>
                            <h2>{service.icon}</h2>
                            <h4>{service.title}</h4>
                            <p>{service.subtitle}</p>
                        </div>
                    ))) :
                    <div class="spinner-grow text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>}
            </div>

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
                                    <button><Plus /></button>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>

            {/* ------------------------------------NEW ARRIVALS---------------------------------------- */}
            <div className='new-arr'>
                <div>
                    <h2>New Arrivals</h2>
                </div>

                <div className='container'>
                    <div className='row'>
                        {products.map((Discount, index) => (
                            <div key={index} className='col-md-4 my-3'>
                                <div className='card'>
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
                                    <button><Plus /></button>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home
