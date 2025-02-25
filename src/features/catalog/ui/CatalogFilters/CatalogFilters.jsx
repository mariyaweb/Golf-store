import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useEffect } from 'react';
import { createFilterState, createFilterStructure } from 'entities/filter/model';
import { FILTER_ORDER } from 'shared/constants/filterOrder';
import { FilterOption } from 'widgets/FilterOption/FilterOption';
import * as cls from './CatalogFilters.module.scss';
import { FilterOptionColors } from '../../../../widgets/FilterOptionColors/FilterOptionColors';

export function CatalogFilters({ className }) {
  const [filters, setFilters] = useState();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const filtersData = await createFilterState();
        setFilters(filtersData);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };
    loadFilters();
  }, []);

  console.log(filters);

  const updatePageFilter = (value, isChecked) => {
    console.log(`update page filter: ${value}, ${isChecked}`);
  };

  return (
    <div className={classNames(cls.catalogFilters, {}, [className])}>
      <h2 className={cls.catalogFilters__title}>Filter</h2>
      <ul className={cls.catalogFilters__list}>

        {filters ? FILTER_ORDER.map((category) => (
          category === 'colors'
            ? (
              <FilterOptionColors
                optionList={filters[category].values}
                onChange={updatePageFilter}
                selectedValues={[]}
                title={filters[category].name}
                key={filters[category].name}
                filterClass={category}
              />
            )
            : (
              <FilterOption
                optionList={filters[category].values}
                onChange={updatePageFilter}
                selectedValues={[]}
                title={filters[category].name}
                key={filters[category].name}
              />
            )
        )) : null}
      </ul>
    </div>
  );
}
