import {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogCardList } from './CatalogCardList/CatalogCardList';
import * as cls from './Catalog.module.scss';
import { CatalogFilters } from './CatalogFilters/CatalogFilters';
import { getFiltredGoods } from '../services/getFiltredGoods';
import { extractProductDataFiltered } from '../model/extractProductDataFiltered';

function Catalog() {
  const [goodsLoading, setGoodsLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState([]);
  const [prevFilters, setPrevFilters] = useState([]);
  const GOODS_LIMIT = 15;

  console.log(filters);

  useEffect(() => {
    console.log('➿ Работает useEffect');
    const fetchGoods = async () => {
      setGoodsLoading(true);

      const filtersChanged = JSON.stringify([...filters]
        .sort()) !== JSON.stringify([...prevFilters].sort());
      const newOffset = filtersChanged ? 0 : offset;

      try {
        const newGoods = await getFiltredGoods(GOODS_LIMIT, newOffset, filters);

        setGoods(filtersChanged ? newGoods : [...goods, ...newGoods]);

        if (filtersChanged) {
          setOffset(GOODS_LIMIT);
        } else {
          setOffset(newOffset + GOODS_LIMIT);
        }

        setPrevFilters(filters);
      } catch (error) {
        console.error(error);
      } finally {
        setGoodsLoading(false);
      }
    };

    fetchGoods();
  }, [filters]);

  const loadMoreGoods = useCallback(async () => {
    if (goodsLoading) return;
    setGoodsLoading(true);
    console.log('🟣 Работает loadMoreGoods');
    try {
      const newGoods = await getFiltredGoods(GOODS_LIMIT, offset, filters);
      setGoods((prev) => [...prev, ...newGoods]);
      setOffset((prevOffset) => prevOffset + GOODS_LIMIT);
    } catch (error) {
      console.error(error);
    } finally {
      setGoodsLoading(false);
    }
  }, [offset, filters, goodsLoading]);

  const goodsList = useMemo(() => extractProductDataFiltered(goods), [goods]);
  console.log(goodsList);
  return (
    <div className={classNames(cls.catalog, {}, [])}>
      <CatalogFilters setFilters={setFilters} />
      {goodsLoading && goods.length === 0 ? (
        <Loader />
      ) : (
        <CatalogCardList goodsList={goodsList} loadMoreGoods={loadMoreGoods} />
      )}
    </div>

  );
}
export default Catalog;
