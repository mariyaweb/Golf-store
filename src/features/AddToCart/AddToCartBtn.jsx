import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AddToCartBtn.module.scss';
import { addToCart } from './model/addToCart';

export function AddToCartBtn({
  id, name, attributes, quantity, price, image,
}) {
  return (
    <button
      className={classNames(cls.addToCartBtn, {}, [])}
      onClick={() => addToCart(id, name, attributes, quantity, price, image)}
      type="button"
    >
      Add to Cart
    </button>
  );
}
