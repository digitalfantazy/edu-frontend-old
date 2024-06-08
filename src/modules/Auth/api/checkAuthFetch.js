import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/constants.js";
import { getUser } from "./getUserFetch.js";
import { refreshToken } from "./refreshTokenFetch.js";
import { setAuthenticated } from "../store/authSlice.js";


export const checkAuth = createAsyncThunk(
    "users/verify",
    async (_, thunkAPI) => {
      try {
        // const refresh = Cookies.get('refresh_token')
        const access = localStorage.getItem("access");
        // console.log(access)
        const res = await fetch(`${API_URL}/api/auth/token/verify/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: access }),
        });
  
        const data = await res.json();
  
        if (res.status === 200) {
          console.log("прошел запрос check");
          // const { dispatch } = thunkAPI;
  
          thunkAPI.dispatch(getUser());
          thunkAPI.dispatch(setAuthenticated(true));
          // console.log(data)
          return data;
        } else if (res.status === 401) {
          const refreshTokenResult = thunkAPI.dispatch(refreshToken());
          if (refreshTokenResult.meta.requestStatus === "fulfilled") {
            // console.log(data)
            return data;
          } else {
            return thunkAPI.rejectWithValue(data);
          }
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  );