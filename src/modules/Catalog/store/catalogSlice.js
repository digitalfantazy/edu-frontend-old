import { createSlice } from "@reduxjs/toolkit";

import { getPDF } from "../index";

const initialState = {
  loading: false,
  pdfUrl: null,
  error: null,
  listOpen: {},
  activeItem: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    toggleListOpen: (state, action) => {
      const { title } = action.payload;
      state.listOpen[title] = !state.listOpen[title];
    },
    clearPdfUrl: (state) => {
      state.pdfUrl = null;
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPDF.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPDF.fulfilled, (state, action) => {
        state.loading = false;
        state.pdfUrl = action.payload;
      })
      .addCase(getPDF.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleListOpen, clearPdfUrl, setActiveItem } = catalogSlice.actions;
export default catalogSlice.reducer;
