import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { useIsProductInCart } from 'features/Cart/lib/useIsProductInCart';
import { updateQuantity } from 'shared/store/cartSlice';
import * as cls from './ProductCounter.module.scss';

export const CounterSize = {
  S: 'size_s',
  M: 'size_m',
};

export function ProductCounter(props) {
  const dispatch = useDispatch();
  const min = 1;
  const max = 500;

  const {
    productId,
    count,
    setCount,
    className,
    size = CounterSize.M,
  } = props;

  const productInCart = useIsProductInCart(productId);

  const decr = () => {
    if (count > min) {
      if (productInCart) {
        dispatch(updateQuantity({ productId, quantity: count - 1 }));
      } else {
        const newValue = count - 1;
        setCount(newValue);
      }
    }
  };

  const incr = () => {
    if (count < max) {
      if (productInCart) {
        dispatch(updateQuantity({ productId, quantity: count + 1 }));
      } else {
        const newValue = count + 1;
        setCount(newValue);
      }
    }
  };

  return (
    <div className={classNames(cls.productCounter, {}, [className])}>
      <button
        className={classNames(
          cls.productCounter__btn,
          { [cls.disabled]: count === min },
          [cls[size]],
        )}
        onClick={decr}
        type="button"
      >
        -
      </button>
      <div className={classNames(cls.productCounter__value, {}, [cls[size]])}>{count}</div>
      <button
        className={classNames(
          cls.productCounter__btn,
          { [cls.disabled]: count === max },
          [cls[size]],
        )}
        onClick={incr}
        type="button"
      >
        +
      </button>
    </div>
  );
}
