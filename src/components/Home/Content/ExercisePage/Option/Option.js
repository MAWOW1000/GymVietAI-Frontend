import './Option.scss'
import ModelBack from '../Modal/ModelBack'
import ModelFront from '../Modal/ModelFront'
const Option = () => {
    const options = [
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
    return (
        <div className="optionExercise">
            <div className="optionExerciseHeader">
                <h3>Optional</h3>
            </div>

            <div className="row exercisePage__model">
                <div className="col-6 ">
                    <ModelFront />
                </div>
                <div className="col-6">
                    <ModelBack />
                </div>
            </div>
            <hr />
            <div className="optionExerciseContent row col-12">
                {options.map((option, index) => (
                    <div className="optionExerciseItem col-6">
                        <input type="checkbox" id={`${option.name}Checkbox`} />
                        <label htmlFor={`${option.name}Checkbox`}>{option.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Option;