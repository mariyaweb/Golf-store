import { classNames } from 'shared/lib/classNames/classNames';
import {
  useState, useMemo, useEffect, useRef,
} from 'react';
import * as cls from './ProductGallery.module.scss';

export function ProductGallery({ product, variantId }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);

  const images = useMemo(() => {
    if (!product) return [];
    return product.images[variantId] || [];
  }, [product, variantId]);

  const imgsLength = images.length;
  const scrollable = imgsLength > 2;

  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnails = thumbnailRef.current;
      const thumbnailWidth = thumbnails.children[0]?.offsetWidth || 0;
      const position = currentIndex === 0 ? 0 : currentIndex * thumbnailWidth + 20;
      thumbnails.scrollTo({ left: position, behavior: 'smooth' });
    }
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgsLength);
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgsLength) % imgsLength);
  };

  if (!imgsLength) return null;

  return (
    <div className={classNames(cls.productGallery, {}, [])}>
      <div className={cls.labels}>
        {product.isNew && <span className={[cls.labelNew]}>NEW</span>}
        {product.discount && (
        <span className={cls.labelSale}>
          {product.discount}
          %
        </span>
        )}
      </div>

      <div className={cls.mainImageContainer}>
        <img
          className={cls.mainImage}
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
        />
        <div className={cls.arrows}>
          <button
            onClick={movePrev}
            className={`${cls.arrow} ${cls.arrowLeft}`}
            type="button"
            aria-label="Left"
          >
          </button>
          <button
            onClick={moveNext}
            className={`${cls.arrow} ${cls.arrowRight}`}
            type="button"
            aria-label="Right"
          >
          </button>
        </div>
      </div>
      <div
        className={classNames(cls.thumbnailContainer, { [cls.scroll]: scrollable }, [])}
        ref={thumbnailRef}
      >
        {images.map((img, index) => (
          <button
            key={img}
            className={classNames(cls.thumbnail, { [cls.current]: index === currentIndex }, [])}
            onClick={() => setCurrentIndex(index)}
            type="button"
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={cls.thumbnailImg}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
