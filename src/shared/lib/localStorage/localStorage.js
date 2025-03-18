export const CART_STORAGE_KEY = 'cart';

export const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : undefined;
  } catch (error) {
    console.error('Ошибка загрузки корзины из localStorage', error);
    return undefined;
  }
};

export const saveCartToStorage = (cartState) => {
  try {
    const serializedCart = JSON.stringify(cartState);
    localStorage.setItem(CART_STORAGE_KEY, serializedCart);
  } catch (error) {
    console.error('Ошибка сохранения корзины в localStorage', error);
  }
};

export const clearCartStorage = () => {
  localStorage.removeItem(CART_STORAGE_KEY);
};
