import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import ArrowIcon from 'widgets/assets/icons/dropdown-arrow-white.svg';
import * as cls from './Accordion.module.scss';

export function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const {
    className,
    title,
    titleStyle,
    listStyle,
    arrowStyle,
    children,
  } = props;

  return (
    <div className={classNames(cls.accordion, { [cls.open]: isOpen }, [className])}>
      <h3 className={titleStyle}>{title}</h3>
      <ArrowIcon
        className={
        classNames(cls.accordion__arrow, {}, [arrowStyle])
}
        onClick={toggleAccordion}
      />
      <ul className={classNames(cls.accordion__list, { }, [listStyle])}>
        {children}
      </ul>
    </div>
  );
}
