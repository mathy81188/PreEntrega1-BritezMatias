import "./ItemCount.css";

import { Link } from "react-router-dom";

const ItemCount = ({ counter, counterUp, counterDown, handleAdd }) => {
  return (
    <div>
      <div>
        <span onClick={counterDown}>-</span>
      </div>
      <p>{counter}</p>
      <div>
        <span onClick={counterUp}>+</span>
      </div>
      <Link to="/cart">
        <h1 onClick={handleAdd}>Añadir</h1>
      </Link>
    </div>
  );
};

export default ItemCount;
