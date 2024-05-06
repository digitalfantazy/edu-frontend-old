import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../../utils/constants.js";

export const resendCode = createAsyncThunk("auth/verification", async ({ email }, thunkAPI) => {
  const body = JSON.stringify({
    email,
  });
  console.log(body)
  try {
    const res = await fetch(`${API_URL}/api/auth/verify-email/user/resendcode`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await res.json();

    if (res.status === 200) {
      console.log(data);
      return data;
    } else {
      console.log(data);
      return thunkAPI.rejectWithValue(data);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
