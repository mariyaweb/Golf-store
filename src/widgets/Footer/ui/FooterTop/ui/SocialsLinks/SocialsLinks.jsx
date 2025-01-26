import { classNames } from 'shared/lib/classNames/classNames';
import { SvgIconLink } from 'shared/ui/SvgIconLink/SvgIconLink';
import InstagramIcon from 'widgets/assets/icons/instagram.svg';
import FacebookIcon from 'widgets/assets/icons/facebook.svg';
import YoutubeIcon from 'widgets/assets/icons/youtube.svg';
import * as cls from './SocialsLinks.module.scss';

export function SocialsLinks() {
  return (
    <ul className={classNames(cls.footer__socials, {}, [])}>
      <li><SvgIconLink link="https://www.instagram.com/" Icon={InstagramIcon} /></li>
      <li><SvgIconLink link="https://www.facebook.com/" Icon={FacebookIcon} /></li>
      <li><SvgIconLink link="https://www.youtube.com/" Icon={YoutubeIcon} /></li>
    </ul>
  );
}
