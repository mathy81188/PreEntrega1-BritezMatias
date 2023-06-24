import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [prodUn, setProdUn] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) =>
      setProdUn(json.data)
    );
  }, [id]);

  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <ItemDetail prodUn={prodUn} />
    </div>
  );
};

export default ItemDetailContainer;
