import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from "../../../utils/constants.js";

export const getUser = createAsyncThunk(
  "users/me",

  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}/api/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });

      const data = await res.json();

      if (res.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);