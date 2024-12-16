import './ExerciseItem.scss'
import Step from './Step'
import { useSelector } from 'react-redux'
const ExerciseItem = ({ inforExercise, gender }) => {
    const typeVideo = gender ? 'video_female' : 'video_male'
    const { language } = useSelector((state) => state.system);

    let inforExercise_description = language === 'VI' ? inforExercise.description_vi : inforExercise.description;
    let inforExercise_link_description = inforExercise.link_description;
    let steps = language === 'VI' ? inforExercise.step_vi : inforExercise.step;

    inforExercise_description = inforExercise_description ? inforExercise_description.replace(/\*n/g, '*\n').replace(/\.n/g, '.\n').replace(/\)n/g, ')\n\n') : ''
    inforExercise_link_description = inforExercise_link_description.replace(/\?v=([^&]+).*/, '/$1');
    let difficultyName = inforExercise['Difficulty.name'] || inforExercise.Difficulty.name;
    return (
        <>
            <div className='exerciseItem'>
                <div className='exerciseItem__header'>
                    <h2 style={{ marginBottom: 0 }}>{inforExercise.name}</h2>
                </div>
                <div className='exerciseItem__video row g-2' style={{ marginTop: "0px" }}>
                    <button className={`exerciseItem__video-level ${difficultyName}`}>
                        {language === 'VI' ? (
                            (() => {
                                switch (difficultyName) {
                                    case "Beginner":
                                        return "Tập sự";
                                    case "Intermediate":
                                        return "Trung cấp";
                                    case "Advanced":
                                        return "Nâng cao";
                                    case "Novice":
                                        return "Người mới";
                                    default:
                                        return difficultyName;
                                }
                            })()
                        ) : difficultyName}
                    </button>
                    <video style={{ marginTop: "0px" }} src={inforExercise[typeVideo].split(',')[0]} loop="true" autoplay="autoplay" playsinline muted className='col-6'>
                    </video>
                    <video style={{ marginTop: "0px" }} src={inforExercise[typeVideo].split(',')[1]} loop="true" autoplay="autoplay" conrt playsinline muted className='col-6'>
                    </video>
                </div>
                <div className='exerciseItem__step'>
                    <Step steps={steps} />
                </div>
            </div>


            {
                inforExercise.description ?
                    <div className='exerciseItem__description'>
                        <h4>
                            {
                                language === 'VI' ?
                                    "Miêu tả chi tiết" :
                                    "Detail Description"
                            }
                        </h4>
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
