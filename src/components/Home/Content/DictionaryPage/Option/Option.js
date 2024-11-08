import { useEffect, useState } from 'react';
import { getGroupMuscles, getEquipments } from '../../../../../util/exerciseApi';
import './Option.scss'
import OptionItem from './OptionItem'
import { FaFilter } from "react-icons/fa";
const Option = (props) => {
    const { selectedMuscle, setSelectedMuscle, selectedEquipment, setSelectedEquipment, selectedDifficulty, setSelectedDifficulty } = props
    const [optionsMuscles, setOptionsMuscles] = useState([])
    const [optionsEquipments, setOptionsEquipments] = useState([])
    const [optionsLevels, setOptionsLevels] = useState([
        {
            "levelID": 1,
            "name": "Beginner"
        },
        {
            "levelID": 2,
            "name": "Intermediate"
        },
        {
            "levelID": 3,
            "name": "Advanced",
        },
        {
            "levelID": 4,
            "name": "Novice"
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
                <span className='optionHeader__result'>Showing 0 of 1462</span>

                <div className='optionHeader__filter'>
                    <span className='optionHeader__filter--clear'>Clear all</span>
                    <span className='optionHeader__filter--total'> <FaFilter /><span>0 Filters</span></span>
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
                    <OptionItem col={"col-12"} options={optionsLevels} title={"Difficulty"} selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} />
                </div>
            </div>
        </div>
    )
}

export default Option