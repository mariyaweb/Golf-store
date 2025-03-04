import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useEffect } from 'react';
import { FILTER_ORDER } from 'shared/constants/filterOrder';
import { createFilterState } from 'features/Filters/model/createFilterState';

import { FilterOptionColors } from 'widgets/FilterOptionColors/FilterOptionColors';
import { FilterOption } from 'widgets/FilterOption/FilterOption';
import * as cls from './CatalogFilters.module.scss';

export function CatalogFilters({ className, setFilters }) {
  const [availableFilters, setAvailableFilters] = useState();
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const filtersData = await createFilterState(selectedFilters);
        setAvailableFilters(filtersData);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };
    loadFilters();
  }, []);

  useEffect(() => {
    const filterArr = Object.entries(selectedFilters)
      .map(([key, values]) => {
        const activeValues = Object.keys(values).filter((value) => values[value]);
        if (activeValues.length === 0) return null;
        if (key === 'category') {
          return activeValues.map((id) => `categories.id:"${id}"`).join(',');
        }
        return `variants.attributes.${key}.key:"${activeValues.join('","')}"`;
      })
      .filter(Boolean);

    setFilters(filterArr);
  }, [selectedFilters, setFilters]);

  const updatePageFilter = (categoryKey, value, checkValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [categoryKey]: {
        ...prevFilters[categoryKey],
        [value]: checkValue,
      },
    }));
  };

  console.log('🟢 фильтры:', availableFilters);
  console.log('🟢 Текущее состояние фильтров:', selectedFilters);

  return (
    <div className={classNames(cls.catalogFilters, {}, [className])}>
      <h2 className={cls.catalogFilters__title}>Filter</h2>
      <ul className={cls.catalogFilters__list}>
        {availableFilters ? (
          FILTER_ORDER.map((category) => {
            if (!availableFilters[category]) return null;

            if (category === 'colors') {
              return (
                <FilterOptionColors
                  optionList={availableFilters[category].values}
                  onChange={updatePageFilter}
                  selectedValues={selectedFilters}
                  title={availableFilters[category].name}
                  key={category}
                  filterClass={category}
                  categoryKey={category}
                />
              );
            }
            return (
              <FilterOption
                optionList={availableFilters[category].values}
                onChange={updatePageFilter}
                selectedValues={selectedFilters}
                title={availableFilters[category].name}
                key={category}
                categoryKey={category}
              />
            );
          })
        ) : null}
      </ul>
    </div>
  );
}
