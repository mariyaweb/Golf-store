import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ProductCounter.module.scss';

export const CounterSize = {
  S: 'size_s',
  M: 'size_m',
};

export function ProductCounter(props) {
  const min = 1;
  const max = 500;
  const {
    count,
    setCount,
    className,
    size = CounterSize.M,
  } = props;

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
