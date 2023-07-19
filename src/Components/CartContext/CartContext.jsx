import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const isInCart = (id) =>
    cartList.find((product) => product.id === id) ? true : false;

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList(
        cartList.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };

  const getQuantity = () => {
    let cant = 0;
    cartList.forEach((e) => (cant += e.quantity));
    return cant;
  };

  const getPrice = () => {
    return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    const deletedItem = cartList.filter((item) => item.id !== id);
    setCartList([...deletedItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        removeList,
        deleteItem,
        getQuantity,
        getPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
