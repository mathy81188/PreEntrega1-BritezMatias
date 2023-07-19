import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import Swal from "sweetalert2";

import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [prodUn, setProdUn] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const docRef = async () => {
      const ref = doc(db, "productos", id);
      const docSnap = await getDoc(ref);

      if (docSnap.exists()) {
        setProdUn(docSnap.data());
      } else {
        Swal.fire("Producto Inexistente");
      }
    };
    docRef();
  }, [id]);

  return (
    <div className="container-idc">
      <ItemDetail prodUn={prodUn} id={id} />
    </div>
  );
};

export default ItemDetailContainer;
