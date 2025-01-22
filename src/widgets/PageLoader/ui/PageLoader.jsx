import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import * as cls from './PageLoader.module.scss';

export function PageLoader({ className }) {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
}
