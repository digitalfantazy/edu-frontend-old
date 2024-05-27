import { createSlice } from "@reduxjs/toolkit";
import { getCards } from "../api/getCards";
import { getPDFDocument } from "../api/getPDFDocument";

const initialState = {
  loading: false,
  error: null,
  cards: [],
  pdfFile: null,
};

const literatureSlice = createSlice({
  name: "lireature",
  initialState,
  reducers: {
    clearPdfFile: (state) => {
      state.pdfFile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPDFDocument.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPDFDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.pdfFile = action.payload;
      })
      .addCase(getPDFDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearPdfFile } = literatureSlice.actions;
export default literatureSlice.reducer;
