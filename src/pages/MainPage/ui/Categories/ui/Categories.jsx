import { classNames } from 'shared/lib/classNames/classNames';

import ClubsImg from 'widgets/assets/categories/clubs.png';
import BallsImg from 'widgets/assets/categories/balls.png';
import BagsImg from 'widgets/assets/categories/bags.png';
import ClothingImg from 'widgets/assets/categories/clothing.png';
import FootwearImg from 'widgets/assets/categories/footwear.png';
import AccessoriesImg from 'widgets/assets/categories/accessories.png';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import * as cls from './Categories.module.scss';

const CATEGORIES = [
  {
    name: 'Golf Clubs',
    imgLink: ClubsImg,
  },
  {
    name: 'Golf Balls',
    imgLink: BallsImg,
  },
  {
    name: 'Golf Bags',
    imgLink: BagsImg,
  },
  {
    name: 'Clothing',
    imgLink: ClothingImg,
  },
  {
    name: 'Footwear',
    imgLink: FootwearImg,
  },
  {
    name: 'Accessories',
    imgLink: AccessoriesImg,
  },
];
export function Categories({ className }) {
  return (
    <section className={classNames(cls.categories, {}, [className, 'wrapper'])}>
      <h2 className={classNames(cls.categories__title, {}, ['title'])}>Shop by Categories</h2>
      <ul className={cls.categories__list}>
        {CATEGORIES.map((item) => (
          <li className={cls.categories__item} key={item.name}>
            <AppLink className={cls.categories__link} to="/shop">
              <div className={cls.categories__imgContainer}>
                <img className={cls.categories__img} src={item.imgLink} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </AppLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
