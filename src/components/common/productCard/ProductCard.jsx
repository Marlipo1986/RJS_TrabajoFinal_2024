import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 280, margin:"20px" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        {/* <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography> */}
        <Typography variant="h6" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        {
          item.stock > 0 ?
          <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained" color="success">
            Ver detalle
          </Button>
        </Link> : <Button variant="contained" disabled>Sin stock</Button>
        }
      </CardActions>
    </Card>
  );
};

export default ProductCard;
