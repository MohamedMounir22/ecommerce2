import { createSlice } from '@reduxjs/toolkit';
import allProducts from '../../data/products';

const initialState = {
  items: allProducts,
  selectedCategory: 'All',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = productSlice.actions;

export const selectFilteredProducts = (state) => {
  const { items, selectedCategory } = state.products;
  if (selectedCategory === 'All') {
    return items;
  }
  return items.filter((product) => product.category === selectedCategory);
};

export default productSlice.reducer;