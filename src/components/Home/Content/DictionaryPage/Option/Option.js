import './Option.scss'
import OptionItem from './OptionItem'
import { FaFilter } from "react-icons/fa";
const Option = () => {
    const optionsMuscles = [
        {
            "groupMuscleID": 1,
            "name": "Biceps"
        },
        {
            "groupMuscleID": 2,
            "name": "Long Head Bicep"
        },
        {
            "groupMuscleID": 3,
            "name": "Short Head Bicep"
        },
        {
            "groupMuscleID": 4,
            "name": "Traps (mid-back)"
        },
        {
            "groupMuscleID": 5,
            "name": "Lower back"
        },
        {
            "groupMuscleID": 6,
            "name": "Abdominals"
        },
        {
            "groupMuscleID": 7,
            "name": "Lower Abdominals"
        },
        {
            "groupMuscleID": 8,
            "name": "Upper Abdominals"
        },
        {
            "groupMuscleID": 9,
            "name": "Calves"
        },
        {
            "groupMuscleID": 10,
            "name": "Tibialis"
        },
        {
            "groupMuscleID": 11,
            "name": "Soleus"
        },
        {
            "groupMuscleID": 12,
            "name": "Gastrocnemius"
        },
        {
            "groupMuscleID": 13,
            "name": "Forearms"
        },
        {
            "groupMuscleID": 14,
            "name": "Wrist Extensors"
        },
        {
            "groupMuscleID": 15,
            "name": "Wrist Flexors"
        },
        {
            "groupMuscleID": 16,
            "name": "Glutes"
        },
        {
            "groupMuscleID": 17,
            "name": "Gluteus Medius"
        },
        {
            "groupMuscleID": 18,
            "name": "Gluteus Maximus"
        },
        {
            "groupMuscleID": 19,
            "name": "Hamstrings"
        },
        {
            "groupMuscleID": 20,
            "name": "Medial Hamstrings"
        },
        {
            "groupMuscleID": 21,
            "name": "Lateral Hamstrings"
        },
        {
            "groupMuscleID": 22,
            "name": "Lats"
        },
        {
            "groupMuscleID": 23,
            "name": "Shoulders"
        },
        {
            "groupMuscleID": 24,
            "name": "Lateral Deltoid"
        },
        {
            "groupMuscleID": 25,
            "name": "Anterior Deltoid"
        },
        {
            "groupMuscleID": 26,
            "name": "Posterior Deltoid"
        },
        {
            "groupMuscleID": 27,
            "name": "Triceps"
        },
        {
            "groupMuscleID": 28,
            "name": "Long Head Tricep"
        },
        {
            "groupMuscleID": 29,
            "name": "Lateral Head Triceps"
        },
        {
            "groupMuscleID": 30,
            "name": "Medial Head Triceps"
        },
        {
            "groupMuscleID": 31,
            "name": "Traps"
        },
        {
            "groupMuscleID": 32,
            "name": "Upper Traps"
        },
        {
            "groupMuscleID": 33,
            "name": "Lower Traps"
        },
        {
            "groupMuscleID": 34,
            "name": "Quads"
        },
        {
            "groupMuscleID": 35,
            "name": "Inner Thigh"
        },
        {
            "groupMuscleID": 36,
            "name": "Inner Quadriceps"
        },
        {
            "groupMuscleID": 37,
            "name": "Outer Quadricep"
        },
        {
            "groupMuscleID": 38,
            "name": "Rectus Femoris"
        },
        {
            "groupMuscleID": 39,
            "name": "Chest"
        },
        {
            "groupMuscleID": 40,
            "name": "Upper Pectoralis"
        },
        {
            "groupMuscleID": 41,
            "name": "Mid and Lower Chest"
        },
        {
            "groupMuscleID": 42,
            "name": "Obliques"
        },
        {
            "groupMuscleID": 43,
            "name": "Hands"
        },
        {
            "groupMuscleID": 45,
            "name": "Feet"
        },
        {
            "groupMuscleID": 46,
            "name": "Front Shoulders"
        },
        {
            "groupMuscleID": 47,
            "name": "Rear Shoulders"
        },
        {
            "groupMuscleID": 48,
            "name": "Neck"
        },
        {
            "groupMuscleID": 49,
            "name": "Groin"
        }
    ]
    const optionsEquipments = [
        {
            "equimentID": 1,
            "name": "Barbell"
        },
        {
            "equimentID": 2,
            "name": "Dumbbells"
        },
        {
            "equimentID": 3,
            "name": "Bodyweight"
        },
        {
            "equimentID": 4,
            "name": "Machine"
        },
        {
            "equimentID": 5,
            "name": "Medicine-Ball"
        },
        {
            "equimentID": 6,
            "name": "Kettlebells"
        },
        {
            "equimentID": 7,
            "name": "Stretches"
        },
        {
            "equimentID": 8,
            "name": "Cables"
        },
        {
            "equimentID": 9,
            "name": "Band"
        },
        {
            "equimentID": 10,
            "name": "Plate"
        },
        {
            "equimentID": 11,
            "name": "TRX"
        },
        {
            "equimentID": 12,
            "name": "Yoga"
        },
        {
            "equimentID": 13,
            "name": "Bosu-Ball"
        },
        {
            "equimentID": 14,
            "name": "Vitruvian"
        },
        {
            "equimentID": 15,
            "name": "Cardio"
        },
        {
            "equimentID": 16,
            "name": "Smith-Machine"
        },
        {
            "equimentID": 17,
            "name": "Recovery"
        }
    ]
    const optionsLevels = [
        {
            "levelID": 1,
            "name": "Beginner"
        },
        {
            "levelID": 2,
            "name": "Intermediate"
        },
        {
            "levelID": 3,
            "name": "Advanced",
        },
        {
            "levelID": 4,
            "name": "Novice"
        }
    ]
    return (
        <div className='optionDiv'>
            <div className='optionHeader'>
                <span className='optionHeader__result'>Showing 0 of 1462</span>

                <div className='optionHeader__filter'>
                    <span className='optionHeader__filter--clear'>Clear all</span>
                    <span className='optionHeader__filter--total'> <FaFilter /><span>0 Filters</span></span>
                </div>
            </div>
            <div className='optionContent container row'>
                <div className='optionContent--muscles col-7'>
                    <OptionItem col={"col-3"} options={optionsMuscles} title={"Muscles"} />
                </div>
                <div className='optionContent--equipment col-4'>
                    <OptionItem col={"col-4"} options={optionsEquipments} title={"Equipment"} />
                </div>
                <div className='optionContent--difficult col-1'>
                    <OptionItem col={"col-12"} options={optionsLevels} title={"Difficulty"} />
                </div>
            </div>
        </div>
    )
}

export default Option