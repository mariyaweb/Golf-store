import { classNames } from 'shared/lib/classNames/classNames';
import { CloseBtn } from 'shared/ui/CloseBtn/CloseBtn';
import { Button } from 'shared/ui/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from 'shared/store/cartSlice';
import { CartList } from '../CartList/CartList';
import * as cls from './Cart.module.scss';

export function Cart() {
  const cartList = useSelector((state) => state.cart.items);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isCartOpen);
  const totalCartPrice = Number(cartPrice).toFixed(2);

  return (
    <div className={classNames(cls.cart, { [cls.open]: isOpen }, [])}>
      <div className={cls.cart__header}>
        <h2>Cart</h2>
        <CloseBtn handleClick={() => dispatch(toggleCart())} />
      </div>
      { Object.keys(cartList).length !== 0
        ? <CartList cartList={cartList} />
        : <p>There are no items in your cart yet</p>}
      <div className={cls.cart__totalPrice}>
        <p>Total:</p>
        <p>{`${totalCartPrice}$`}</p>
      </div>
      <Button className={cls.cart__btn}>Place Order</Button>
    </div>
  );
}
