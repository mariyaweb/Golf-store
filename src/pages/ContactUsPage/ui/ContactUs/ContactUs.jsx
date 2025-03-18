import { classNames } from 'shared/lib/classNames/classNames';
import StoreImg from 'widgets/assets/icons/store.svg';
import PhoneImg from 'widgets/assets/icons/phone.svg';
import MailImg from 'widgets/assets/icons/mail.svg';
import * as cls from './ContactUs.module.scss';

export function ContactUs() {
  return (
    <div className={cls.contactUs}>
      <h2 className={cls.contactUs__title}>Contact Us</h2>
      <ul className={cls.contactUs__list}>
        <li className={cls.contactUs__item}>
          <StoreImg className={cls.contactUs__icon} />
          <h3 className={cls.contactUs__itemTitle}>Address</h3>
          <p>
            234 Hai Trieu, Ho Chi Minh City,
            Viet Nam
          </p>
        </li>
        <li className={cls.contactUs__item}>
          <PhoneImg className={cls.contactUs__icon} />
          <h3 className={cls.contactUs__itemTitle}>Address</h3>
          <a href="”tel:+84234567890”">
            +84 234 567 890
          </a>
        </li>
        <li className={cls.contactUs__item}>
          <PhoneImg className={cls.contactUs__icon} />
          <h3 className={cls.contactUs__itemTitle}>Email</h3>
          <a href="mailto:hello@3legant.com">
            hello@3legant.com
          </a>
        </li>
      </ul>
    </div>
  );
}
