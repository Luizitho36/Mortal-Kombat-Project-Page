export function agregarAlCarrito(data) {
  data.cantidad = 1;
  return {
    type: "[STORE]-AGREGAR_AL_CARRITO",
    payload: data,
  };
}

export function sumarUnoMas(item) {
  return {
    type: "[STORE]-SUMAR_UNO_MAS",
    payload: item,
  };
}

export function restarDelCarrito(item) {
  return {
    type: "[STORE]-RESTAR_DEL_CARRITO",
    payload: item,
  };
}

export function eliminarDelCarrito(item) {
    return {
      type: "[STORE]-ELIMINAR_DEL_CARRITO",
      payload: item,
    };
  }
