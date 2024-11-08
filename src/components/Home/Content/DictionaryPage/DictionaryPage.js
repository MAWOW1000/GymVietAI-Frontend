import { useEffect, useState } from 'react';
import './DictionaryPage.scss'
import ListExercise from './ListExercise/ListExercise';
import Option from './Option/Option';
import { getExerciseByOptions } from '../../../../util/exerciseApi';
import InforExercise from './InforExercise/InforExercise';

const DictionaryPage = () => {
    const [exercises, setExercises] = useState([])
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [inforExercise, setInforExercise] = useState(null)
    const [gender, setGender] = useState(false); //false is Man, true is Woman =))
    useEffect(() => {
        async function callApi() {
            try {
                const result = await getExerciseByOptions(selectedMuscle, selectedDifficulty, selectedEquipment)
                if (result.EC === 0) {
                    setExercises(result.DT)
                    console.log('>>success ', selectedMuscle, result.DT, selectedEquipment, selectedDifficulty)
                }
                else {
                    console.log('>> fail', result.EM)
                }
            } catch (err) {
                console.log('errr >> ', err);
            }
        }
        callApi();
    }, [selectedMuscle, selectedEquipment, selectedDifficulty])
    return (

        <div className='dictionaryPage'>
            {
                inforExercise ? <InforExercise inforExercise={inforExercise} gender={gender} />
                    :
                    <div className='container'>
                        <div className='dictionaryPage__heading'>
                            <h3>Dictionary</h3>
                        </div>
                        <div className='dictionaryPage__content container'>
                            <div className='dictionaryPage__content__heading row'>
                                <Option
                                    selectedMuscle={selectedMuscle}
                                    setSelectedMuscle={setSelectedMuscle}
                                    selectedEquipment={selectedEquipment}
                                    setSelectedEquipment={setSelectedEquipment}
                                    selectedDifficulty={selectedDifficulty}
                                    setSelectedDifficulty={setSelectedDifficulty}
                                />
                            </div>
                            <div className='dictionaryPage__content__list row'>
                                <ListExercise setGender={setGender} setInforExercise={setInforExercise} exercises={exercises} />
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default DictionaryPage;                        