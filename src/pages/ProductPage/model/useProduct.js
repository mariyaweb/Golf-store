import { useState, useEffect, useMemo } from 'react';
import { getProductById } from 'entities/product/api/getProductById';
import { getProductData } from 'entities/product/model/getProductData';
import { useSelector } from 'react-redux';
import { createProductKey } from './createProductKey';

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [variantId, setVariantId] = useState(0);
  const [count, setCount] = useState(1);
  const [selectedProductAttributes, setSelectedProductAttributes] = useState({});
  const selectedProductId = useMemo(
    () => createProductKey(product?.name, selectedProductAttributes),
    [product?.name, selectedProductAttributes],
  );
  const cartItem = useSelector((state) => state.cart.items[selectedProductId]);

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

  useEffect(() => {
    setCount(1);
  }, [selectedProductAttributes]);

  useEffect(() => {
    if (cartItem) {
      setCount(cartItem.quantity);
    }
  }, [cartItem]);

  return {
    product,
    variantId,
    setVariantId,
    loading,
    error,
    count,
    setCount,
    selectedProductAttributes,
    setSelectedProductAttributes,
    selectedProductId,
  };
};
