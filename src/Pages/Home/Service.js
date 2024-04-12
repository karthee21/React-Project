import React from 'react'
import { serviceData } from '../../Assets/products'
import "./Service.css"

function Service() {
    return (
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
    )
}

export default Service
