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

const postCreateExercise = (Gender, Weight, Height, Age, continent) => {
    // Validate inputs
    if (!Gender || !Weight || !Height || !Age || !continent) {
        throw new Error("All fields are required");
    }

    // Capitalize Gender
    const formattedGender = Gender.toLowerCase() === 'male' ? 'Male' :
        Gender.toLowerCase() === 'female' ? 'Female' : Gender;

    const URL_API = "/create-workout-plan";
    const data = {
        Gender: formattedGender,
        Weight: +Weight,
        Height: +Height,
        Age: +Age,
        continent: continent ? continent : null,
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

export const searchExercise = async (searchTerm, limit = 10, page = 1) => {
    try {
        const response = await axios.get(`/search?searchTerm=${encodeURIComponent(searchTerm)}&limit=${limit}&page=${page}`);
        return response;
    } catch (error) {
        console.log('>> error:', error);
        return {
            EC: -1,
            EM: 'Something wrong ...',
            DT: []
        };
    }
};

const createExercise = (data) => {
    return axios.post("/create", data);
}

const updateExercise = (exerciseData) => {
    const { id, ...data } = exerciseData;
    return axios.put(`/update/${id}`, data);
}

const deleteExercise = (id) => {
    return axios.delete(`/delete/${id}`);
}

const getAllExercises = (page = 1, limit = 10) => {
    const URL_API = `/options-pagination`;
    return axios.post(URL_API, {
        groupMuscle: null,
        difficulty: null, 
        equipment: null,
        limit: +limit,
        page: +page
    });
};

export {
    postExerciseByOptions, getEquipments, getGroupMuscles,
    postExerciseByOptionsPagination, postExerciseByOptionsMultiple, getNumberOfExercise,
    postCreateExercise, createExercise, updateExercise, deleteExercise, getAllExercises
}