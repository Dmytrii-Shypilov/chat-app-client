import { createSlice } from "@reduxjs/toolkit";
import { getAllDialogs } from "./dialogs-operations";

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogs: [],
        isLoading: false
    },
    reducers: {
        addDialog: (state, {payload}) => {
            state.dialogs.push(payload.dialog)
        },
        updateAcceptedStatus: (state, {payload}) => {
            console.log('invite update', payload)
            const {dialogId, acceptedBy} = payload
            const dialog = state.dialogs.find(el => el._id === dialogId)
            console.log(dialog)
            const participant = dialog.participants.find(el=> el.id === acceptedBy)
            participant.accepted = true
        }
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
export const dialogsActions = dialogsSlice.actions