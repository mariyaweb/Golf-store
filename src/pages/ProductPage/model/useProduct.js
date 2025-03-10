import { useState, useEffect } from 'react';
import { getProductById } from 'entities/product/api/getProductById';
import { getProductData } from 'entities/product/model/getProductData';

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [variantId, setVariantId] = useState(0);

  useEffect(() => {
    setLoading(true);
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);
        const productData = getProductData(data);
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return {
    product, variantId, setVariantId, loading, error,
  };
};
