import { classNames } from 'shared/lib/classNames/classNames';
import { Breadcrumbs } from 'features/Breadcrumbs/ui/Breadcrumbs';
import * as cls from './Title.module.scss';

export function Title({ className }) {
  return (
    <div className={classNames(cls.title__container, {}, [className, 'wrapper'])}>
      <Breadcrumbs className={cls.title__breadcrumbs} />
      <h1>Shop Page</h1>
    </div>
  );
}
