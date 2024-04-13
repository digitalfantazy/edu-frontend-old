import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/constants.js";

export const refreshToken = createAsyncThunk(
  "users/refreshToken",
  async (_, thunkAPI) => {
    try {
      // const refresh = JSON.stringify({ refresh: refreshToken })
      // console.log(refresh)
      // const refreshToken = Cookies.get('refresh_token'); // (Не работает) Получаем Refresh токен из куков
      // console.log(refreshToken)
      const res = await fetch(`${API_URL}/api/token/refresh/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await res.json();
      // console.log(data, "Пошел refresh")

      if (res.status === 200) {
        const accessToken = data.access;
        localStorage.setItem("access", accessToken);

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);