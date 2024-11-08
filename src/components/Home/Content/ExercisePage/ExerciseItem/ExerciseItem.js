import './ExerciseItem.scss'
import Step from './Step'
const ExerciseItem = ({ listExercise }) => {
    return (
        <>
            {listExercise.map((exercise, index) => (
                <div key={`exercise ${index}`} className='exerciseItem'>
                    <div className='exerciseItem__header'>
                        <h2 style={{ marginBottom: 0 }}>{exercise.name}</h2>
                    </div>
                    <div className='exerciseItem__video row g-2' style={{ marginTop: "0px" }}>
                        <button className={`exerciseItem__video-level ${exercise['Difficulty.name']}`}>
                            {exercise['Difficulty.name']}
                        </button>
                        <video style={{ marginTop: "0px" }} src={exercise["video_male"].split(',')[0]} loop="true" autoplay="autoplay" playsinline muted className='col-6'>
                        </video>
                        <video style={{ marginTop: "0px" }} src={exercise["video_male"].split(',')[1]} loop="true" autoplay="autoplay" conrt playsinline muted className='col-6'>
                        </video>
                    </div>
                    <div className='exerciseItem__step'>
                        <Step steps={exercise.step} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default ExerciseItem
