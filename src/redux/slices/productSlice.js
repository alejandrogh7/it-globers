import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../thunks/productThunks';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    success: false,
    loading: false,
  },
  reducers: {  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.success = false;
      state.success = false;
    }
  }
})


export default productSlice.reducer;
