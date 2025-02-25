import { useState, useEffect } from 'react';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { extractProductData } from '../model/extractProductData';
import { getGoods } from '../services/getGoods';
import { CatalogCardList } from './CatalogCardList/CatalogCardList';
import * as cls from './Catalog.module.scss';
import { CatalogFilters } from './CatalogFilters/CatalogFilters';

function Catalog() {
  const [loading, setLoading] = useState(true);

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGoods()
      .then(setGoods)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const goodsList = extractProductData(goods);
  console.log(goodsList);
  return (
    <div className={classNames(cls.catalog, {}, [])}>
      <CatalogFilters />
      {loading ? <Loader /> : <CatalogCardList goodsList={goodsList} />}
    </div>

  );
}
export default Catalog;
