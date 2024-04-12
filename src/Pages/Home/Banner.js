import React from 'react'
import SliderData from '../../Assets/products'
import './Banner.css'

function Banner() {
    return (

        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner bg-light">
                {SliderData.length > 0 ? (
                    SliderData.map((item, id) => (

                        <div className="carousel-item active" key={id}>
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
                    </div>}
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
    )
}


export default Banner

