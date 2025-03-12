import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AddToCart.module.scss';

export function AddToCart() {
  return (
    <button
      className={classNames(cls.addToCart, {}, [])}
      type="button"
    >
      Add to Cart
    </button>
  );
}
