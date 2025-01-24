import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import * as cls from './AppLogo.module.scss';

export function AppLogo({ className }) {
  return (
    <AppLink to="/" className={cls.logo}>
      3legant
      <span className={cls.logo_dot}>.</span>
    </AppLink>
  );
}
