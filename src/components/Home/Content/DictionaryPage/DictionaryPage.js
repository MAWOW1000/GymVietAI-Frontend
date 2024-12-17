import { useEffect, useState } from 'react';
import './DictionaryPage.scss'
import ListExercise from './ListExercise/ListExercise';
import Option from './Option/Option';
import { postExerciseByOptionsMultiple, getNumberOfExercise } from '../../../../util/exerciseAxios/exerciseApi';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalExercise } from '../../../../redux/slices/exerciseSlice';

const DictionaryPage = () => {
    const dispatch = useDispatch()
    const [exercises, setExercises] = useState([])
    const [selectedMuscle, setSelectedMuscle] = useState([]);
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState([]);
    const [gender, setGender] = useState(true); //false is Man, true is Woman =))
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [noExercise, setNoExercise] = useState(0)
    const language = useSelector((state) => state.system.language)
    const limit = 30
    useEffect(() => {
        async function callApi() {
            try {
                const result = await postExerciseByOptionsMultiple(selectedMuscle, selectedDifficulty, selectedEquipment, limit, page)
                const result2 = await getNumberOfExercise()
                if (result.EC === 0 && result2.EC === 0) {
                    setExercises(result.DT.exercise)
                    setTotalPage(result.DT["Total page"])
                    dispatch(setTotalExercise(result.DT["Total exercise"]))
                    setNoExercise(result2.DT)
                }
                else {
                    console.log('>> fail', result.EM)
                }
            } catch (err) {
                console.log('errr >> ', err);
            }
        }
        callApi();
    }, [selectedMuscle, selectedEquipment, selectedDifficulty, page])
    return (
        <div className='dictionaryPage'>
            <div className='container'>
                <div className='dictionaryPage__heading'>
                    <h3>{language === "VI" ? "Từ điển" : "Dictionary"}</h3>
                </div>
                <div className='dictionaryPage__content container'>
                    <div className='dictionaryPage__content__heading row'>
                        <Option
                            noExercise={noExercise}
                            selectedMuscle={selectedMuscle}
                            setSelectedMuscle={setSelectedMuscle}
                            selectedEquipment={selectedEquipment}
                            setSelectedEquipment={setSelectedEquipment}
                            selectedDifficulty={selectedDifficulty}
                            setSelectedDifficulty={setSelectedDifficulty}
                            gender={gender}
                            setGender={setGender}
                        />
                    </div>
                    <div className='dictionaryPage__content__list row'>
                        <ListExercise
                            limit={limit}
                            page={page}
                            setPage={setPage}
                            totalPage={totalPage}
                            setGender={setGender}
                            gender={gender}
                            exercises={exercises}
                            selectedMuscle={selectedMuscle}
                            selectedDifficulty={selectedDifficulty}
                            selectedEquipment={selectedEquipment}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DictionaryPage;                        