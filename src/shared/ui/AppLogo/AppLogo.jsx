import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import * as cls from './AppLogo.module.scss';

export function AppLogo({ className, theme }) {
  return (
    <AppLink
      to="/"
      className={classNames(cls.logo, { [cls.light]: theme === 'light' }, [className])}
    >
      3legant
      <span className={cls.logo_dot}>.</span>
    </AppLink>
  );
}
