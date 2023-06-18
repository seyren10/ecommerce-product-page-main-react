import { useContext, useEffect, useRef, useState } from "react";
import { CartContext, uiToggleCtx } from "../context/context";

import styles from "./Cart.module.css";
import deleteIcon from "/images/icon-delete.svg";

// eslint-disable-next-line react/display-name
const Cart = (props) => {
  const { items, removeFromCart } = useContext(CartContext);
  const { toggleCart } = useContext(uiToggleCtx);
  const [appeared, setAppeared] = useState(false);
  const cartRef = useRef(null);

  const isClickInsideCartContainer = (event) => {
    const cartContainer = cartRef.current;
    const { clientX, clientY } = event;
    const { left, right, top, bottom } = cartContainer.getBoundingClientRect();

    return (
      clientX >= left && clientX <= right && clientY >= top && clientY <= bottom
    );
  };

  useEffect(() => {
    const cartCloseHandler = (event) => {
      if (appeared) {
        if (cartRef.current && !isClickInsideCartContainer(event)) {
          toggleCart(false);
        }
      }
    };

    window.addEventListener("click", cartCloseHandler);
    setAppeared(true);
    return () => {
      window.removeEventListener("click", cartCloseHandler);
    };
  }, [appeared, toggleCart]);

  const deleteItemHandler = (id) => {
    removeFromCart(id);
  };

  const itemList = (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div className={`${styles.items} ${styles["p-400"]}`}>
              <img src={item.image} alt="" />
              <div className={styles["item-details"]}>
                <div>{item.name}</div>
                <span>${item.prices.current.toFixed(2)}</span>
                <span>x{item.qty}</span>{" "}
                <span>${item.prices.current * item.qty}</span>
              </div>
              <button
                className={styles["item-delete"]}
                onClick={deleteItemHandler.bind(null, item.id)}
              >
                <img src={deleteIcon}></img>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );

  const emptyCart = (
    <div className={styles["empty-cart"]}>Your cart is empty</div>
  );

  return (
    <div className={styles.container} ref={cartRef}>
      <div className={styles["p-400"]}>Cart</div>
      {items.length !== 0 ? itemList : emptyCart}
      <div className={styles["p-400"]}>
        {items.length !== 0 && (
          <button className={styles.checkout}>Checkout</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
