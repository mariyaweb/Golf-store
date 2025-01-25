import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Footer.module.scss';
import { FooterTop } from '../FooterTop/FooterTop';

export function Footer({ className }) {
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <div className={classNames(cls.footer__wrapper, {}, ['wrapper'])}>
        <FooterTop />
      </div>
    </footer>
  );
}
