import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './ExerciseItem.scss'
import Step from './Step'

const ExerciseItem = ({ inforExercise, gender }) => {
    const typeVideo = gender ? 'video_female' : 'video_male'
    const { language } = useSelector((state) => state.system);

    const handleVideoClick = (e) => {
        const video = e.target;
        
        // Toggle fullscreen
        if (!document.fullscreenElement) {
            video.classList.add('fullscreen');
            video.requestFullscreen();
            video.controls = true;
            video.muted = false;
        } else {
            document.exitFullscreen();
            video.classList.remove('fullscreen');
            video.controls = false;
            video.muted = true;
        }
    }

    // Listen for fullscreen change
    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                const videos = document.querySelectorAll('video');
                videos.forEach(video => {
                    video.classList.remove('fullscreen');
                    video.controls = false;
                    video.muted = true;
                });
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

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
                    <video 
                        style={{ marginTop: "0px" }} 
                        src={inforExercise[typeVideo].split(',')[0]} 
                        loop="true" 
                        autoPlay 
                        playsInline 
                        muted 
                        className='col-6'
                        onClick={handleVideoClick}
                    >
                    </video>
                    <video 
                        style={{ marginTop: "0px" }} 
                        src={inforExercise[typeVideo].split(',')[1]} 
                        loop="true" 
                        autoPlay 
                        playsInline 
                        muted 
                        className='col-6'
                        onClick={handleVideoClick}
                    >
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
