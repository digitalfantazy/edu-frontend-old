import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/constants";

export const getPDF = createAsyncThunk("pdf/getPDF", async ({ param }, thunkAPI) => {
  try {
    const res = await fetch(`${API_URL}/api/get-pdf/${param}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    // console.log(res)
    const data = await res.blob();
    // console.log(data)

    if (res.status === 200) {
      return URL.createObjectURL(data);
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
