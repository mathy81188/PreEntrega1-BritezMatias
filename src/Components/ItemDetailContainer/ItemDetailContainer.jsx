import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`../../../data/data.json/${id}`).then((json) => setProd(json.data));
  }, [id]);

  return (
    <div>
      <h1>detail</h1>
      {prod.id ? <ItemListContainer prod={prod} /> : null}
    </div>
  );
};

export default ItemDetailContainer;
