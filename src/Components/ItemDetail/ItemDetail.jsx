import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../CartContext/CartContext";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const ItemDetail = ({ prodUn, id }) => {
  const { addToCart } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const handleAdd = (e) => {
    const product = { id, ...prodUn };
    addToCart(product, counter);

    e.preventDefault();
  };

  return (
    <div className="Card-Prod">
      <Card sx={{ display: "flex", maxWidth: 1000 }}>
        <CardMedia
          component="img"
          image={prodUn.img}
          alt="Product Image"
          sx={{ width: 400, objectFit: "cover" }}
        />
        <CardContent
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 2,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {prodUn.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Precio Un. $${prodUn.price}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prodUn.origin}
          </Typography>
          <ItemCount
            prodUn={prodUn}
            counter={counter}
            counterUp={counterUp}
            counterDown={counterDown}
            handleAdd={handleAdd}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default ItemDetail;
