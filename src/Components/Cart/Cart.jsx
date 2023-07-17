import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Total a Pagar {`$${getPrice()}`} </h1>
      <span onClick={removeList}>Vaciar Carrito</span>
      <Link to="/checkout">Finalizar Compra</Link>

      {cartList.map((prod) => (
        <Card sx={{ maxWidth: 240 }} key={prod.id}>
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

              <Typography variant="body2" color="text.secondary">
                {prod.origin}
              </Typography>
              <span onClick={() => deleteItem(prod.id)}>Eliminar Producto</span>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
