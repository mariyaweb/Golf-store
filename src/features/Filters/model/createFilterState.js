import { getAllFilters } from 'shared/api/filters/getAllFilters';
import { getCategories } from 'shared/api/categories/getCategories';
import { filterCategoryNames } from 'shared/lib/filterCategoryNames/filterCategoryNames';
import { isEmptyObj } from 'shared/lib/isEmptyObj/isEmptyObj';
import { getAvailableFilters } from 'shared/api/filters/getAvailableFilters';

export const createFilterState = async (filters, selectedFilters) => {
  const filtersSelected = isEmptyObj(selectedFilters)
    ? await getAllFilters()
    : await getAvailableFilters(filters);
  const categories = await getCategories();
  const filtredCategories = filterCategoryNames(categories);

  return {
    gender: filtersSelected.gender || null,
    category: {
      name: 'Category',
      values: filtredCategories.map((category) => ({ key: category.id, name: category.name })),
    },
    brand: filtersSelected.brand || null,
    'clothing-sizes': filtersSelected['clothing-sizes'] || null,
    'shoes-sizes': filtersSelected['shoes-sizes'] || null,
    hand: filtersSelected.hand || null,
    colors: filtersSelected.colors || null,
    newIn: filtersSelected.newIn || null,
    sale: filtersSelected.sale || null,
  };
};
