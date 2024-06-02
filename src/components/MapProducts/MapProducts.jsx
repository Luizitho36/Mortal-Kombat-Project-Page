import "./mapProducts.css";
import React from "react";
import productosMK from "../../data/products.json";
import Item from "../../components/ItemProduct/Item";
import { useSelector } from "react-redux";

function MapProducts() {
  const carrito = useSelector((store) => store.carrito);

  return (
    <div>
      {/* Mapeo de la lista de productos */}
      <div className="lista-e-Commerce">
        {productosMK.map((producto) => {
          return <Item key={producto.id} {...producto} />;
        })}
      </div>
    </div>
  );
}

export default MapProducts;
