import './OptionItem.scss'
const OptionItem = ({ col, options, title }) => {
    return (
        <div className="optionItemDiv">
            <div className="optionItemHeading">
                <h3>{title}</h3>
            </div>
            <div className={`optionExerciseContent row`}>
                {options.map((option, index) => (
                    <div className={`optionExerciseItem ${col}`}>
                        <input type="checkbox" id={`${option.name}Checkbox`} />
                        <label htmlFor={`${option.name}Checkbox`}>{option.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionItem