import { classNames } from 'shared/lib/classNames/classNames';
import { AppLogo } from 'shared/ui/AppLogo/AppLogo';
import * as cls from './FooterTop.module.scss';
import { SocialsLinks } from './ui/SocialsLinks/SocialsLinks';
import { NavigationLinks } from './ui/NavigationLinks/NavigationLinks';

export function FooterTop({ className }) {
  return (
    <div className={classNames(cls.footerTop, {}, [className])}>
      <div className={classNames(cls.footerTop__left, {}, [])}>
        <AppLogo theme="light" className={cls.footerTop__logo} />
        <h3 className={cls.footerTop__slogan}>
          More than just a game. It’s a lifestyle.
        </h3>
        <SocialsLinks />
      </div>
      <NavigationLinks className={cls.footerTop__right} />
    </div>
  );
}
