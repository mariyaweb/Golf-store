import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import * as cls from './MainScreen.module.scss';

export function MainScreen({ className }) {
  return (
    <section className={classNames(cls.main, {}, [className])}>
      <div className={classNames(cls.main__wrapper, {}, ['wrapper'])}>
        <h1 className={cls.main__title}>
          More than
          <br />
          just a game.
          <br />
          It’s a lifestyle.
        </h1>
        <p className={cls.main__subtitle}>
          Whether you’re
          just starting out, have played your whole
          life or you’re a Tour pro, your swing is like a fingerprint.
        </p>
        <AppLink className={cls.main__btn} to="/shop">Shopping Now</AppLink>
      </div>

    </section>
  );
}
