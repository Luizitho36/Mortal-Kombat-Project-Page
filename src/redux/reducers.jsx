const initialState = {
  carrito: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "[STORE]-AGREGAR_AL_CARRITO":
      return {
        ...state,
        carrito: state.carrito.concat(action.payload),
      };
    case "[STORE]-SUMAR_UNO_MAS":
      return {
        ...state,
        carrito: state.carrito.map((item) => {
          if (item.id === action.payload.id) {
            item.cantidad++;
          }
          return item;
        }),
      };
    case "[STORE]-RESTAR_DEL_CARRITO":
      return {
        ...state,
        carrito: state.carrito.map((item) => {
          if (item.id === action.payload.id) {
            if (item.cantidad <= 1) return item;
            else item.cantidad--;
          }
          return item;
        }),
      };
    case "[STORE]-ELIMINAR_DEL_CARRITO":
      return {
        ...state,
        carrito: state.carrito.filter((item) => {
          return item.id !== action.payload.id
        }),
      };

    default:
      return state;
  }
}

export default rootReducer;
