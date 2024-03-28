import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {},
    reducers: {
        toggleListOpen: (state, action) => {
            const {title} = action.payload;
            state[title] =  !state[title];
        },
    },
});

export const { toggleListOpen } = listSlice.actions;

export default listSlice.reducer