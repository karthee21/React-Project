import React from 'react'
import { BsBagFill } from "react-icons/bs";

import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title"><BsBagFill /><b> MART</b></h5>
                        <p class="card-text">Lorem ipsum dolor sitnamet,
                            consectetur adipiscing elit.
                            Auctor libero id et,in
                            gravida.Sdiam duis
                            mauris nula cursus. Eart et
                            lectus vel sollicitudin elit
                            at amet</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">About Us</h5>
                        <p class="card-text">Careers</p>
                        <p class="card-text">Our stores</p>
                        <p class="card-text">Our Cares</p>
                        <p class="card-text">Term & condition</p>
                        <p class="card-text">Privacy Policy</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">Costomer Care</h5>
                        <p class="card-text">Help Center</p>
                        <p class="card-text">How to buy</p>
                        <p class="card-text">Track Your Order</p>
                        <p class="card-text">Corporate & "Bulk Purchasing</p>
                        <p class="card-text">Returns & Refunds</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p>
                            70 Washington Square
                            South New York,NY 10012,
                            United States
                        </p>
                        <p>Email:mutyalakarthik6@gmail.com</p>
                        <p>phone:+91 7989823913</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
