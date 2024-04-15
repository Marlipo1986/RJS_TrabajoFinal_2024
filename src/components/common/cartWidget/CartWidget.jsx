import { Badge } from "@mui/material";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge
        badgeContent={total}
        showZero
        color="warning"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DinnerDiningIcon
          sx={{ color: "white", fontSize: 38, alignSelf: "inherit" }}
        />
      </Badge>
    </Link>
  );
};

export default CartWidget;
