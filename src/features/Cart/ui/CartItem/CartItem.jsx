import { classNames } from 'shared/lib/classNames/classNames';
import { ProductCounter, CounterSize } from 'widgets/ProductCounter/ProductCounter';
import { CloseBtn } from 'shared/ui/CloseBtn/CloseBtn';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from 'shared/store/cartSlice';
import * as cls from './CartItem.module.scss';

const AVAILABLE_ATTRIBUTES = {
  'clothing-sizes': 'Clothing Size',
  colors: 'Color',
  hand: 'Hand',
  'shoes-sizes': 'Shoes Size',
};
export function CartItem({ className, item }) {
  const dispatch = useDispatch();

  const attributesArray = useMemo(() => Object.entries(item.attributes), [item.attributes]);
  const totalProductPrice = useSelector(
    (state) => state.cart.items[item.id]?.totalProductPrice,
  )?.toFixed(2) || item.totalProductPrice.toFixed(2);
  return (
    <div className={classNames(cls.cartItem, {}, [className])}>
      <div className={cls.cartItem__imgContainer}>
        <img className={cls.img} src={item.image} alt={item.name} />
      </div>
      <div className={cls.cartItem__info}>
        <h4 className={cls.title}>{item.name}</h4>
        <div className={cls.cartItem__attributes}>
          {attributesArray.map(([key, value]) => (
            <p className={cls.text} key={`${item.name}-${key}`}>
              {`${AVAILABLE_ATTRIBUTES[key]}: ${value}`}
            </p>
          ))}
        </div>
        <ProductCounter
          productId={item.id}
          count={item.quantity}
          className={cls.cartItem__count}
          size={CounterSize.S}
        />
      </div>
      <div className={`${cls.cartItem__info} ${cls.cartItem__price}`}>
        <h4 className={cls.title}>{`${totalProductPrice}$`}</h4>
        <CloseBtn handleClick={() => dispatch(removeFromCart({ id: item.id }))} />
      </div>
    </div>
  );
}
