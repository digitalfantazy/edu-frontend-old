import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/constants";

export const getPDFDocument = createAsyncThunk("literature/getPDFDocument", async ({ filename }, thunkAPI) => {
  try {
    const res = await fetch(`${API_URL}/api/get-pdf/${filename}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const data = await res.blob();

    if (res.status === 200) {
      return URL.createObjectURL(data);
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
