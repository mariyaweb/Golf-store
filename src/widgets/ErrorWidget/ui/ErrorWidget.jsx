import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import * as cls from './ErrorWidget.module.scss';

export function ErrorWidget({ className }) {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.errorWidget, {}, [className])}>
      <p>Что-то пошло не так</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
}
