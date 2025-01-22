import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import * as cls from './Navbar.module.scss';

export function Navbar({ className }) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink to="/">Main</AppLink>
      <AppLink to="/about">About</AppLink>
    </div>
  );
}
