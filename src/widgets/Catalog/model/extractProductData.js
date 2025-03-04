import { getValueByKey } from 'shared/lib/getValueByKey/getValueByKey';
import { calculateDiscountPercentage } from './calculateDiscountPercentage';

export const extractProductData = (products) => products.map((product) => {
  const allPrices = product.masterData.current.masterVariant.prices[0];
  const discountPrice = allPrices.discounted;

  const currentPrice = discountPrice
    ? allPrices.discounted.value.centAmount
    : allPrices.value.centAmount;

  const oldPrice = discountPrice ? allPrices.value.centAmount : null;
  const discountValue = discountPrice ? calculateDiscountPercentage(oldPrice, currentPrice) : null;

  return {
    id: product.id,
    name: product.masterData.current.name['en-GB'],
    description: product.masterData.current.description['en-GB'],
    currentPrice: currentPrice / 100,
    oldPrice: oldPrice ? oldPrice / 100 : null,
    discount: discountValue,
    image: product.masterData.current.masterVariant.images[0]?.url,
    isNew: getValueByKey(product.masterData.current.masterVariant.attributes, 'New'),
    isDiscount: !!oldPrice,
  };
});
