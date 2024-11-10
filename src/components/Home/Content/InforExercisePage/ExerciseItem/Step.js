import './Step.scss'
const Step = ({ steps }) => {
    const stepArr = steps.trim().split('\n').map(line => {
        const [number, ...textParts] = line.split('.');
        return [number.trim(), textParts.join('.').trim()];
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

