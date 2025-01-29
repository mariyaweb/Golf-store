import { classNames } from 'shared/lib/classNames/classNames';
import JuniorImg from 'widgets/assets/img/junior-set.png';
import MenImg from 'widgets/assets/img/men-set.png';
import WomenImg from 'widgets/assets/img/women-set.png';
import Arrow from 'widgets/assets/icons/collection-arrow.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import * as cls from './Collection.module.scss';

export function Collection({ className }) {
  return (
    <div className={classNames(cls.collection, {}, [className, 'wrapper'])}>
      <h2 className={cls.collection__title}>Shop Collection</h2>
      <div className={cls.collection__cards}>
        <div className={cls.collection__card}>
          <img className={cls.collection__img} src={JuniorImg} alt="Junior" />
          <div className={cls.collection__text}>
            <h3 className={cls.collection__name}>Juniors Set</h3>
            <AppLink to="/shop" className={cls.collection__link}>
              Collections
              <Arrow />
            </AppLink>
          </div>
        </div>
        <div className={cls.collection__card}>
          <img className={cls.collection__img} src={WomenImg} alt="Women’s" />
          <div className={cls.collection__text}>
            <h3 className={cls.collection__name}>Women’s Set</h3>
            <AppLink to="/shop" className={cls.collection__link}>
              Collections
              <Arrow />
            </AppLink>
          </div>
        </div>
        <div className={cls.collection__card}>
          <img className={cls.collection__img} src={MenImg} alt="Men’s" />
          <div className={cls.collection__text}>
            <h3 className={cls.collection__name}>Men’s Set</h3>
            <AppLink to="/shop" className={cls.collection__link}>
              Collections
              <Arrow />
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  );
}
