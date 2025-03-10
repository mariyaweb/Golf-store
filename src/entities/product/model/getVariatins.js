import { ALLOWED_PRODUCT_PAGE_ATTRIBUTES } from 'shared/constants/allowedProductAttributes';

const getVariants = (variants) => variants.reduce((acc, variant) => {
  variant.attributes?.forEach(({ name, value }) => {
    if (ALLOWED_PRODUCT_PAGE_ATTRIBUTES.has(name)) {
      if (!acc[name]) {
        acc[name] = new Set();
      }

      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (typeof item === 'string') {
            acc[name].add(item);
          } else if (item?.key) {
            acc[name].add(item.key);
          }
        });
      } else if (typeof value === 'string') {
        acc[name].add(value);
      } else if (value?.key) {
        acc[name].add(value.label);
      }
    }
  });
  return acc;
}, {});

export const getProductVariants = (product) => {
  const { masterVariant, variants } = product;
  const allVariants = [masterVariant, ...variants];
  const aggregatedAttributes = getVariants(allVariants);
  const result = Object.fromEntries(
    Object.entries(aggregatedAttributes).map(([key, value]) => [key, [...value]]),
  );
  return result;
};
