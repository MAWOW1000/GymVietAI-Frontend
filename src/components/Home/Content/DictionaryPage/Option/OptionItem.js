import './OptionItem.scss'
const OptionItem = (props) => {
    const { col, options, title, selectedMuscle, setSelectedMuscle, selectedEquipment, setSelectedEquipment, selectedDifficulty, setSelectedDifficulty } = props
    function toggleElementInArray(arr, element) {
        if (arr?.includes(element)) {
            // Element exists, remove it
            return arr.filter(item => item !== element); // Create a new array without the element
        } else {
            // Element doesn't exist, add it
            return [...arr, element]; // Create a new array with the element added
        }
    }
    const handleClick = (e) => {
        const value = e.target.value;

        if (setSelectedMuscle && title === "Muscles") { // Check title for specific setter
            setSelectedMuscle(toggleElementInArray(selectedMuscle, value));
        }
        if (setSelectedEquipment && title === "Equipment") { // Check title for specific setter
            setSelectedEquipment(toggleElementInArray(selectedEquipment, value));
        }
        if (setSelectedDifficulty && title === "Difficulty") { // Check title for specific setter
            setSelectedDifficulty(toggleElementInArray(selectedDifficulty, value));
        }
    }
    return (
        <div className="optionItemDiv">
            <div className="optionItemHeading">
                <h3>{title}</h3>
            </div>
            <div className={`optionExerciseContent row`}>
                {options.map((option, index) => (
                    <div className={`optionExerciseItem ${col}`}>
                        <input type="checkbox" id={`${option.name}Checkbox`} value={option.name} onClick={handleClick}
                            checked={selectedDifficulty?.includes(option.name) || selectedEquipment?.includes(option.name)
                                || selectedMuscle?.includes(option.name)}
                        />
                        <label htmlFor={`${option.name}Checkbox`}>{option.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionItem