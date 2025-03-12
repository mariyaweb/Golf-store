import { Breadcrumbs } from 'features/Breadcrumbs/ui/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductGallery } from 'entities/product/ui/ProductGallery/ProductGallery';
import { ProductInfo } from 'entities/product/ui/ProductInfo/ProductInfo';
import { useProduct } from './model/useProduct';
import * as cls from './ProductPage.module.scss';
import { Loader } from '../../shared/ui/Loader/ui/Loader';

function ProductPage() {
  const { productId } = useParams();
  const {
    product, variantId, setVariantId, loading, count, setCount,
  } = useProduct(productId);
  console.log(product);

  return (
    <div className={classNames('', {}, ['wrapper'])}>
      <Breadcrumbs name={product?.name || 'Product'} className={cls.productPage__breadcrumbs} />
      <div className={cls.productPage__product}>
        {loading ? <Loader /> : <ProductGallery product={product} variantId={variantId} />}
        {loading ? <Loader /> : (
          <ProductInfo
            product={product}
            setVariantId={setVariantId}
            count={count}
            setCount={setCount}
          />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
