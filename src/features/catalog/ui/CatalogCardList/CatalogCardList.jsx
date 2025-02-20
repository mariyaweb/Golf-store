import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './CatalogCardList.module.scss';
import { CatalogCard } from '../CatalogCard/CatalogCard';

export function CatalogCardList({ className, goodsList }) {
  console.log(goodsList);
  return (
    <div className={classNames(cls.goods, {}, [className, 'goods__wrapper'])}>
      {goodsList.map((product) => (
        <CatalogCard product={product} key={product.id} />
      ))}
    </div>
  );
}
