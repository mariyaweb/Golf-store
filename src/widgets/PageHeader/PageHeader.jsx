import { classNames } from 'shared/lib/classNames/classNames';
import { Breadcrumbs } from 'features/Breadcrumbs/ui/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { categories } from 'entities/Category/model/categories';
import * as cls from './PageHeader.module.scss';

export function PageHeader(props) {
  const { category } = useParams();
  const currentPage = categories.find((c) => c.slug === category) || categories[0];

  const titleName = currentPage.title;
  const pageDescription = currentPage.description;
  const backgroundImage = currentPage.bgImage;
  const headerBgStyle = { backgroundImage: `url(${backgroundImage})` };
  const { className } = props;

  return (
    <div
      className={classNames(cls.pageHeader__container, {}, [className, 'wrapper'])}
      style={headerBgStyle}
    >
      <Breadcrumbs className={cls.pageHeader__breadcrumbs} />
      <h1 className={cls.pageHeader__title}>{titleName}</h1>
      <p className={cls.pageHeader__description}>{pageDescription}</p>
    </div>
  );
}
