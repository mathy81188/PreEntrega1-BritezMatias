import { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const [counterUp] = () => {
    setCounter(counter + 1);
  };
  const [counterDown] = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p> counter :{counter}</p>

      <button onClick={counterUp}>Incrementar</button>
      <button onClick={counterDown}> Decrementar</button>
    </div>
  );
};

export default ItemCount;
