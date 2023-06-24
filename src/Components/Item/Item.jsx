//Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = ({ prod }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia component="img" image={prod.image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prod.species}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item;
