import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import ArrowIcon from 'widgets/assets/icons/dropdown-arrow-white.svg';
import { useState } from 'react';
import * as cls from './NavigationLinks.module.scss';
import { Accordion } from '../Accordion/Accordion';

export function NavigationLinks({ className }) {
  const linkStyle = cls.footerNavigation__link;

  return (
    <div className={classNames(cls.footerNavigation, {}, [className])}>
      <Accordion
        title="Page"
        className={cls.footerNavigation__item}
        titleStyle={cls.footerNavigation__title}
        listStyle={cls.footerNavigation__list}
        arrowStyle={cls.footerNavigation__arrow}
      >
        <li><AppLink to="/" className={linkStyle}>Home</AppLink></li>
        <li><AppLink to="/shop" className={linkStyle}>Shop</AppLink></li>
        <li><AppLink to="/contacts" className={linkStyle}>Contacts</AppLink></li>
      </Accordion>
      <Accordion
        title="Info"
        className={cls.footerNavigation__item}
        titleStyle={cls.footerNavigation__title}
        listStyle={cls.footerNavigation__list}
        arrowStyle={cls.footerNavigation__arrow}
      >
        <li><AppLink to="/policy" className={linkStyle}>Policy</AppLink></li>
        <li><AppLink to="/refund" className={linkStyle}>Return & Refund</AppLink></li>
        <li><AppLink to="/support" className={linkStyle}>Support</AppLink></li>
        <li><AppLink to="/faq" className={linkStyle}>FAQs</AppLink></li>
      </Accordion>
      <Accordion
        title="Office"
        className={cls.footerNavigation__item}
        titleStyle={cls.footerNavigation__title}
        listStyle={cls.footerNavigation__list}
        arrowStyle={cls.footerNavigation__arrow}
      >
        <li className={cls.footerNavigation__text}>
          43111 Hai Trieu street,
          <br />
          District 1, HCMC
          <br />
          Vietnam
        </li>
        <li>
          <a
            className={linkStyle}
            href="tel:84-756-3237"
          >
            84-756-3237
          </a>
        </li>
      </Accordion>
    </div>
  );
}
