import "./productDetails.css";
import React from "react";
import {
  sumarUnoMas,
  restarDelCarrito,
  eliminarDelCarrito,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
  const dispatch = useDispatch();
  const carrito = useSelector((store) => store.carrito);

  const sumoAlCarrito = (item) => {
    dispatch(sumarUnoMas(item));
  };

  const restoDelCarrito = (item) => {
    dispatch(restarDelCarrito(item));
  };

  const eliminoDelCarrito = (item) => {
    dispatch(eliminarDelCarrito(item));
  };

  return (
    <div>
      {/* Tabla de detalles de los productos seleccionados */}
      <table className="tabla-de-compra">
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <div className="datos-item">
                {/* Nombre del producto */}
                <th>{item.name}</th>
              </div>
              <div className="datos-compra">
                {/* Precio del producto */}
                <th className="item-precio">$ {item.price}</th>
                <th>
                  {/* Botón de restar 1 */}
                  <button
                    className="btn-cantidad"
                    onClick={() => restoDelCarrito(item)}
                    disabled={item.cantidad <= 1}
                  >
                    -
                  </button>

                  {/* Botón con el número de la cantidad del producto */}
                  <button className="numero-cantidad">{item.cantidad}</button>

                  {/* Botón de sumar 1 */}
                  <button
                    className="btn-cantidad"
                    onClick={() => sumoAlCarrito(item)}
                  >
                    +
                  </button>
                </th>
                <th>
                  {/* Botón de eliminar producto */}
                  <button
                    type="button"
                    className="btn-eliminar"
                    onClick={() => eliminoDelCarrito(item)}
                  >
                    ❌
                  </button>
                </th>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetails;
