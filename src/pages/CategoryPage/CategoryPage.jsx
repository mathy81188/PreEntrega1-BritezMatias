import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const CategoryPage = () => {
  const [prodCat, setProdCat] = useState([]);

  let { categoryId } = useParams();

  let filteredDiscos = prodCat.filter((item) => {
    return item.category === categoryId;
  });

  useEffect(() => {
    axios(`../../../public/data/data.json/${categoryId}`).then((json) =>
      setProdCat(json)
    );
  }, [categoryId]);
  console.log(categoryId);
  return (
    <div>
      {filteredDiscos.map((prod) => {
        return (
          <div key={prod}>
            <ItemListContainer prod={prod} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
