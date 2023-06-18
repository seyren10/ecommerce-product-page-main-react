import { createContext } from "react";

export const uiDefault = {
  showCart: false,
  showLightboxGallery: false,
  toggleCart: (val) => {},
  toggleLightboxGallery: (val) => {},
};

export const uiToggleCtx = createContext(uiDefault);

export const CartContext = createContext({
  items: [],
  cartCount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});
