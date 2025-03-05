import {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { getFiltredGoods } from 'shared/api/products/getFiltredGoods';
import { extractProductDataFiltered } from '../lib/extractProductDataFiltered';

const GOODS_LIMIT = 15;

export function useCatalog() {
  const [goodsLoading, setGoodsLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState([]);
  const [prevFilters, setPrevFilters] = useState([]);
  const [lengthNewGoods, setLengthNewGoods] = useState(0);

  useEffect(() => {
    console.log('➿ Работает useEffect');
    const fetchGoods = async () => {
      setGoodsLoading(true);

      const filtersChanged = JSON.stringify([...filters]
        .sort()) !== JSON.stringify([...prevFilters].sort());
      const newOffset = filtersChanged ? 0 : offset;

      try {
        const newGoods = await getFiltredGoods(GOODS_LIMIT, newOffset, filters);
        setLengthNewGoods(newGoods.length);
        setGoods(filtersChanged ? newGoods : [...goods, ...newGoods]);
        setOffset(filtersChanged ? GOODS_LIMIT : newOffset + GOODS_LIMIT);
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
      setLengthNewGoods(newGoods.length);
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

  console.log('🔴useCatalog:');
  console.log(filters);
  return {
    goodsList,
    goodsLoading,
    lengthNewGoods,
    filters,
    setFilters,
    loadMoreGoods,
  };
}
