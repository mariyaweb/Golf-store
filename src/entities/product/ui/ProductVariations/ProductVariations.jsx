import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ProductVariations.module.scss';

const VARIATION_LABELS = {
  sizes: 'Sizes',
  colors: 'Colors',
  hand: 'Hand',
};
export function ProductVariations({ variations }) {
  console.log(variations);
  return (
    <div className={classNames(cls.productVariations, {}, [])}>
      {Object.entries(variations).map(([key, values]) => {
        if (!values) return null;

        return (
          <div key={key}>
            <h3>{VARIATION_LABELS[key] || key}</h3>
            {values.map((value) => (
              <button type="button" key={value}>{value}</button>
            ))}
          </div>
        );
      })}
    </div>
  );
}
