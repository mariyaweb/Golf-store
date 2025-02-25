import { getFilters } from 'shared/api/filters/getFilters';
import { getCategories } from 'shared/api/categories/getCategories';
import { filterCategoryNames } from 'shared/lib/filterCategoryNames/filterCategoryNames';
import { COLORS } from 'shared/constants/colors';
import { BRAND } from 'shared/constants/brand';
import { GENDER } from 'shared/constants/gender';

export const createFilterState = async () => {
  const filters = await getFilters();
  const categories = await getCategories();
  const filtredCategories = filterCategoryNames(categories);
  console.log('createFilterState');

  return {
    gender: { name: 'Gender', values: filters.gender.terms.map((gender) => ({ key: gender.term, name: GENDER[gender.term] })) },
    category: { name: 'Category', values: filtredCategories.map((category) => ({ key: category, name: category })) },
    brand: { name: 'Brand', values: filters.brand.terms.map((brandItem) => ({ key: brandItem.term, name: BRAND[brandItem.term] })) },
    hand: { name: 'Hand', values: [{ key: 'left', name: 'Left Hand' }, { key: 'right', name: 'Right Hand' }] },
    colors: { name: 'Color', values: filters.colors.terms.map((item) => ({ key: item.term, name: COLORS[item.term] })) },
    newIn: { name: 'New in', values: [{ key: 'New', name: 'New' }] },
    sale: { name: 'Sale', values: [{ key: 'Sale', name: 'Sale' }] },
  };
};

export const createFilterStructure = () => ({
  gender: { name: '', values: [] },
  category: { name: '', values: [] },
  brand: { name: '', values: [] },
  hand: { name: '', values: [] },
  newIn: { name: '', values: [] },
  sale: { name: '', values: [] },
});
