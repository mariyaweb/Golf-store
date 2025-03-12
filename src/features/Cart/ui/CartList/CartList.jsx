import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './CartList.module.scss';
import { CartItem } from '../CartItem/CartItem';

export function CartList({ className, cartList }) {
  return (
    <div className={classNames(cls.cartList, {}, [className])}>
      {cartList.map((item) => {
        console.log(item);
        return <CartItem key={item.name} item={item} />;
      })}
    </div>
  );
}
