import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const raw = localStorage.getItem('cart');
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items));
  } catch (e) {
    // ignore write errors
  }
};

const initialState = {
  items: loadCartFromStorage(), // { id, product, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((it) => it.product.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ id: product.id, product, quantity: 1 });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((it) => it.id !== id);
      saveCartToStorage(state.items);
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existing = state.items.find((it) => it.id === id);
      if (existing) {
        existing.quantity = Math.max(1, quantity);
      }
      saveCartToStorage(state.items);
    },
    clearCart(state) {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.reduce((s, it) => s + it.quantity, 0);
export const selectCartTotal = (state) => state.cart.items.reduce((s, it) => s + it.product.price * it.quantity, 0);

export default cartSlice.reducer;
