import React from "react";
import "./Item.css";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const Item = ({ prod }) => {
  return (
    <div>
      <Card className="Card-Prod" sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia component="img" image={prod.img} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$${prod.price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item;
