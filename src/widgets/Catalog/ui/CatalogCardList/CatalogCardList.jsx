import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { CatalogCard } from 'entities/CatalogCard/CatalogCard';
import * as cls from './CatalogCardList.module.scss';

export function CatalogCardList({ className, goodsList, loadMoreGoods }) {
  console.log(goodsList);
  return (
    <div className={classNames(cls.goods, {}, [className, 'goods__wrapper'])}>
      {goodsList.map((product) => (
        <CatalogCard product={product} key={product.id} />
      ))}
      <Button className={cls.goods__showMore} onClick={loadMoreGoods}>Show more</Button>
    </div>
  );
}
