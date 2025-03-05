import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import * as cls from './Input.module.scss';

export const Input = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props;

  const onChangeHandler = (e) => {
    onChange?.(e.target);
  };

  return (
    <div className={classNames(cls.input, {}, [className])}>
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
});
