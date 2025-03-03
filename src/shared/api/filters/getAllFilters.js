import { CLOTHING_SIZE } from 'shared/constants/clothingSize';
import { apiRoot } from '../commercetoolsClient';
import { GENDER } from '../../constants/gender';
import { BRAND } from '../../constants/brand';
import { SHOES_SIZE } from '../../constants/shoesSize';
import { COLORS } from '../../constants/colors';

export async function getAllFilters() {
  const response = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        facet: [
          'variants.attributes.colors.key as colors',
          'variants.attributes.brand.key as brand',
          'variants.attributes.New as new',
          'variants.attributes.shoes-sizes.key as shoes-sizes',
          'variants.attributes.clothing-sizes.key as clothing-sizes',
          'variants.attributes.gender.key as gender',
          'variants.attributes.hand.key as hand',
        ],
        limit: 0,
      },
    })
    .execute();

  const filters = response.body.facets;
  return {
    gender: { name: 'Gender', values: filters.gender.terms.map((gender) => ({ key: gender.term, name: GENDER[gender.term] })) },
    brand: { name: 'Brand', values: filters.brand.terms.map((brandItem) => ({ key: brandItem.term, name: BRAND[brandItem.term] })) },
    'clothing-sizes': { name: 'Clothing Sizes', values: filters['clothing-sizes'].terms.map((clothingItem) => ({ key: clothingItem.term, name: CLOTHING_SIZE[`${clothingItem.term}`] })) },
    'shoes-sizes': { name: 'Shoes Sizes', values: filters['shoes-sizes'].terms.map((shoesItem) => ({ key: shoesItem.term, name: SHOES_SIZE[`${shoesItem.term}`] })).sort((a, b) => (+a.name) - (+b.name)) },
    hand: { name: 'Hand', values: [{ key: 'left', name: 'Left Hand' }, { key: 'right', name: 'Right Hand' }] },
    colors: { name: 'Color', values: filters.colors.terms.map((item) => ({ key: item.term, name: COLORS[item.term] })) },
    newIn: { name: 'New in', values: [{ key: 'New', name: 'New' }] },
    sale: { name: 'Sale', values: [{ key: 'Sale', name: 'Sale' }] },
  };
  // console.log(response.body.facets);
  // return response.body.facets;
}
