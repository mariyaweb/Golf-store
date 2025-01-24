import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';

export function AppLink(props) {
  const {
    to,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.appLink, {}, [className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
