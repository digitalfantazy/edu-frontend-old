import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/constants.js";

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  // console.log(localStorage.getItem("access"))
  try {
    const res = await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      credentials: "include",
    });
    const data = await res.json();
    if (res.status === 200) {
      localStorage.removeItem("access");
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
