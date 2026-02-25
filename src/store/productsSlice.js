import { createSlice } from '@reduxjs/toolkit';
import allProducts from '../data/products';

const initialState = {
  all: allProducts,
  filter: 'All',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    clearFilter(state) {
      state.filter = 'All';
    },
  },
});

export const { setFilter, clearFilter } = productsSlice.actions;

export const selectFilter = (state) => state.products.filter;
export const selectAllProducts = (state) => state.products.all;
export const selectFilteredProducts = (state) => {
  const { all, filter } = state.products;
  if (!filter || filter === 'All') return all;
  return all.filter((p) => p.category === filter);
};

export default productsSlice.reducer;
