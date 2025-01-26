import { classNames } from 'shared/lib/classNames/classNames';
import VisaImg from 'widgets/assets/payments/visa.png';
import AmericanImg from 'widgets/assets/payments/american-express.png';
import MasterCardImg from 'widgets/assets/payments/mastercard.png';
import StripeImg from 'widgets/assets/payments/stripe.png';
import PayPalImg from 'widgets/assets/payments/paypal.png';
import ApplePayImg from 'widgets/assets/payments/applepay.png';
import * as cls from './FooterBottom.module.scss';

export function FooterBottom({ className }) {
  return (
    <div className={classNames(cls.footerBottom, {}, [className])}>
      <p className={cls.footerBottom__copyright}>Copyright © 2025 3legant. All rights reserved</p>
      <ul className={cls.footerBottom__payments}>
        <li className={cls.footerBottom__payment}><img src={VisaImg} alt="Visa" /></li>
        <li className={cls.footerBottom__payment}><img src={AmericanImg} alt="American express" /></li>
        <li className={cls.footerBottom__payment}><img src={MasterCardImg} alt="MasterCard" /></li>
        <li className={cls.footerBottom__payment}><img src={StripeImg} alt="Stripe" /></li>
        <li className={cls.footerBottom__payment}><img src={PayPalImg} alt="PayPal" /></li>
        <li className={cls.footerBottom__payment}><img src={ApplePayImg} alt="Apple Pay" /></li>
      </ul>
    </div>
  );
}
