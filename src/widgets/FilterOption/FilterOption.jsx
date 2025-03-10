import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useCallback } from 'react';
import * as cls from './FilterOption.module.scss';

export function FilterOption({
  optionList, onChange, selectedValues, title, categoryKey,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = useCallback((e) => {
    const { value, checked } = e.target;
    onChange(categoryKey, value, checked);
  }, [onChange, categoryKey]);

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
          {optionList.map((item) => {
            const isChecked = selectedValues?.[categoryKey]?.[item.key] || false;
            return (
              <li key={`${item.key}-list`} className={cls.filterOption__item}>
                <label htmlFor={item.key}>{item.name}</label>
                <input
                  type="checkbox"
                  id={item.key}
                  name={item.key}
                  value={item.key}
                  key={item.key}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className={cls.filterOption__checkbox}
                />
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
