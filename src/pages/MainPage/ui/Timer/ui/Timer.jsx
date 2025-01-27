import { classNames } from 'shared/lib/classNames/classNames';
import TimerImg from 'widgets/assets/img/timer-image.png';
import * as cls from './Timer.module.scss';
import { useCountdown } from '../model/useCountdown';

export function Timer({ className }) {
  const END_DATE = '2025-04-31T23:59:59';
  const {
    days, hours, minutes, seconds,
  } = useCountdown(END_DATE);
  return (
    <section className={classNames(cls.timer, {}, [className])}>
      <div className={cls.timer__imgContainer}><img className={cls.timer__img} src={TimerImg} alt="Golf" /></div>
      <div className={cls.timer__content}>
        <div className={cls.timer__titles}>
          <h3 className={cls.timer__subTitle}>Limited Edition</h3>
          <h2 className={cls.timer__title}>Hurry up! 30% OFF</h2>
          <p className={cls.timer__description}>Find clubs that are right for your game</p>
        </div>
        <div>
          <h4 className={cls.timer__timerTitle}>Offer expires in:</h4>
          <div className={cls.timer__numbers}>
            <div className={cls.timer__numberBox}>
              <div className={cls.timer__numberTime}>{days}</div>
            </div>
            <div className={cls.timer__numberBox}>
              <div className={cls.timer__numberTime}>{hours}</div>
            </div>
            <div className={cls.timer__numberBox}>
              <div className={cls.timer__numberTime}>{minutes}</div>
            </div>
            <div className={cls.timer__numberBox}>
              <div className={cls.timer__numberTime}>{seconds}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
