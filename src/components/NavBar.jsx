import { useContext, useState } from "react";
// import CartContext from "../context/cartContext";
import { uiToggleCtx, CartContext } from "../context/context";

import logo from "/images/logo.svg";
import cartIcon from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
import menuIcon from "/images/icon-menu.svg";
import closeIcon from "/images/icon-close.svg";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  const { toggleCart, showCart } = useContext(uiToggleCtx);
  const [showMenu, setShowMenu] = useState(false);

  const showCartHandler = () => {
    toggleCart(!showCart);
  };

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header>
      <nav className={styles["primary-navigation"]}>
        <div className={styles.flex}>
          <button
            className={`${styles["mobile-toggler"]} ${
              showMenu && styles["close-button"]
            }`}
            aria-controls="navigation"
            onClick={showMenuHandler}
          >
            <img src={showMenu ? closeIcon : menuIcon} alt="" />
          </button>
          <img src={logo} alt="" />
        </div>
        {showMenu && (
          <div className={styles.overlay} onClick={showMenuHandler}></div>
        )}
        <ul
          className={`${styles["nav-list"]} ${!showMenu && styles.hide}`}
          id="navigation"
        >
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li className={styles.active}>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className={styles.profile}>
          <button className={styles.cart} onClick={showCartHandler}>
            {cartCount !== 0 && (
              <span className={styles["cart__count"]}>{cartCount}</span>
            )}
            <img src={cartIcon} alt="" />
          </button>
          <div className={styles.avatar}>
            <img src={avatar} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
