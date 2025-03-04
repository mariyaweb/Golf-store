import { getAllFilters } from 'shared/api/filters/getAllFilters';
import { getCategories } from 'shared/api/categories/getCategories';
import { filterCategoryNames } from 'shared/lib/filterCategoryNames/filterCategoryNames';
import { isEmptyObj } from 'shared/lib/isEmptyObj/isEmptyObj';
import { getAvailableFilters } from './getAvailableFilters';

export const createFilterState = async (selectedFilters) => {
  const filters = isEmptyObj(selectedFilters)
    ? await getAllFilters()
    : await getAvailableFilters();
  const categories = await getCategories();
  const filtredCategories = filterCategoryNames(categories);
  console.log('createFilterState');
  console.log(categories);
  console.log(filters);

  return {
    gender: filters.gender || null,
    category: {
      name: 'Category',
      values: filtredCategories.map((category) => ({ key: category.id, name: category.name })),
    },
    brand: filters.brand || null,
    'clothing-sizes': filters['clothing-sizes'] || null,
    'shoes-sizes': filters['shoes-sizes'] || null,
    hand: filters.hand || null,
    colors: filters.colors || null,
    newIn: filters.newIn || null,
    sale: filters.sale || null,
  };
};
