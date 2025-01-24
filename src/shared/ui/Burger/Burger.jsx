import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Burger.module.scss';

export function Burger({ isOpen, className, onToggleMenu }) {
  return (
    <button
      type="button"
      onClick={onToggleMenu}
      aria-label="Close"
      className={classNames(cls.burger, { [cls.open]: isOpen }, [className])}
    >
      <span className={classNames(cls.burger__line, {}, [])}></span>
      <span className={classNames(cls.burger__line, {}, [])}></span>
      <span className={classNames(cls.burger__line, {}, [])}></span>
    </button>
  );
}
