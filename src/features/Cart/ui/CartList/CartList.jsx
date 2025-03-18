import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import * as cls from './CartList.module.scss';
import { CartItem } from '../CartItem/CartItem';

export function CartList({ className, cartList }) {
  const cartListArr = useMemo(() => Object.values(cartList));

  return (
    <div className={classNames(cls.cartList, {}, [className])}>
      {cartListArr.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
}
