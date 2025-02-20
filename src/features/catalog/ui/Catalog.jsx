import { useState, useEffect } from 'react';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { extractProductData } from '../model/extractProductData';
import { getGoods } from '../services/getGoods';
import { CatalogCardList } from './CatalogCardList/CatalogCardList';

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
    loading ? <Loader /> : <CatalogCardList goodsList={goodsList} />
  );
}
export default Catalog;
