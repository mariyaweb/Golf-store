export const getValueByKey = (array, key) => {
  const item = array.find((obj) => obj.name === key);
  return item ? item.value : null;
};
