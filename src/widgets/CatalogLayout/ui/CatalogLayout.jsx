import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { categories } from 'entities/Category/model/categories';
import * as cls from './CatalogLayout.module.scss';
import { PageHeader } from './PageHeader/PageHeader';

export function CatalogLayout({ className }) {
  const { category } = useParams();
  const currentPage = categories.find((c) => c.slug === category) || categories[0];

  return (
    <div className={classNames(cls.catalogLayout, {}, [className, 'wrapper'])}>
      <PageHeader
        titleName={currentPage.title}
        pageDescription={currentPage.description}
        backgroundImage={currentPage.bgImage}
      />
    </div>
  );
}
