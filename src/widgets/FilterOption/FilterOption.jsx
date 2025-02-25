import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useCallback } from 'react';
import * as cls from './FilterOption.module.scss';

export function FilterOption({
  optionList, onChange, selectedValues, title,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = useCallback((e) => {
    const { value } = e.target;
    const { checked } = e.target;
    onChange(value, checked);
  }, [onChange]);

  const isLong = optionList.length > 9;

  return (
    <li className={classNames(cls.filterOption, { [cls.openFilter]: isOpen }, [])}>
      <div className={cls.filterOption__header}>
        <h3 className={cls.filterOption__title}>{title}</h3>
        <button
          type="button"
          aria-label="Open"
          onClick={toggleDropdown}
          className={cls.filterOption__btn}
        >
        </button>
      </div>

      {isOpen && (
        <ul className={classNames(cls.filterOption__list, {
          [cls.scroll]: isLong,
          [cls.openFilter]: isOpen,
        }, [])}
        >
          {optionList.map((item) => (
            <li key={`${item.key}-list`} className={cls.filterOption__item}>
              <label htmlFor={item.value}>{item.name}</label>
              <input
                type="checkbox"
                id={item.value}
                name={item.value}
                value={item.value}
                key={item.key}
                checked={selectedValues.includes(item.value)}
                onChange={handleCheckboxChange}
                className={cls.filterOption__checkbox}
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
