import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000)
  },[navigate]);

  return (
    <div>
      <h1>Nada para ver</h1>
      <p>Redirigiendo al Menu Completo...</p>
    </div>
  );
};

export default NotFound;
