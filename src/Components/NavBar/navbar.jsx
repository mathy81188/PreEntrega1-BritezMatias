import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >
      <Link className="logo" to="/">
        ShopLink
      </Link>
      <ul className="categorias">
        <Link className="li" to="category/Human">
          Almacen
        </Link>
        <Link className="li" to="/category/Alien ">
          Verduleria
        </Link>
        {/*   
        <Link className="li" to="/category/Carniceria ">
          Carniceria
        </Link>       
         <Link  className="li" to="/category/Panaderia ">
          Panaderia
        </Link> 
        */}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
