import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './CloseBtn.module.scss';

export function CloseBtn({ className, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Close"
      className={classNames(cls.close, { }, [className])}
    >
      <span className={classNames(cls.close__line, {}, [])}></span>
      <span className={classNames(cls.close__line, {}, [])}></span>
    </button>
  );
}
