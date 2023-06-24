import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character`).then((json) => {
      if (id) {
        setProds(json.data.results.filter((item) => item.species === id));
      } else {
        setProds(json.data.results);
      }
    });
  }, [id]);

  return (
    <div>
      <h1>ItemListContainer</h1>
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
