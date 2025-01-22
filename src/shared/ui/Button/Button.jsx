import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Button.module.scss';

export const ButtonSize = {
  M: 'size_m',
  L: 'size_l',
  XL: 'size_xl',
};

export function Button(props) {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.btn, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
