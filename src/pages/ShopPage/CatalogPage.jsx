import { classNames } from 'shared/lib/classNames/classNames';
import { PageHeader } from 'widgets/PageHeader/PageHeader';
import { Catalog } from 'widgets/Catalog/';
import * as cls from './CatalogPage.module.scss';

function CatalogPage({ className }) {
  return (
    <div className={classNames(cls.catalogLayout, {}, [className, 'wrapper'])}>
      <PageHeader />
      <Catalog />
    </div>
  );
}

export default CatalogPage;
