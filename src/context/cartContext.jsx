import react, { useReducer } from "react";
import { CartContext } from "./context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        items: [...state.items, action.value],
        cartCount:
          state.items.reduce((a, c) => a + c.qty, 0) + action.value.qty,
      };
    case "DELETE":
      // eslint-disable-next-line no-case-declarations
      const filteredItems = state.items.filter((item) => item.id !== action.id);

      return {
        items: filteredItems,
        cartCount: filteredItems.reduce((a, c) => a + c.qty, 0),
      };
    default:
      return { items: [], cartCount: 0 };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    cartCount: 0,
  });

  const addToCart = (item) => {
    dispatch({ type: "ADD", value: item });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        cartCount: cartState.cartCount,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
