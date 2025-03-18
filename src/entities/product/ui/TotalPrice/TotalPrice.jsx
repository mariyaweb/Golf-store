import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './TotalPrice.module.scss';

export function TotalPrice({ totalPrice, totalDiscountPrice }) {
  return (
    <div className={classNames(cls.totalPrice, {}, [])}>
      <p className={cls.totalPrice__current}>
        $
        {totalPrice}
      </p>
      {totalDiscountPrice && (
      <p className={cls.totalPrice__old}>
        $
        {totalDiscountPrice}
      </p>
      )}
    </div>
  );
}
