import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial=1 }) => {
  const [contador, setContador] = useState( initial );

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Uhhh...',
        text: 'Ese sería el último plato en la cocina, pedilo antes que se termine!',
        footer: 'Por suerte hay otras opciones'
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
  );
};

export default CounterContainer;