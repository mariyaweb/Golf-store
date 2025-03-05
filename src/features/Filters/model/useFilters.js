import { useState, useEffect } from 'react';
import { createFilterState } from 'features/Filters/model/createFilterState';

export function useFilters(filters, setFilters) {
  const [availableFilters, setAvailableFilters] = useState();
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const filtersData = await createFilterState(filters, selectedFilters);
        setAvailableFilters(filtersData);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    loadFilters();
  }, [filters]);

  useEffect(() => {
    console.log(selectedFilters);
    const filterArr = Object.entries(selectedFilters)
      .map(([key, values]) => {
        const activeValues = Object.keys(values).filter((value) => values[value]);
        if (activeValues.length === 0) return null;

        if (key === 'category') {
          const idStr = activeValues.map((id) => `"${id}"`).join(',');
          return `categories.id:${idStr}`;
        }

        if (key === 'newIn') {
          return 'variants.attributes.New:"true"';
        }

        if (key === 'sale') {
          return 'categories.id:"6035d86e-a644-4815-869f-f61b4a94ff96","3653e900-cc18-4cad-a897-fb1bf06503c7","b37b04d9-3b40-469d-962b-c4c8b0b1e4f7"';
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
