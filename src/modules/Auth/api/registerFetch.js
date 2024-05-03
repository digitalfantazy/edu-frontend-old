import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from "../../../utils/constants.js";

import { getUser } from "./getUserFetch.js";

export const register = createAsyncThunk(
  "users/register",
  async ({ username, email, password, name }, thunkAPI) => {
    const body = JSON.stringify({
      username,
      email,
      password,
      name,
    });
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await res.json();
      console.log(data)
      if (res.status === 201) {

        thunkAPI.dispatch(getUser())
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);