import { classNames } from '../../../lib/classNames/classNames';
import './Loader.scss';

export function Loader({ className }) {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
