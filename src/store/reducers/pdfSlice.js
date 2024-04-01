import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../utils/constants";

export const getPDF = createAsyncThunk(
    "pdf/getPDF",
    async ({ labId, param}, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/pdf/${labId}/${param}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/pdf'
                }
            })
            console.log(res)
            const data = await res.blob();
            console.log(data)

            if (res.status === 200) {
                return URL.createObjectURL(data);
            } else { 
                return thunkAPI.rejectWithValue(data)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const initialState ={ 
    loading: false,
    pdfUrl: null,
    error: null,
};

const pdfSlice = createSlice({
    name: 'pdf',
    initialState,
    reducers: {},
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
            state.error = action.payload;;
        })    
    },
})

export default pdfSlice.reducer;