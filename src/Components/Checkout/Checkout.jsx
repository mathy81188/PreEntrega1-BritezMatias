import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { cartList, getPrice, removeList } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cartList,
      total: getPrice(),
    };
    console.log(data);
    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      removeList();
    });
  };
  if (pedidoId) {
    return (
      <div>
        <h1>Gracias por su compra</h1>
        <h2>Su numero de pedido es {pedidoId}</h2>
      </div>
    );
  }

  return (
    <div>
      Checkout
      <form onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          {...register("nombre")}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          {...register("apellido")}
        />
        <input
          type="email"
          placeholder="Ingrese su Email"
          {...register("email")}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
