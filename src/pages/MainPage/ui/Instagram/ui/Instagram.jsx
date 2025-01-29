import { classNames } from 'shared/lib/classNames/classNames';
import { v4 as uuidv4 } from 'uuid';
import { IMAGES } from '../model/images';
import * as cls from './Instagram.module.scss';

export function Instagram({ className }) {
  return (
    <div className={classNames(cls.instagram, {}, [className])}>
      <div className={classNames(cls.instagram__heading, {}, ['wrapper'])}>
        <h3 className={cls.instagram__headingSubtitle}>newsfeed</h3>
        <h2 className={cls.instagram__title}>Instagram</h2>
        <p className={cls.instagram__description}>
          Follow us on social media for more discount & promotions
        </p>
        <a className={cls.instagram__link} href="https://www.instagram.com/" target="_blank" rel="noreferrer">@3legant_official</a>
      </div>
      <div className={cls.instagram__imgs}>
        {IMAGES.map((src, index) => (
          <img key={uuidv4()} src={src} alt={`Post ${index + 1}`} className={cls.instagram__img} />
        ))}
      </div>
    </div>
  );
}
