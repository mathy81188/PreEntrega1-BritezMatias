import "./ItemCount.css";

import { Link } from "react-router-dom";

const ItemCount = ({ counter, counterUp, counterDown, handleAdd }) => {
  return (
    <div className="container-ic">
      <div>
        <span onClick={counterDown}>-</span>
      </div>
      <span>{counter}</span>
      <div>
        <span onClick={counterUp}>+</span>
      </div>
      <Link className="button-add " to="/cart">
        <span onClick={handleAdd}>Añadir</span>
      </Link>
    </div>
  );
};

export default ItemCount;
