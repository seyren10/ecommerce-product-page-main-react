import { useReducer } from "react";
import { uiToggleCtx, uiDefault } from "../context";

const uiToggleReducer = (state, action) => {
  switch (action.type) {
    case "CART":
      return { ...state, showCart: action.value };
    case "LIGHTBOX_GALLERY":
      return { ...state, showLightboxGallery: action.value };
    default:
      return uiDefault;
  }
};

const UIToggleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiToggleReducer, uiDefault);

  const toggleCart = (value) => {
    dispatch({ type: "CART", value });
  };
  const toggleLightboxGallery = (value) => {
    dispatch({ type: "LIGHTBOX_GALLERY", value });
  };

  return (
    <uiToggleCtx.Provider
      value={{
        showCart: state.showCart,
        showLightboxGallery: state.showLightboxGallery,
        toggleCart,
        toggleLightboxGallery,
      }}
    >
      {children}
    </uiToggleCtx.Provider>
  );
};

export default UIToggleProvider;
