import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./totalToPay.css";

function TotalToPay() {
  const carrito = useSelector((store) => store.carrito);

  const precioTotal = carrito.reduce((acc, curr) => {
    return acc + (curr.price * curr.cantidad);
  }, 0);

  const cantProduct = carrito.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  const handleImpresion = () => {
    print();
  };

  return (
    <div>
      {/* Cuadro con cantidad de productos y total a pagar */}
      <div className="carrito-container">
        <div>Cantidad de Productos: {cantProduct || 0}</div>
        <div>Total a Pagar: ${precioTotal}</div>
        <a href="/Store/carrito/gracias">
          {/* Botón Comprar */}
          <button
            className="boton-comprar"
            onClick={handleImpresion}
            disabled={carrito < 1}
          >
            ¡Comprar!
          </button>
        </a>

        <br></br>
        {/* Enlace hacia el indexStore */}
        <NavLink to="/store" className="seguirComprando">
          Seguir Comprando
        </NavLink>
      </div>
    </div>
  );
}

export default TotalToPay;
