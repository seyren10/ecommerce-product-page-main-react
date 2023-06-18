import { useContext, useState } from "react";
import { CartContext } from "../context/context";
import styles from "./ProductDetails.module.css";

import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";

const ProductControls = () => {
  const [value, setValue] = useState(0);
  const { addToCart } = useContext(CartContext);

  const sampleProduct = {
    id: Math.random(),
    image: "/images/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    prices: {
      current: 125,
      discount: 50,
      old: 250,
    },
  };

  const addToCartHandler = (val) => {
    if (val > 0) addToCart({ ...sampleProduct, qty: val });
  };

  const minusValue = () => {
    setValue((prev) => {
      if (prev !== 0) return --prev;
      else return 0;
    });
  };

  const addValue = () => {
    setValue((prev) => {
      return ++prev;
    });
  };
  return (
    <div className={styles.controls}>
      <div className={styles["controls__amount"]}>
        <button data-minus onClick={minusValue}>
          <img src={minusIcon} alt="" />
        </button>
        <span>{value}</span>
        <button data-plus onClick={addValue}>
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <button
        className={styles["controls__add-to-cart"]}
        onClick={addToCartHandler.bind(null, value)}
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
          />
        </svg>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles.company}>Sneaker Company</div>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <div className={styles["price-list"]}>
        <h2 className={styles.price}>$125.00</h2>
        <span className={styles.discount}>50%</span>
        <span className={styles["old-price"]}>$250.00</span>
      </div>

      <ProductControls />
    </section>
  );
};

export default ProductDetails;
