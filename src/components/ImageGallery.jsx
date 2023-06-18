import { useContext, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { uiToggleCtx } from "../context/context";
import styles from "./ImageGallery.module.css";

const imageData = [
  {
    id: 1,
    imageSrc: "/images/image-product-1.jpg",
    imageThumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    imageSrc: "/images/image-product-2.jpg",
    imageThumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    imageSrc: "/images/image-product-3.jpg",
    imageThumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    imageSrc: "/images/image-product-4.jpg",
    imageThumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

const ImageGallery = (props) => {
  const [images] = useState(imageData);
  const [media] = useMediaQuery("(min-width: 35em)");
  const [smallMedia] = useMediaQuery("(max-width: 35em)");
  const { toggleLightboxGallery, showLightboxGallery } =
    useContext(uiToggleCtx);
  const [activeImg, setActiveImg] = useState(0);

  const handleShowLightBoxGallery = () => {
    //only show lighboxgallery on big device
    if (media) {
      toggleLightboxGallery(true);
    }
  };

  const handlePrev = () => {
    if (activeImg > 0) {
      setActiveImg((prev) => {
        return --prev;
      });
    } else setActiveImg(images.length - 1);
  };

  const handleNext = () => {
    if (activeImg < images.length - 1) {
      setActiveImg((prev) => {
        return ++prev;
      });
    } else setActiveImg(0);
  };

  const prevBtn = () => {
    if (props.usedByLightbox || smallMedia) {
      return (
        <button className={`${styles["btn-prev"]}`} onClick={handlePrev}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      );
    }
  };

  const nextBtn = () => {
    if (props.usedByLightbox || smallMedia) {
      return (
        <button className={`${styles["btn-next"]}`} onClick={handleNext}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      );
    }
  };
  return (
    <div className={props.className || styles.container}>
      {prevBtn()}

      <img
        src={images[activeImg].imageSrc}
        alt=""
        className={styles["display-img"]}
        onClick={handleShowLightBoxGallery}
      />
      {nextBtn()}

      <ul>
        {images.map((image, id) => {
          return (
            <li
              key={image.id}
              onClick={() => setActiveImg(id)}
              className={`${id === activeImg && styles.active}`}
            >
              <img
                src={image.imageThumbnail}
                alt=""
                className={styles["thumbnail-img"]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
