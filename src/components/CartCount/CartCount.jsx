import "./cartCount.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartCount() {
  const carrito = useSelector((store) => store.carrito);

  return (
    <div>
      {/* Link al carrito */}
      <h2 className="lista-carrito">
        <Link to={"/Store/carrito"} className="carrito">
          Carrito:{" "}
          <span className="contador-carrito">{carrito.length || 0}</span>
        </Link>
      </h2>
    </div>
  );
}

export default CartCount;
