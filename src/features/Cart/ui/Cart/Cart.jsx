import { classNames } from 'shared/lib/classNames/classNames';
import { CloseBtn } from 'shared/ui/CloseBtn/CloseBtn';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { CartList } from '../CartList/CartList';
import * as cls from './Cart.module.scss';

export function Cart({ className }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleCart = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const cartList = [
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/clubs/TaylorMade-Hi-Toe-4-Steel-Golf-Wedge-1.jpg',
      name: 'TaylorMade Hi-Toe 4 Steel Golf Wedge',
      attributes: [{ name: 'Color', value: 'Black' }, { name: 'Clothing-size', value: 'xl' }],
      count: 2,
      totalPrice: '18.00',
    },
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/clubs/TaylorMade-Hi-Toe-4-Steel-Golf-Wedge-1.jpg',
      name: 'Hi-Toe 4 Steel Golf Wedge',
      attributes: [{ name: 'Color', value: 'Black' }, { name: 'Clothing-size', value: 'xl' }],
      count: 2,
      totalPrice: '18.00',
    },
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/clubs/TaylorMade-Hi-Toe-4-Steel-Golf-Wedge-1.jpg',
      name: 'Golf Wedge',
      attributes: [{ name: 'Color', value: 'Black' }, { name: 'Clothing-size', value: 'xl' }],
      count: 4,
      totalPrice: '24.00',
    },
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/balls/Volvik-Marvel-4-Ball-plus-marker-Multi-1.jpg',
      name: 'Volvik Marvel 4 Golf Ball Pack with Marker',
      attributes: [{ name: 'Color', value: 'Multi' }],
      count: 4,
      totalPrice: '24.00',
    },
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/balls/Volvik-Marvel-4-Ball-plus-marker-Multi-1.jpg',
      name: 'hhhhVolvik Marvel 54 Golf Ball Pack with Marker',
      attributes: [{ name: 'Color', value: 'Multi' }],
      count: 4,
      totalPrice: '24.00',
    },
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/balls/Volvik-Marvel-4-Ball-plus-marker-Multi-1.jpg',
      name: 'kjjdawdkVolvik Marvel 54 Golf Ball Pack with Marker',
      attributes: [{ name: 'Color', value: 'Multi' }],
      count: 4,
      totalPrice: '24.00',
    },
    {
      image: 'https://raw.githubusercontent.com/mariyaweb/Data-Images/refs/heads/golf-shop-images/goods/balls/Volvik-Marvel-4-Ball-plus-marker-Multi-1.jpg',
      name: 'jjjjVolvik Marvel 54 Golf Ball Pack with Marker',
      attributes: [{ name: 'Color', value: 'Multi' }],
      count: 4,
      totalPrice: '24.00',
    },
  ];

  const totalCartPrice = '28000';

  return (
    <div className={classNames(cls.cart, { [cls.open]: isOpen }, [])}>
      {/*
      кнопка закрыть
      список товаров:
        товар:
           - изображение,
           - название,
           - краткая характеристика: цвет, размер одежды, размер обуви, рука левая/правая
           - количество
           - кнопка удалить товар из корзины
      заказать

       */}
      <div className={cls.cart__header}>
        <h2>Cart</h2>
        <CloseBtn handleClick={toggleCart} />
      </div>
      {cartList.length !== 0
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
