import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemDetail = ({ prodUn }) => {
  console.log(prodUn);

  return (
    <div className="Card-Prod">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={prodUn.image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prodUn.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prodUn.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prodUn.origin?.["name"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prodUn.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prodUn.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemDetail;
