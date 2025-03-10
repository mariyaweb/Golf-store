import { calculateDiscountPercentage } from 'shared/lib/calculateDiscountPercentage/calculateDiscountPercentage';
import { getValueByKey } from 'shared/lib/getValueByKey/getValueByKey';
import { getProductVariants } from 'entities/product/model/getVariatins';

export function getProductData(product) {
  const stagedData = product.masterData.current;
  const { masterVariant, variants } = stagedData || {};

  const masterVariantAttributes = masterVariant.attributes;
  const productVariants = getProductVariants(stagedData);

  const masterImgs = masterVariant.images.map((img) => img.url);
  const variantsImages = variants.map((variant) => [...variant.images.map((img) => img.url)]);
  const allImages = [masterImgs, ...variantsImages];

  const brand = getValueByKey(masterVariantAttributes, 'brand').label || null;
  const isNew = getValueByKey(masterVariantAttributes, 'New');

  const allPrices = masterVariant.prices[0];
  const discountPrice = masterVariant.prices[0].discounted;
  const oldPrice = discountPrice ? allPrices.value.centAmount : null;
  const currentPrice = discountPrice
    ? discountPrice.value.centAmount
    : allPrices.value.centAmount;
  const discountValue = discountPrice ? calculateDiscountPercentage(oldPrice, currentPrice) : null;

  const variations = {
    'clothing-sizes': productVariants['clothing-sizes'] || null,
    'shoes-sizes': productVariants['shoes-sizes'] || null,
    hand: productVariants.hand || null,
    colors: productVariants.colors || null,
  };

  const productData = {
    name: stagedData.name['en-GB'],
    description: stagedData.description['en-GB'],
    images: allImages,
    currentPrice: currentPrice / 100,
    oldPrice: oldPrice ? oldPrice / 100 : null,
    discount: discountValue,
    brand,
  };

  return {
    ...productData,
    isNew,
    variations,
  };
}
