import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

import axios from "axios";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios("../../../data/data.json").then((json) => setProds(json.data));
  }, []);

  return (
    <div className="Card-List">
      {prods.map((prod) => {
        return (
          <div key={prod.id}>
            <Link to={`item/${prod.id}`}>
              <Card sx={{ maxWidth: 345 }} prod={prod}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={prod.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {prod.articulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {prod.precio}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
