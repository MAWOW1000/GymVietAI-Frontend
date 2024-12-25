import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { useEffect } from 'react'; // Import useEffect hook

import './ExerciseItem.scss'
import Step from './Step'
import { setExercise, setGender } from '../../../../../redux/slices/exerciseSlice'
const ExerciseItem = ({ listExercise, gender, page, setPage, totalPage }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const language = useSelector((state) => state.system.language)

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

    const handleClick = (exercise) => {
        // Save current list state to localStorage
        localStorage.setItem('previousExerciseState', JSON.stringify({
            listExercise,
            gender,
            page,
            totalPage
        }));

        dispatch((setExercise(exercise)))
        dispatch((setGender(gender)))
        navigate('../information')
    }
    const handlePageClick = (e) => {
        setPage(e.selected + 1)
    }
    return (
        <>{gender ?
            <>
                {listExercise.map((exercise, index) => (
                    <div key={`exercise ${index}`} className='exerciseItem'>
                        <div className='exerciseItem__header' onClick={() => handleClick(exercise)}>
                            <h2 style={{ marginBottom: 0 }}>{exercise.name}</h2>
                        </div>
                        <div className='exerciseItem__video row g-2' style={{ marginTop: "0px" }}>
                            <button className={`exerciseItem__video-level ${exercise['Difficulty.name']}`} >
                                {language === 'VI' ? (
                                    (() => {
                                        switch (exercise['Difficulty.name']) {
                                            case "Beginner":
                                                return "Tập sự";
                                            case "Intermediate":
                                                return "Trung cấp";
                                            case "Advanced":
                                                return "Nâng cao";
                                            case "Novice":
                                                return "Người mới";
                                            default:
                                                return exercise['Difficulty.name'];
                                        }
                                    })()
                                ) : exercise['Difficulty.name']}
                            </button>
                            <video 
                                style={{ marginTop: "0px" }} 
                                src={exercise["video_female"].split(',')[0]} 
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
                                src={exercise["video_female"].split(',')[1]} 
                                loop="true" 
                                autoPlay 
                                playsInline 
                                muted 
                                className='col-6'
                                onClick={handleVideoClick}
                            >
                            </video>
                        </div>
                        {exercise.step ?
                            <div className='exerciseItem__step'>
                                <Step steps={language === 'VI' ? exercise.step_vi : exercise.step} />
                            </div>
                            :
                            <></>
                        }

                    </div>
                ))}
            </>
            :
            <>
                {listExercise.map((exercise, index) => (
                    <div key={`exercise ${index}`} className='exerciseItem'>
                        <div className='exerciseItem__header' onClick={() => handleClick(exercise)}>
                            <h2 style={{ marginBottom: 0 }}>{exercise.name}</h2>
                        </div>
                        <div className='exerciseItem__video row g-2' style={{ marginTop: "0px" }}>
                            <button className={`exerciseItem__video-level ${exercise['Difficulty.name']}`}>
                                {language === 'VI' ? (
                                    (() => {
                                        switch (exercise['Difficulty.name']) {
                                            case "Beginner":
                                                return "Tập sự";
                                            case "Intermediate":
                                                return "Trung cấp";
                                            case "Advanced":
                                                return "Nâng cao";
                                            case "Novice":
                                                return "Người mới";
                                            default:
                                                return exercise['Difficulty.name'];
                                        }
                                    })()
                                ) : exercise['Difficulty.name']}
                            </button>
                            <video 
                                style={{ marginTop: "0px" }} 
                                src={exercise["video_male"].split(',')[0]} 
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
                                src={exercise["video_male"].split(',')[1]} 
                                loop="true" 
                                autoPlay 
                                playsInline 
                                muted 
                                className='col-6'
                                onClick={handleVideoClick}
                            >
                            </video>
                        </div>
                        {exercise.step ?
                            <div className='exerciseItem__step'>
                                <Step steps={language === 'VI' ? exercise.step_vi : exercise.step} />
                            </div>
                            :
                            <></>
                        }

                    </div>
                ))}
            </>
        }
            <div className='exerciseItem__Pagination'>
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={totalPage}
                    previousLabel={language === 'VI' ? "Trước" : "Previous"} 
                    nextLabel={language === 'VI' ? "Sau" : "Next"} 
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={page - 1}
                />
            </div>
        </>
    )
}

export default ExerciseItem
