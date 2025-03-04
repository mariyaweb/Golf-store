import { getFiltredGoods } from 'shared/api/products/getFiltredGoods';
import { GENDER } from 'shared/constants/gender';
import { BRAND } from 'shared/constants/brand';
import { SHOES_SIZE } from 'shared/constants/shoesSize';
import { CLOTHING_SIZE } from 'shared/constants/clothingSize';
import { COLORS } from 'shared/constants/colors';

export async function getAvailableFilters() {
  const allGoods = await getFiltredGoods(500, 0);
  const attributesList = {};
  allGoods.forEach((item) => {
    item.masterVariant.attributes.forEach((attribute) => {
      if ((!attributesList[attribute.name] && (attribute.name !== 'New')) || (!attributesList[attribute.name] && (attribute.name === 'New' && attribute.value))) {
        attributesList[attribute.name] = new Set();
      }
      if (attribute.name !== 'New' || (attribute.name === 'New' && attribute.value)) attributesList[attribute.name].add(attribute.value.key);
    });
    if (item.variants.length > 0) {
      item.variants.forEach((variant) => {
        variant.attributes.forEach((attribute) => {
          if ((!attributesList[attribute.name] && (attribute.name !== 'New')) || (!attributesList[attribute.name] && (attribute.name === 'New' && attribute.value))) {
            attributesList[attribute.name] = new Set();
          }
          if (attribute.name !== 'New' || (attribute.name === 'New' && attribute.value)) attributesList[attribute.name].add(attribute.value.key);
        });
      });
    }
  });
  console.log(allGoods);
  console.log(attributesList);
  const handValues = attributesList.hand ? Array.from(attributesList.hand).map((hand) => ({ key: hand, name: hand === 'left' ? 'Left Hand' : 'Right Hand' })) : null;
  const availableFilters = {
    gender: attributesList.gender ? { name: 'Gender', values: Array.from(attributesList.gender).map((gender) => ({ key: gender, name: GENDER[gender] })) } : null,
    brand: attributesList.brand ? { name: 'Brand', values: Array.from(attributesList.brand).map((brandItem) => ({ key: brandItem, name: BRAND[brandItem] })) } : null,
    'clothing-sizes': attributesList['clothing-sizes'] ? { name: 'Clothing Sizes', values: Array.from(attributesList['clothing-sizes']).map((clothingItem) => ({ key: clothingItem, name: CLOTHING_SIZE[clothingItem] })) } : null,
    'shoes-sizes': attributesList['shoes-sizes'] ? { name: 'Shoes Sizes', values: Array.from(attributesList['shoes-sizes']).map((shoesItem) => ({ key: shoesItem, name: SHOES_SIZE[`${shoesItem}`] })).sort((a, b) => (+a.name) - (+b.name)) } : null,
    hand: attributesList.hand ? { name: 'Hand', values: handValues } : null,
    colors: attributesList.colors ? { name: 'Color', values: Array.from(attributesList.colors).map((item) => ({ key: item, name: COLORS[item] })) } : null,
    newIn: attributesList.New ? { name: 'New in', values: [{ key: 'New', name: 'New' }] } : null,
    sale: attributesList.Sale ? { name: 'Sale', values: [{ key: 'Sale', name: 'Sale' }] } : null,
  };
  console.log(availableFilters);
  return availableFilters;
}
