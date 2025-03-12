import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ProductCounter.module.scss';

export function ProductCounter({ count, setCount }) {
  const min = 1;
  const max = 500;

  const decr = () => {
    if (count > min) {
      const newValue = count - 1;
      setCount(newValue);
    }
  };

  const incr = () => {
    if (count < max) {
      const newValue = count + 1;
      setCount(newValue);
    }
  };

  return (
    <div className={classNames(cls.productCounter, {}, [])}>
      <button
        className={classNames(
          cls.productCounter__btn,
          { [cls.disabled]: count === min },
          [],
        )}
        onClick={decr}
        type="button"
      >
        -
      </button>
      <div className={cls.productCounter__value}>{count}</div>
      <button
        className={classNames(
          cls.productCounter__btn,
          { [cls.disabled]: count === max },
          [],
        )}
        onClick={incr}
        type="button"
      >
        +
      </button>
    </div>
  );
}
