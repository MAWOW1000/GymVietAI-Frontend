import './Step.scss'
const Step = (prop) => {
    const { steps } = prop
    const stepArr = steps.trim().split('\n').map(step => {
        const parts = step.split(". ");
        return [parts[0], parts.slice(1).join('. ')];
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