import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/constants.js";
import { checkAuth } from "./checkAuthFetch.js";
import { setAuthenticated } from "../store/authSlice.js";

export const refreshToken = createAsyncThunk(
  "users/refreshToken",
  async (_, thunkAPI) => {
    try {
      // const refresh = JSON.stringify({ refresh: refreshToken })
      // console.log(refresh)
      // const refreshToken = Cookies.get('refresh_token'); // (Не работает) Получаем Refresh токен из куков
      // console.log(refreshToken)
      const res = await fetch(`${API_URL}/api/auth/token/refresh/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        // body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await res.json();
      // const { dispatch } = thunkAPI;
      // console.log(data, "Пошел refresh")

      if (res.status === 200) {
        const accessToken = data.access;
        localStorage.setItem("access", accessToken);
        thunkAPI.dispatch(checkAuth())
        // console.log("прошел запрос refresh", accessToken);

        return data;
      } else if (res.status === 400) {
        thunkAPI.dispatch(setAuthenticated(false));
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);