import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    listExercise: {},
    gender: true
}

export const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        setExercise: (state, action) => {
            state.listExercise = action.payload
        },
        setGender: (state, action) => {
            state.gender = action.payload
        },
    },
})

export const { setExercise, setGender } = exerciseSlice.actions

export default exerciseSlice.reducer


