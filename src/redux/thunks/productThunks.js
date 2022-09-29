import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getProducts = createAsyncThunk('product/getProducts', async (arg, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    return response.data
  } catch(error) {
    rejectWithValue(error);
  }
})

export {
  getProducts,
};
