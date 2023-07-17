//Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
import React from "react";
import { Link } from "react-router-dom";
import "../ItemList/ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ prods }) => {
  return (
    <div className="Card-List">
      {prods.map((prod) => {
        return (
          <div className="Card-Prod" key={prod.id}>
            <Link to={`item/${prod.id}`}>
              <Item prod={prod} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
