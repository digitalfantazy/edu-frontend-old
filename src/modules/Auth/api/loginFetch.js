import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUser } from "./getUserFetch.js";
import { API_URL } from "../../../utils/constants.js";

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    const body = JSON.stringify({
      username,
      password,
    });
    // let allCookies = '';
    // allCookies = document.cookie;
    // console.log(allCookies)

    try {
      const res = await fetch(`${API_URL}/api/auth/token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
        credentials: "include",
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 200) {
        const { dispatch } = thunkAPI;
        const accessToken = data.access;
        localStorage.setItem("access", accessToken);

        dispatch(getUser());
        // dispatch(setAuthenticated(true));
        return data;
      } else {
        // console.log(data);
        return thunkAPI.rejectWithValue(data.detail);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
