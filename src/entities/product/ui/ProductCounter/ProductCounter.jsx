import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ProductCounter.module.scss';

export function ProductCounter() {
  return (
    <div className={classNames(cls.productCounter, {}, [])}>

    </div>
  );
}
