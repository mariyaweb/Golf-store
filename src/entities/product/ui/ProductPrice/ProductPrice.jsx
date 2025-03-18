import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ProductPrice.module.scss';

export function ProductPrice({ currentPrice, oldPrice }) {
  return (
    <div className={classNames(cls.productPrice, {}, [])}>
      <div className={cls.productPrice__currentPrice}>{`$${currentPrice}`}</div>
      {oldPrice ? <div className={cls.productPrice__oldPrice}>{`$${oldPrice}`}</div> : null}
    </div>
  );
}
