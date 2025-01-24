import { classNames } from 'shared/lib/classNames/classNames';
import AccountIcon from 'widgets/assets/icons/main-user.svg';
import CartIcon from 'widgets/assets/icons/main-cart.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLogo } from 'shared/ui/AppLogo/AppLogo';
import { Burger } from 'shared/ui/Burger/Burger';
import { useState } from 'react';
import * as cls from './Header.module.scss';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className={classNames(cls.header, {}, [])}>
      <div className={classNames(cls.header__wrapper, {}, ['wrapper'])}>
        <AppLogo />
        <nav className={classNames(cls.nav__container, { [cls.open]: isOpen }, [])}>
          <ul className={classNames(cls.nav__links, {}, [])}>
            <li>
              <AppLink to="/">Home</AppLink>
            </li>
            <li>
              <AppLink to="/shop">Shop</AppLink>
            </li>
            <li>
              <AppLink to="/contacts">Contacts</AppLink>
            </li>
          </ul>
        </nav>
        <div className={classNames(cls.header__icons, {}, [])}>
          <div className={classNames(cls.header__account, {}, [])}><AccountIcon /></div>
          <div className={classNames(cls.header__cart, {}, [])}>
            <CartIcon />
            <span className={classNames(cls.cart__counter, {}, [])}>245</span>
          </div>
        </div>
        <Burger onToggleMenu={onToggleMenu} isOpen={isOpen} />
      </div>
    </header>
  );
}
