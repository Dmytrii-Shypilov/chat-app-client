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
        .addCase(getAllDialogs.fulfilled, (state, {payload})=> {
            console.log('dialogs', payload)
            state.dialogs = payload.dialogs
            state.isLoading = false
        })
    }

})

export const dialogsReducer = dialogsSlice.reducer