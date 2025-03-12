import { classNames } from 'shared/lib/classNames/classNames';
import { ProductCounter, CounterSize } from 'widgets/ProductCounter/ProductCounter';
import { CloseBtn } from 'shared/ui/CloseBtn/CloseBtn';
import * as cls from './CartItem.module.scss';

export function CartItem({ className, item }) {
  const removeFromCart = () => {
    console.log('remove');
  };
  return (
    <div className={classNames(cls.cartItem, {}, [className])}>
      <div className={cls.cartItem__imgContainer}>
        <img className={cls.img} src={item.image} alt={item.name} />
      </div>
      <div className={cls.cartItem__info}>
        <h4 className={cls.title}>{item.name}</h4>
        <div className={cls.cartItem__attributes}>
          {item.attributes.map((attribute) => {
            console.log(attribute);
            return <p className={cls.text}>{`${attribute.name}: ${attribute.value}`}</p>;
          })}
        </div>
        <ProductCounter count={item.count} className={cls.cartItem__count} size={CounterSize.S} />
      </div>
      <div className={`${cls.cartItem__info} ${cls.cartItem__price}`}>
        <h4 className={cls.title}>{`${item.totalPrice}$`}</h4>
        <CloseBtn handleClick={removeFromCart} />
      </div>
    </div>
  );
}
