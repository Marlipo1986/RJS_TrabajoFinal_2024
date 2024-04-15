import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "120px",
          marginBottom: "20px",
        }}
      >
        <Card sx={{ width: 550 }}>
          <CardMedia
            sx={{ height: 350 }}
            image={productSelected.img}
            title={productSelected.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productSelected.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {productSelected.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              $ {productSelected.price}
            </Typography>
            <Typography variant="h4" fontFamily="monospace">
              {initial && <h4>Ya tienes {initial} platos por ordenar</h4>}
            </Typography>
          </CardContent>
        </Card>
      </div>

      {showCounter ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      ) : (
        <Link to="/cart">
          <Typography
            variant="body2"
            sx={{ textAlign: "center", textDecoration: "none" }}
          >
            Ordenar Comida
          </Typography>
        </Link>
      )}
    </div>
  );
};
