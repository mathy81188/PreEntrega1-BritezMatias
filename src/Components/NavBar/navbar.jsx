import React from 'react'
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <h1 className='logo'>ShopLink</h1>
            <li>Almacen</li>
            <li>Verduleria</li>
            <li>Carniceria</li>
            <li>Panaderia</li>
            <CartWidget />
        </nav>
    )
}

export default Navbar;