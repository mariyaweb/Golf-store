export const filterCategoryNames = (category) => category.reduce((acc, item) => {
  const name = item.name['en-GB'].toLowerCase();
  if (!name.includes('sale') && !name.includes('all')) {
    acc.push(name);
  }
  return acc;
}, []);
