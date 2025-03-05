import { Link } from 'react-router-dom';
import { useBreadcrumbs } from 'shared/lib/hooks/useBreadcrumbs';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Breadcrumbs.module.scss';

export function Breadcrumbs({ className }) {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className={classNames(cls.breadcrumbs, {}, [className])}>
      <ul className={cls.breadcrumbs__list}>
        {breadcrumbs.map((crumb, index, crumbs) => (
          <li key={crumb.path} className={cls.breadcrumbs__item}>
            {index > 0 && <span className={cls.breadcrumbs__divider}>&gt;</span>}
            {
            crumbs.length - 1 === index
              ? <div className={cls.breadcrumbs__current}>{crumb.name}</div>
              : <Link to={crumb.path}>{crumb.name}</Link>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}
