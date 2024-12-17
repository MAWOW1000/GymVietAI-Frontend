import axios from './axiosCustomize';

const postCreateNutritionPlan = ({ Weight, Height, Age, Gender, Goal, ActivityLevel, restrictions, allergens }) => {
    // Format gender to match API requirements
    const formattedGender = Gender.toLowerCase() === 'male' ? 'Male' : 'Female';

    // Validate inputs
    if (!Gender || !Weight || !Height || !Age || !Goal || !ActivityLevel) {
        throw new Error("Required fields: Gender, Weight, Height, Age, Goal, and ActivityLevel");
    }

    const URL_API = "/create-nutrition-plan";
    const data = {
        Gender: formattedGender,
        Weight: parseFloat(Weight),
        Height: parseFloat(Height),
        Age: parseInt(Age),
        Goal,
        ActivityLevel,
        restrictions: restrictions.includes('none') ? [] : restrictions,
        allergens: allergens.includes('none') ? [] : allergens,
    }
    return axios.post(URL_API, data)
}

export {
    postCreateNutritionPlan
}