import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
    
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button variant="contained" color="error" onClick={restar}>
          -
        </Button>
        <h2>{contador}</h2>
        <Button variant="contained" color="primary" onClick={sumar}>
          +
        </Button>

        <Button variant="contained" color="success" onClick={() => onAdd(contador)}>
          Agregar a la comanda
        </Button>
      </div>
    </>
  );
};

export default CounterPresentacional;
