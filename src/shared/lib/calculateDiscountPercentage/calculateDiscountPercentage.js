export function calculateDiscountPercentage(fullPrice, discountPrice) {
  const discount = ((fullPrice - discountPrice) / fullPrice) * 100;
  return discount.toFixed(0);
}
