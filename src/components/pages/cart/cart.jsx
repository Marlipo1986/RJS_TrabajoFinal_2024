import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el pedido?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Pedido Cancelado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se han realizado cambios en el pedido", "", "warning");
      }
    });
  };

  return (
    <div style={{ marginTop: 70 }}>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <Card sx={{ minWidth: 275, display: "flex" }}>
            <CardMedia
              sx={{ height: 140, width: 140, objectFit: "contain" }}
              image={product.img}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="h6">
                Cantidad ordenada: {product.quantity}
              </Typography>
              <Typography variant="h6">
                Precio Unitario: $ {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteForeverIcon color="primary" />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <Typography variant="h3" fontFamily="monospace">
            El total a pagar es :$ {total}
          </Typography>

          <Link to="/checkout">
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "5px" }}
            >
              Finalizar compra
            </Button>
          </Link>

          <Button
            variant="contained"
            color="warning"
            style={{ margin: "5px" }}
            onClick={clearCartWithAlert}
          >
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
