import * as cls from './ProductHeader.module.scss';

export function ProductHeader({
  brand, name, className,
}) {
  return (
    <div className={className}>
      <p>{brand}</p>
      <h1 className={cls.title}>{name}</h1>
    </div>
  );
}
