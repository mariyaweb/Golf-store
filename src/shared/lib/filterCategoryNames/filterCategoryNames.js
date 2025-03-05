export const filterCategoryNames = (category) => category.reduce((acc, item) => {
  const name = item.name['en-GB'].toLowerCase();
  const hasExactAll = (name) => /\ball\b/.test(name);
  if (!name.includes('sale') && !hasExactAll(name)) {
    acc.push({ id: item.id, name });
  }
  return acc;
}, []);
