import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk('character/getCharacters', async () => {
    const res = await axios.get('https://breakingbadapi.com/api')
    return res.data
})

const characterSlice = createSlice({
    name: "character",
    initialState: {
        items: [

        ]
    },
    reducers: {

    },
    extraReducers: {
        [fetchCharacters.fulfilled]: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const selectCharacters = (state) => state.character.items
export default characterSlice.reducer
