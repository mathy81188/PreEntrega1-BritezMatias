import React, { useContext } from "react";
import "./../CartWidget/CartWidget.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../CartContext/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 23,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 7px",
    color: "red",
  },
}));

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="CartWidget">
      <IconButton aria-label="cart" color="success">
        <StyledBadge badgeContent={getQuantity()}>
          <ShoppingCartIcon sx={{ fontSize: 37 }} />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
