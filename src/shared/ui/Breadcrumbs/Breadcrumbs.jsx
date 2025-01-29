import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Breadcrumbs.module.scss';

export function Breadcrumbs({ className }) {
  return (
    <div className={classNames(cls.breadcrumbs, {}, [className])}>
      some txt
    </div>
  );
}
