import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import exerciseReducer from './slices/exerciseSlice'
import systemSlice from './slices/systemSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        exercise: exerciseReducer,
        system: systemSlice
    },
})