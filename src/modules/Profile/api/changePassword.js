import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../../utils/constants';

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ current_password, new_password, confirm_new_password }, thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}/api/users/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access')}` 
        },
        body: JSON.stringify({ current_password, new_password, confirm_new_password })
      });

      const data = await res.json();

      if (res.status === 200) {
        console.log(data)
        return data
      } else {
        console.log(data)
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
