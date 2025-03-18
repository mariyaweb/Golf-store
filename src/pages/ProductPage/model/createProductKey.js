export const createProductKey = (name, attributes) => {
  const attributesToString = Object.values(attributes).join('-');
  const formatedName = name?.replace(/'/g, '').replace(/\s+/g, '-');
  return `${formatedName}-${attributesToString}`;
};
