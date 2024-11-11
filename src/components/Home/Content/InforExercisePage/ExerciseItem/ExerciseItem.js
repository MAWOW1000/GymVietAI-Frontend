import './ExerciseItem.scss'
import Step from './Step'
const ExerciseItem = ({ inforExercise, gender }) => {
    const typeVideo = gender ? 'video_female' : 'video_male'
    let inforExercise_description = inforExercise.description
    let inforExercise_link_description = inforExercise.link_description

    inforExercise_description = inforExercise_description ? inforExercise_description.replace(/\*n/g, '*\n').replace(/\.n/g, '.\n').replace(/\)n/g, ')\n\n') : ''
    inforExercise_link_description = inforExercise_link_description.replace(/\?v=([^&]+).*/, '/$1');
    return (
        <>
            <div className='exerciseItem'>
                <div className='exerciseItem__header'>
                    <h2 style={{ marginBottom: 0 }}>{inforExercise.name}</h2>
                </div>
                <div className='exerciseItem__video row g-2' style={{ marginTop: "0px" }}>
                    <button className={`exerciseItem__video-level ${inforExercise['Difficulty.name']}`}>
                        {inforExercise['Difficulty.name']}
                    </button>
                    <video style={{ marginTop: "0px" }} src={inforExercise[typeVideo].split(',')[0]} loop="true" autoplay="autoplay" playsinline muted className='col-6'>
                    </video>
                    <video style={{ marginTop: "0px" }} src={inforExercise[typeVideo].split(',')[1]} loop="true" autoplay="autoplay" conrt playsinline muted className='col-6'>
                    </video>
                </div>
                <div className='exerciseItem__step'>
                    <Step steps={inforExercise.step} />
                </div>
            </div>


            {
                inforExercise.description ?
                    <div className='exerciseItem__description'>
                        <h4>Detail Description</h4>
                        {
                            inforExercise_description.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))
                        }
                        <iframe className='exerciseItem__link-description' src={inforExercise_link_description}> </iframe>
                    </div>
                    :
                    <></>
            }

        </>

    )
}

export default ExerciseItem
