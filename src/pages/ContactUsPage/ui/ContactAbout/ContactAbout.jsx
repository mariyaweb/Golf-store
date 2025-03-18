import AboutImg from 'widgets/assets/img/golf-set.png';
import { Link } from 'react-router-dom';
import * as cls from './ContactAbout.module.scss';

export function ContactAbout() {
  return (
    <div className={cls.contactAbout}>
      <div className={cls.contactAbout__imgContainer}><img className={cls.contactAbout__img} src={AboutImg} alt="AboutImg" /></div>
      <div className={cls.contactAbout__description}>
        <h2 className={cls.contactAbout__title}>About Us</h2>
        <p>
          3legant is a golf equipment and accessories store based
          in HCMC, Vietnam. Established in 2019, we are dedicated
          to quality and performance on the course.
          Our customer service is always prepared to support you 24/7
        </p>
        <Link to="/shop" className={cls.contactAbout__link}>Shop Now</Link>
      </div>
    </div>
  );
}
