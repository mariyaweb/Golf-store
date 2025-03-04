import { classNames } from 'shared/lib/classNames/classNames';
import { FILTER_ORDER } from 'shared/constants/filterOrder';

import * as cls from './CatalogFilters.module.scss';
import { FilterOptionColors } from '../FilterOptionColors/FilterOptionColors';
import { FilterOption } from '../FilterOption/FilterOption';
import { useFilters } from '../../model/useFilters';

export function CatalogFilters({ className, setFilters }) {
  const {
    availableFilters,
    selectedFilters,
    updatePageFilter,
  } = useFilters(setFilters);

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
