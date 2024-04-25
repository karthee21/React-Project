import React from 'react'
import { ShoppingCart, User } from "react-feather";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
    return (
        <header className='header'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <img src='https://www.achieversit.com/assets/images/logo-white.png' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/shop">shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/cart">cart</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page"><User /></a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/cart"><ShoppingCart /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
