import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Footer.module.scss';
import { FooterTop } from '../FooterTop/FooterTop';
import { FooterBottom } from '../FooterBottom/FooterBottom';

export function Footer({ className }) {
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <div className={classNames(cls.footer__wrapper, {}, ['wrapper'])}>
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
}
