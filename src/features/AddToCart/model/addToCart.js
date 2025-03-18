import { store } from 'shared/store';
import { addToCart as addToCartAction } from 'shared/store/cartSlice';

export const addToCart = (id, name, attributes, quantity, price, image) => {
  const product = {
    id,
    name,
    attributes,
    quantity,
    price,
    image,
  };

  store.dispatch(addToCartAction(product));
};
