import './OptionItem.scss'
const OptionItem = (props) => {
    const { col, options, title, selectedMuscle, setSelectedMuscle, selectedEquipment, setSelectedEquipment, selectedDifficulty, setSelectedDifficulty } = props
    const handleClick = (e) => {
        const value = e.target.value;

        if (setSelectedMuscle && title === "Muscles") { // Check title for specific setter
            setSelectedMuscle(value);
        }
        if (setSelectedEquipment && title === "Equipment") { // Check title for specific setter
            setSelectedEquipment(value);
        }
        if (setSelectedDifficulty && title === "Difficulty") { // Check title for specific setter
            setSelectedDifficulty(value);
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
                            checked={option.name === selectedDifficulty || option.name === selectedEquipment || option.name === selectedMuscle}
                        />
                        <label htmlFor={`${option.name}Checkbox`}>{option.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionItem