import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useCallback } from 'react';
import { COLORS_STYLES } from 'shared/constants/colors';
import * as cls from './FilterOptionColors.module.scss';

export function FilterOptionColors({
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
    <li className={classNames(cls.filterOptionColors, { [cls.openFilter]: isOpen }, [])}>
      <div className={cls.filterOptionColors__header}>
        <h3 className={cls.filterOptionColors__title}>{title}</h3>
        <button
          type="button"
          aria-label="Open"
          className={cls.filterOptionColors__btn}
          onClick={toggleDropdown}
        >
        </button>
      </div>

      {isOpen && (
        <ul className={classNames(cls.filterOptionColors__list, {
          [cls.scroll]: isLong,
          [cls.openFilter]: isOpen,
        }, [])}
        >
          {optionList.map((item) => {
            const isChecked = selectedValues?.[categoryKey]?.[item.key] || false;
            return (
              <li key={`${item.key}-list-item`} className={cls.filterOptionColors__item}>
                <div className={cls.filterOptionColors__label}>
                  <label htmlFor={item.key}>{item.name}</label>
                  <span
                    className={cls.filterOptionColors__color}
                    style={{ background: COLORS_STYLES[item.key] }}
                  >
                  </span>
                </div>

                <input
                  type="checkbox"
                  id={item.key}
                  name={item.key}
                  value={item.key}
                  key={item.key}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className={cls.filterOptionColors__checkbox}
                />
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
