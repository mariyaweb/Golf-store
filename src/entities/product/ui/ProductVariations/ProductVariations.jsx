import { classNames } from 'shared/lib/classNames/classNames';
import { ProductVariantBtn } from 'features/ProductVariantBtn/ProductVariantBtn';
import { useState, useEffect } from 'react';
import * as cls from './ProductVariations.module.scss';

const VARIATION_LABELS = {
  'clothing-sizes': 'Clothing Sizes',
  'shoes-sizes': 'Shoes Sizes',
  colors: 'Colors',
  hand: 'Hand',
};
export function ProductVariations({
  variations, setVariantId, selectedProductAttributes, setSelectedProductAttributes,
}) {
  useEffect(() => {
    const baseVariants = Object.entries(variations).reduce((acc, [key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        const [firstValue] = values;
        acc[key] = firstValue;
      }
      return acc;
    }, {});
    setSelectedProductAttributes(baseVariants);
  }, [variations]);

  const onSelect = (key, value, variantIndex) => {
    setSelectedProductAttributes((prev) => ({ ...prev, [key]: value }));

    if (key === 'colors') {
      setVariantId(variantIndex);
    }
  };

  return (
    <div className={classNames(cls.productVariations, {}, [])}>
      {Object.entries(variations).map(([key, values]) => {
        if (!values) return null;
        const isColors = key === 'colors';
        return (
          <div className={cls.productVariations__item} key={key}>
            <h3 className={cls.productVariations__title}>{VARIATION_LABELS[key] || key}</h3>
            <div className={cls.productVariations__values}>
              {values.map((value, variantIndex) => (
                <ProductVariantBtn
                  key={value}
                  value={value}
                  isColors={isColors}
                  isSelected={selectedProductAttributes[key] === value}
                  onSelect={() => onSelect(key, value, variantIndex)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
