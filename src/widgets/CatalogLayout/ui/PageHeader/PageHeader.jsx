import { classNames } from 'shared/lib/classNames/classNames';
import { Breadcrumbs } from 'features/Breadcrumbs/ui/Breadcrumbs';
import * as cls from './PageHeader.module.scss';

export function PageHeader(props) {
  const {
    className,
    titleName,
    pageDescription,
    backgroundImage,
  } = props;
  const headerBgStyle = { 'background-image': `url(${backgroundImage})` };
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
