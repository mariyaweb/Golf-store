import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ShopPage.module.scss';
import { Title } from './ui/Title/Title';

function CatalogPage({ className }) {
  return (
    <div className={classNames(cls.shopPage, {}, [className, 'wrapper'])}>
      <Title />
    </div>
  );
}

export default CatalogPage;
