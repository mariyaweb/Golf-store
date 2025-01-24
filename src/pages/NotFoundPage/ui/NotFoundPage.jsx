import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './NotFoundPage.module.scss';

export function NotFoundPage({ className }) {
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
}
