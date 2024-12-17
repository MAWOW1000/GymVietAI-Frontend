import { useEffect, useState } from 'react';
import { getGroupMuscles, getEquipments } from '../../../../../util/exerciseAxios/exerciseApi';
import './Option.scss'
import OptionItem from './OptionItem'
import { FaFilter } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Option = (props) => {
    const { selectedMuscle, setSelectedMuscle, selectedEquipment, setSelectedEquipment, selectedDifficulty,
        setSelectedDifficulty, noExercise } = props

    const totalExercise = useSelector((state) => state.exercise.totalExercise)
    const language = useSelector((state) => state.system.language);
    const [optionsMuscles, setOptionsMuscles] = useState([])
    const [optionsEquipments, setOptionsEquipments] = useState([])
    const handleClearAll = () => {
        setSelectedDifficulty([])
        setSelectedEquipment([])
        setSelectedMuscle([])
    }
    const [optionsLevels, setOptionsLevels] = useState([
        {
            "levelID": 1,
            "name": "Beginner",
            "name_vi": "Tập sự"
        },
        {
            "levelID": 2,
            "name": "Intermediate",
            "name_vi": "Trung cấp"
        },
        {
            "levelID": 3,
            "name": "Advanced",
            "name_vi": "Nâng cao"
        },
        {
            "levelID": 4,
            "name": "Novice",
            "name_vi": "Người mới"
        }
    ])
    useEffect(() => {
        async function callApi() {
            try {
                const result = await getEquipments()
                const result2 = await getGroupMuscles();
                if (result.EC === 0 && result2.EC === 0) {
                    setOptionsEquipments(result.DT)
                    setOptionsMuscles(result2.DT)
                }
                else {
                    console.log('>> fail', result.EM)
                    console.log('>> fail', result2.EM)
                }
            } catch (err) {
                console.log('errr >> ', err);
            }
        }
        callApi();
    }, [])

    return (
        <div className='optionDiv'>
            <div className='optionHeader'>
                <span className='optionHeader__result'>
                    {language === 'VI' 
                        ? `Hiển thị ${totalExercise} của ${noExercise}` // Vietnamese text
                        : `Showing ${totalExercise} of ${noExercise}`} 
                </span>

                <div className='optionHeader__filter'>
                    <span style={{ cursor: 'pointer' }} className='optionHeader__filter--clear' onClick={handleClearAll}>
                        {language === 'VI' ? 'Xóa tất cả' : 'Clear all'} {/* Conditional text */}
                    </span>
                    <span className='optionHeader__filter--total' style={{ cursor: 'default' }}>
                        <FaFilter />
                        <span>
                            {language === 'VI' 
                                ? `${selectedDifficulty.length + selectedEquipment.length + selectedMuscle.length} Bộ lọc` // Vietnamese text
                                : `${selectedDifficulty.length + selectedEquipment.length + selectedMuscle.length} Filters`} 
                        </span>
                    </span>
                </div>
            </div>
            <div className='optionContent container row'>
                <div className='optionContent--muscles col-7'>
                    <OptionItem col={"col-3"} options={optionsMuscles} title={"Muscles"} selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                </div>
                <div className='optionContent--equipment col-4'>
                    <OptionItem col={"col-4"} options={optionsEquipments} title={"Equipment"} selectedEquipment={selectedEquipment} setSelectedEquipment={setSelectedEquipment} />
                </div>
                <div className='optionContent--difficult col-1'>
                    <OptionItem col={"col-12"} options={optionsLevels} title={"Difficulty"} selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} language2={language} />
                </div>
            </div>
        </div>
    )
}

export default Option