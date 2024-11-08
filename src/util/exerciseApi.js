import axios from './axiosCustomize';
const qs = require('qs');
// const getExerciseByOptions = (group_muscle_id, difficulty_id, equipment_id) => {
//     const URL_API = "/options";
//     const data = {
//         group_muscle_id, difficulty_id, equipment_id
//     }

//     return axios.post(URL_API, data)
// }

const getExerciseByOptions = (groupMuscle, difficulty, equipment) => {
    const URL_API = "/options";
    const data = {
        groupMuscle: groupMuscle ? groupMuscle : null,
        difficulty: difficulty ? difficulty : null,
        equipment: equipment ? equipment : null
    }
    console.log('>>check data  ', data)
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

export { getExerciseByOptions, getEquipments, getGroupMuscles }