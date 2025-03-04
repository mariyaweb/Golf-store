import { getValueByKey } from 'shared/lib/getValueByKey/getValueByKey';
import { calculateDiscountPercentage } from './calculateDiscountPercentage';

export const extractProductDataFiltered = (products) => products.map((product) => {
  const allPrices = product.masterVariant.prices[0];
  const discountPrice = allPrices.discounted;

  const currentPrice = discountPrice
    ? allPrices.discounted.value.centAmount
    : allPrices.value.centAmount;

  const oldPrice = discountPrice ? allPrices.value.centAmount : null;
  const discountValue = discountPrice ? calculateDiscountPercentage(oldPrice, currentPrice) : null;

  return {
    id: product.id,
    name: product.name['en-GB'],
    description: product.description['en-GB'],
    currentPrice: currentPrice / 100,
    oldPrice: oldPrice ? oldPrice / 100 : null,
    discount: discountValue,
    image: product.masterVariant.images[0]?.url,
    isNew: getValueByKey(product.masterVariant.attributes, 'New'),
    isDiscount: !!oldPrice,
  };
});
