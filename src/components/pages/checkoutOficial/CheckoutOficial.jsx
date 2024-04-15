import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import { serverTimestamp } from "firebase/firestore";

import { db } from "../../../firebaseConfig";

import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div style={{marginTop:"170px", border:"1rem solid", display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <h2>Gracias por su compra, su N° de comprobante es {orderId}</h2>
      
          <Link to="/">
            <Button variant="outlined">Seguir comprando
            </Button>
            </Link>
        </div>
      ) : (
        
        <form style={{marginTop:"170px", display:"flex", flexDirection:"column", gap:"10px", width:"50%", justifyContent:"center"}} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">Comprar</Button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;

