import { classNames } from 'shared/lib/classNames/classNames';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductVariations } from '../ProductVariations/ProductVariations';
import * as cls from './ProductInfo.module.scss';
import { ProductCounter } from '../ProductCounter/ProductCounter';
import { TotalPrice } from '../TotalPrice/TotalPrice';

export function ProductInfo({
  product, setVariantId, count, setCount,
}) {
  if (!product) return <p>Product not found</p>;
  const totalPrice = (count * product.currentPrice).toFixed(2);
  const totalDiscountPrice = product.oldPrice ? (count * product.oldPrice).toFixed(2) : null;
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
      <div className={cls.productInfo__total}>
        <ProductCounter count={count} setCount={setCount} />
        <TotalPrice
          totalPrice={totalPrice}
          totalDiscountPrice={totalDiscountPrice}
        />
      </div>
    </div>
  );
}
