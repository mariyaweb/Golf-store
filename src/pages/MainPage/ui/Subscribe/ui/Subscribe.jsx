import { classNames } from 'shared/lib/classNames/classNames';
import EmailImg from 'widgets/assets/icons/email.svg';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { validateEmail } from 'shared/ui/Input/helpers';
import * as cls from './Subscribe.module.scss';

export function Subscribe({ className }) {
  const [email, setEmail] = useState('');
  const [isVaild, setIsVaild] = useState(true);
  const onSubscribeHandler = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsVaild(true);
      setEmail('');
    } else {
      setIsVaild(false);
    }
  };
  return (
    <section className={classNames(cls.subscribe, {}, [className])}>
      <div className={classNames(cls.subscribe__wrapper, {}, ['wrapper'])}>
        <h2 className={cls.subscribe__title}>Join Our Newsletter</h2>
        <p className={cls.subscribe__subTitle}>Sign up for deals, new products and promotions</p>
        <form onSubmit={onSubscribeHandler}>
          <div className={cls.input__container}>
            <EmailImg />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className={cls.input__input} placeholder="Enter your email" />
            <Button type="submit" className={cls.input__btn}>Subscribe</Button>
          </div>
          <div className={cls.subscribe__error}>
            {
              !isVaild
              && (
              <p>
                Please verify and enter a correct email address.
              </p>
              )
              }
          </div>
        </form>
      </div>
    </section>
  );
}
