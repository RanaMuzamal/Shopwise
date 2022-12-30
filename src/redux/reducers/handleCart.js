const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_PRODUCT":
      const exist = state.find((x) => x.id == product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETE_PRODUCT":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1) {
        if (exist1.qty === 1) {
          return state.filter((x) => x);
        } else {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      }

      break;
    case "DELETE_ALL_PRODUCT":
        const exist2 = state.filter((x) => x.id !== product.id);
        return exist2;
      break;

    default:
      return state;
  }
};
export default handleCart;
