import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ counter, counterUp, counterDown, handleAdd }) => {
  return (
    <div className="container-ic">
      <div className="counter-control" onClick={counterDown}>
        -
      </div>
      <span className="counter-value">{counter}</span>
      <div className="counter-control" onClick={counterUp}>
        +
      </div>
      <div className="button-container">
        <Link className="button-add" to="/cart" onClick={handleAdd}>
          Añadir
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
