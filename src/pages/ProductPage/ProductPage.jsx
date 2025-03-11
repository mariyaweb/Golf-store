import { Breadcrumbs } from 'features/Breadcrumbs/ui/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductGallery } from 'entities/product/ui/ProductGallery/ProductGallery';
import { ProductInfo } from 'entities/product/ui/ProductInfo/ProductInfo';
import { useProduct } from './model/useProduct';
import * as cls from './ProductPage.module.scss';

function ProductPage() {
  const { productId } = useParams();
  const {
    product, variantId, setVariantId, loading, error,
  } = useProduct(productId);
  console.log(product);

  return (
    <div className={classNames(cls.productPage, {}, ['wrapper'])}>
      <Breadcrumbs name={product?.name || 'Product'} className={cls.productPage__breadcrumbs} />
      <div className={cls.productPage__product}>
        <ProductGallery product={product} variantId={variantId} />
        <ProductInfo product={product} setVariantId={setVariantId} />
      </div>
    </div>
  );
}

export default ProductPage;
