import './Step.scss'
const Step = ({steps}) => {
    const stepArr = steps.split('.n').filter(item => item.trim() !== "").map((item) => {
        const trimmedItem = item.trim();
        const parts = trimmedItem.match(/^(\d+)\.\s(.*)/); // Regular expression to split

        if (parts) {
            return [parts[1], parts[2] + "."]; // Return an array with the number and text (with period)
        } else {
            return ["", trimmedItem + "."]; // Handle cases where the number isn't present
        }
    });
    return (
        <dl className="stepExerciseDivList">
            {
                stepArr.map((step, index) => (
                    <div key={`step ${index}`} className="stepExerciseDiv">
                        <div className="row">
                            <dt className="col-1 stepExerciseNumber">
                                <div className='stepExerciseNumber__after'></div>
                                <button className='stepExerciseNumber__button'>{step[0]}</button>
                            </dt>
                            <dd className="col-11 stepExerciseDescription">
                                <p>{step[1]}</p>
                            </dd>
                        </div>
                    </div>
                ))
            }
        </dl>
    )
}

export default Step
