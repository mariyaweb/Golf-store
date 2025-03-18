import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import * as cls from './CatalogCard.module.scss';

export const CatalogCard = memo(({ className, product }) => {
  const {
    id,
    name,
    currentPrice,
    oldPrice,
    discount,
    isNew,
  } = product;
  const newElement = <span className={cls.catalogCard__new}>NEW</span>;
  const discountElement = (
    <span className={cls.catalogCard__discount}>
      -
      {discount}
      %
    </span>
  );

  return (
    <div className={classNames(cls.catalogCard, {}, [className])}>
      <Link to={`/shop/${id}`}>
        <div className={cls.catalogCard__badges}>
          { isNew ? newElement : null }
          { discount ? discountElement : null }
        </div>
        <div className={cls.catalogCard__imgContainer}>
          <img className={cls.catalogCard__img} src={product.image} alt={name} />
          <Button className={cls.catalogCard__btn}>Add to cart</Button>
        </div>
        <p className={cls.catalogCard__name}>{name}</p>
        <div className={cls.catalogCard__prices}>
          <div className={cls.catalogCard__currentPrice}>{`$${currentPrice}`}</div>
          {oldPrice ? <div className={cls.catalogCard__oldPrice}>{`$${oldPrice}`}</div> : null}
        </div>
      </Link>
    </div>
  );
});
