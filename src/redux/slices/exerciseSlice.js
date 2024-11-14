import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    listExercise: {},
    gender: true,
    totalExercise: 0
}

export const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        setExercise: (state, action) => ({
            ...state,
            listExercise: action.payload
        }),
        setGender: (state, action) => ({
            ...state,
            gender: action.payload
        }),
        setTotalExercise: (state, action) => ({
            ...state,
            totalExercise: action.payload
        }),
    },
})

export const { setExercise, setGender, setTotalExercise } = exerciseSlice.actions

export default exerciseSlice.reducer


