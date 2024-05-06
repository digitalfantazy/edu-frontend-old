import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../../utils/constants.js";

export const sendCode = createAsyncThunk(
  "auth/verification/resend",
  async ({ username, opt_code }, thunkAPI) => {
    const body = JSON.stringify({
      opt_code,
    });
    // console.log(body)
    try {
      const res = await fetch(`${API_URL}/api/auth/verify-email/${username}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("expirationTime");
        return data;
      } else {
        console.log(data)
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
