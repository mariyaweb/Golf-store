import { Loader } from 'shared/ui/Loader/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogFilters } from 'features/Filters/ui/CatalogFilters/CatalogFilters';

import { CatalogCardList } from '../CatalogCardList/CatalogCardList';
import * as cls from './Catalog.module.scss';

import { useCatalog } from '../../model/useCatalog';

export function Catalog() {
  const {
    goodsList, goodsLoading, setFilters, loadMoreGoods,
  } = useCatalog();

  return (
    <div className={classNames(cls.catalog, {}, [])}>
      <CatalogFilters setFilters={setFilters} />
      {goodsLoading && goodsList.length === 0 ? (
        <Loader />
      ) : (
        <CatalogCardList goodsList={goodsList} loadMoreGoods={loadMoreGoods} />
      )}
    </div>
  );
}
