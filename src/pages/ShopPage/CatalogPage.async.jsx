import { lazy } from 'react';

const CatalogPageAsync = lazy(() => import('./Catalog'));

export default CatalogPageAsync;
