import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestsAPI } from "../../services/requests";

export const getAllDialogs = createAsyncThunk(
    'allDialogs/get',
    async (token, {rejectWithValue}) => {
        try {
            const dialogs = await requestsAPI.fetchAllDialogs(token)
        } catch (error) {
            rejectWithValue(error)
        }
        
    }
)