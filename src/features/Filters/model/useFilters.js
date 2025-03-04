import { useState, useEffect } from 'react';
import { createFilterState } from 'features/Filters/model/createFilterState';

export function useFilters(setFilters) {
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

  return {
    availableFilters,
    selectedFilters,
    updatePageFilter,
  };
}
