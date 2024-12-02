import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../util/exerciseAxios/axiosCustomize'
import { getNumberOfExercise, getEquipments, getGroupMuscles } from '../../util/exerciseAxios/exerciseApi'

const initialState = {
    listExercise: {},
    gender: true,
    totalExercise: 0,
    equipments: [],
    groupMuscles: [],
    difficulty: ["Novice", "Beginner", "Intermediate", "Advanced"]
}

export const getNoExercise = createAsyncThunk("getNoExercise", async () => {
    const res = await getNumberOfExercise();
    return res?.DT
})
export const getEquipment = createAsyncThunk("getEquipment", async () => {
    const res = await getEquipments();
    return res?.DT
})
export const getGroupMuscle = createAsyncThunk("getGroupMuscle", async () => {
    const res = await getGroupMuscles();
    return res?.DT
})

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
    extraReducers: (builder) => {
        builder.addCase(getNoExercise.pending, (state, action) => ({
            ...state,
        }))
        builder.addCase(getNoExercise.fulfilled, (state, action) => ({
            ...state,
            totalExercise: action.payload
        }))
        builder.addCase(getNoExercise.rejected, (state, action) => ({
            ...state
        }))

        // get Equipment
        builder.addCase(getEquipment.pending, (state, action) => ({
            ...state,
        }))
        builder.addCase(getEquipment.fulfilled, (state, action) => ({
            ...state,
            equipments: action.payload
        }))
        builder.addCase(getEquipment.rejected, (state, action) => ({
            ...state
        }))

        // get Group Muscle
        builder.addCase(getGroupMuscle.pending, (state, action) => ({
            ...state,
        }))
        builder.addCase(getGroupMuscle.fulfilled, (state, action) => ({
            ...state,
            groupMuscles: action.payload
        }))
        builder.addCase(getGroupMuscle.rejected, (state, action) => ({
            ...state
        }))
    }
})

export const { setExercise, setGender, setTotalExercise } = exerciseSlice.actions

export default exerciseSlice.reducer


