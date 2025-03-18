import { classNames } from 'shared/lib/classNames/classNames';
import { COLORS_STYLES } from 'shared/constants/colors';
import * as cls from './ProductVariantBtn.module.scss';

export function ProductVariantBtn({
  value, isColors, onSelect, isSelected,
}) {
  const colorKey = value.toLowerCase();
  const isGradient = isColors ? COLORS_STYLES[colorKey].includes('linear-gradient') : false;
  const bgColor = isColors ? COLORS_STYLES[colorKey] : '';
  const cssStyle = isGradient
    ? { backgroundImage: bgColor }
    : { backgroundColor: bgColor };

  return (
    <button
      className={classNames(cls.variationBtn, { [cls.selected]: isSelected }, [])}
      type="button"
      key={value}
      style={cssStyle}
      onClick={onSelect}
    >
      {isColors ? '' : value}
    </button>
  );
}
