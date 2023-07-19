import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ prods }) => {
  return (
    <div className="container-il">
      {prods.map((prod) => {
        return (
          <div className="Card-Prod" key={prod.id}>
            <Link className="link" to={`/item/${prod.id}`}>
              <Item prod={prod} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
