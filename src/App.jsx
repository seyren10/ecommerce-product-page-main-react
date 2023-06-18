import { useContext } from "react";
import { createPortal } from "react-dom";
import { uiToggleCtx } from "./context/context";
import { useMediaQuery } from "./hooks/useMediaQuery";

import ImageGallery from "./components/ImageGallery";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

import "./App.module.css";
import LightboxGallery from "./components/LightBoxGallery";

function App() {
  // const { showCart } = useContext(CartModalContext);
  const { showCart, showLightboxGallery } = useContext(uiToggleCtx);

  return (
    <>
      <NavBar />
      <main>
        <ImageGallery />
        <ProductDetails />
      </main>

      {/* modals */}
      {showCart && createPortal(<Cart />, document.getElementById("overlays"))}
      {showLightboxGallery &&
        createPortal(<LightboxGallery />, document.getElementById("overlays"))}
    </>
  );
}

export default App;
