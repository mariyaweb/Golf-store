import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Title.module.scss';

export function Title({ className }) {
  return (
    <div className={classNames(cls.title, {}, [className])}>

    </div>
  );
}
