import { lazy } from 'react';

const ProductPageAsync = lazy(() => import('./ProductPage'));

export default ProductPageAsync;
