import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/cartContext";
import UIToggleProvider from "./context/ui/uiToggle";
// import { CartModalContextProvider } from "./context/ui/CartModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <UIToggleProvider>
      <App />
    </UIToggleProvider>
  </CartProvider>
);
