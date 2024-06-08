import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../../utils/constants';

export const getCards = createAsyncThunk(
  'literature/getCards',
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}/api/cards/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access')}` 
        },
      });

      const data = await res.json();

      if (res.status === 200) {
        // console.log(data)
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

