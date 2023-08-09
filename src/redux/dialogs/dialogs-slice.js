import { createSlice } from "@reduxjs/toolkit";
import { getAllDialogs } from "./dialogs-operations";

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogs: [],
        isLoading: false
    },
    extraReducers: (builder)=> {
        builder
        .addCase(getAllDialogs.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getAllDialogs.fulfilled, (state, payload)=> {
            state.dialogs = payload
            state.isLoading =false
        })
    }

})

export const dialogsReducer = dialogsSlice.reducer