import { useSelector } from 'react-redux';

export const useIsProductInCart = (selectedProductId) => {
  const cartItems = useSelector((state) => state.cart.items);

  return selectedProductId ? selectedProductId in cartItems : false;
};
