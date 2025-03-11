import { classNames } from 'shared/lib/classNames/classNames';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductVariations } from '../ProductVariations/ProductVariations';
import * as cls from './ProductInfo.module.scss';

export function ProductInfo({ product, setVariantId }) {
  if (!product) return <p>Product not found</p>;

  return (
    <div className={classNames(cls.productInfo, {}, [])}>
      <p>{product.brand}</p>
      <h1 className={cls.productInfo__title}>{product.name}</h1>
      <p className={cls.productInfo__description}>{product.description}</p>
      <ProductPrice
        oldPrice={product.oldPrice}
        currentPrice={product.currentPrice}
      />
      <ProductVariations variations={product.variations} setVariantId={setVariantId} />
    </div>
  );
}
