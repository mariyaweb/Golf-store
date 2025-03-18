import { createSlice } from '@reduxjs/toolkit';
import { loadCartFromStorage, saveCartToStorage } from 'shared/lib/localStorage/localStorage';

const initialState = loadCartFromStorage() || {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id, name, attributes, quantity, price, image,
      } = action.payload;

      const newTotalProductPrice = (price * quantity);

      if (state.items[id]) {
        state.items[id].quantity += quantity;
        state.items[id].totalProductPrice = newTotalProductPrice;
      } else {
        state.items[id] = {
          id,
          name,
          attributes,
          pricePerOne: price,
          totalProductPrice: newTotalProductPrice,
          quantity,
          image,
        };
      }
      state.totalCount += quantity;
      state.totalPrice += newTotalProductPrice;
      saveCartToStorage(state);
    },

    updateQuantity: (state, action) => {
      const {
        productId, quantity,
      } = action.payload;

      if (!state.items[productId]) return;

      const diff = quantity - state.items[productId].quantity;
      state.items[productId].quantity = quantity;
      state.items[productId].totalProductPrice = state.items[productId].pricePerOne * quantity;
      state.totalCount += diff;
      state.totalPrice += diff * state.items[productId].pricePerOne;
      saveCartToStorage(state);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const product = state.items[id];
      if (product) {
        state.totalCount -= product.quantity;
        state.totalPrice -= product.totalProductPrice;
        delete state.items[id];
        saveCartToStorage(state);
      }
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

  },
});

export const {
  addToCart, removeFromCart, toggleCart, updateQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
