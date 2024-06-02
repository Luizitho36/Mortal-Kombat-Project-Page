import "./Item.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { agregarAlCarrito, eliminarDelCarrito } from "../../redux/actions";

export default function Item({ name, price, id, imgUrl }) {
  
  const dispatch = useDispatch();
  const carrito = useSelector((store) => store.carrito);
  const [added, setAdded] = useState(false);

  const agregoAlCarrito = () => {
    dispatch(agregarAlCarrito({ name, price, id, imgUrl }));
    setAdded(true)
  };

  const quitoDelCarrito = () => {
    dispatch(eliminarDelCarrito({ id }));
    setAdded(false)
  };

  const idContador = (id) => {
    return carrito.find((item) => item.id === id)?.acumId || 0;
  };

  const contadorPorItem = idContador(id);

  return (

    // Detalles de cada producto
    <div className="caja-item">
      {/* Nombre, imágen y precio */}
      <div>{name}</div>
      <img className="imgURL" src={imgUrl} />
      <div className="precio-item">${price}</div>

      {/* Botones de Quitar y Agregar al Carrito */}
      {added ? (
        <button className="boton-eliminar" onClick={() => quitoDelCarrito()}>
          Quitar del Carrito
        </button>
      ) : (
        <button className="boton-agregar" onClick={() => agregoAlCarrito()}>
          Agregar Al Carrito
        </button>
      )}

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
      </style>
    </div>
  );
}
