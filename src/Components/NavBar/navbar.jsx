import React from "react";
import "./navbar.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <Link className="logo" to="/">
        ShopLink
      </Link>
      <ul className="categorias">
        <Link className="li" to="/category/almacen">
          Almacen
        </Link>
        <Link className="li" to="/category/verduleria">
          Verduleria
        </Link>
        <Link className="li" to="/category/carniceria">
          Carniceria
        </Link>
        <Link className="li" to="/category/fruteria">
          Fruteria
        </Link>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
