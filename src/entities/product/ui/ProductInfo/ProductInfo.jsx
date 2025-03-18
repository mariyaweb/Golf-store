import { classNames } from 'shared/lib/classNames/classNames';
import { AddToCartBtn } from 'features/AddToCart/AddToCartBtn';
import { ProductCounter } from 'widgets/ProductCounter/ProductCounter';
import { Button } from 'shared/ui/Button/Button';
import { useIsProductInCart } from 'features/Cart/lib/useIsProductInCart';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductVariations } from '../ProductVariations/ProductVariations';
import * as cls from './ProductInfo.module.scss';

import { TotalPrice } from '../TotalPrice/TotalPrice';
import { ProductHeader } from '../ProductHeader/ProductHeader';

export function ProductInfo({
  product,
  variantId,
  setVariantId,
  count,
  setCount,
  selectedProductAttributes,
  setSelectedProductAttributes,
  selectedProductId,
}) {
  if (!product) return <p>Product not found</p>;
  const totalPrice = (count * product.currentPrice).toFixed(2);
  const totalDiscountPrice = product.oldPrice ? (count * product.oldPrice).toFixed(2) : null;
  const { brand, name, description } = product;
  const productIntoCart = useIsProductInCart(selectedProductId);

  return (
    <div className={classNames(cls.productInfo, {}, [])}>
      <ProductHeader
        className={cls.productInfo__header}
        brand={brand}
        name={name}
        description={description}
      />
      <p className={cls.productInfo__description}>{description}</p>
      <ProductPrice
        oldPrice={product.oldPrice}
        currentPrice={product.currentPrice}
      />
      <ProductVariations
        variations={product.variations}
        setVariantId={setVariantId}
        selectedProductAttributes={selectedProductAttributes}
        setSelectedProductAttributes={setSelectedProductAttributes}
      />
      <div className={cls.productInfo__total}>
        <ProductCounter count={count} setCount={setCount} productId={selectedProductId} />
        <TotalPrice
          totalPrice={totalPrice}
          totalDiscountPrice={totalDiscountPrice}
        />
      </div>
      {
        productIntoCart
          ? <Button className={cls.productInfo__addedBtn}>Already added to the cart</Button>
          : (
            <AddToCartBtn
              name={name}
              attributes={selectedProductAttributes}
              quantity={count}
              price={product.currentPrice}
              id={selectedProductId}
              image={product.images[variantId][0]}
            />
          )
      }

    </div>
  );
}
