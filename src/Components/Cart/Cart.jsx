import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const Cart = () => {
  const { cartList, getPrice, removeList, deleteItem } =
    useContext(CartContext);

  return (
    <div className="cart">
      <div className="info">
        <h1>Total a Pagar {`$${getPrice()}`} </h1>
        <span className="button-vaciar" onClick={removeList}>
          Vaciar Carrito
        </span>
        <Link className="button-fin" to="/checkout">
          Finalizar Compra
        </Link>
      </div>

      <div className="cart-area">
        {cartList.map((prod) => (
          <Card sx={{ maxWidth: 140 }} key={prod.id}>
            <CardActionArea>
              <CardMedia component="img" image={prod.img} alt="green iguana" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {` ${prod.quantity} Un.`}|
                  {`Total $${prod.price * prod.quantity}`}
                </Typography>
                <span
                  className="button-delete"
                  onClick={() => deleteItem(prod.id)}
                >
                  Eliminar Producto
                </span>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
