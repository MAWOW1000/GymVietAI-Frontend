import axios from './axiosCustomize';
const qs = require('qs');
// const getExerciseByOptions = (group_muscle_id, difficulty_id, equipment_id) => {
//     const URL_API = "/options";
//     const data = {
//         group_muscle_id, difficulty_id, equipment_id
//     }

//     return axios.post(URL_API, data)
// }

const postExerciseByOptions = (groupMuscle, difficulty, equipment) => {
    const URL_API = "/options";
    const data = {
        groupMuscle: groupMuscle ? groupMuscle : null,
        difficulty: difficulty ? difficulty : null,
        equipment: equipment ? equipment : null
    }
    return axios.post(URL_API, data)
}

const postExerciseByOptionsPagination = (groupMuscle, difficulty, equipment, limit, page) => {
    const URL_API = "/options-pagination";
    const data = {
        groupMuscle: groupMuscle ? groupMuscle : null,
        difficulty: difficulty ? difficulty : null,
        equipment: equipment ? equipment : null,
        limit: +limit,
        page: +page
    }
    return axios.post(URL_API, data)
}

const postExerciseByOptionsMultiple = (groupMuscle, difficulty, equipment, limit, page) => {
    const URL_API = "/options-multiple-choice";
    const data = {
        groupMuscle: groupMuscle ? groupMuscle : null,
        difficulty: difficulty ? difficulty : null,
        equipment: equipment ? equipment : null,
        limit: +limit,
        page: +page
    }
    return axios.post(URL_API, data)
}

const postCreateExercise = (Gender, Weight, Height, Age, continent, language) => {
    // Validate inputs
    if (!Gender || !Weight || !Height || !Age || !continent || !language) {
        throw new Error("All fields are required");
    }

    // Capitalize Gender
    const formattedGender = Gender.toLowerCase() === 'male' ? 'Male' : 
                            Gender.toLowerCase() === 'female' ? 'Female' : Gender;

    const URL_API = "/create-exercise";
    const data = {
        Gender: formattedGender,
        Weight: +Weight,
        Height: +Height,
        Age: +Age,
        continent: continent ? continent : null,
        language: language ? language : null
    }
    return axios.post(URL_API, data)
}

const getEquipments = () => {
    const URL_API = "/equipments";
    return axios.get(URL_API)
}

const getGroupMuscles = () => {
    const URL_API = "/group-muscles";
    return axios.get(URL_API)
}

const getNumberOfExercise = () => {
    const URL_API = "/number-of-exercise";
    return axios.get(URL_API)
}

export {
    postExerciseByOptions, getEquipments, getGroupMuscles,
    postExerciseByOptionsPagination, postExerciseByOptionsMultiple, getNumberOfExercise,
    postCreateExercise
}