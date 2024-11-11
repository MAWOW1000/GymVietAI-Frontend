import './Option.scss'
import ModelBack from '../Modal/ModelBack'
import ModelFront from '../Modal/ModelFront'
import ModelBackFemale from '../Modal/ModelBackFemale'
import ModelFrontFemale from '../Modal/ModelFrontFemale'
import { useEffect, useState } from 'react'
import { getEquipments } from '../../../../../util/exerciseApi'
const Option = ({ selectedMuscle, setSelectedMuscle, selectedEquipment, setSelectedEquipment, gender, setGender, setPage }) => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        async function callApi() {
            try {
                const result = await getEquipments()
                if (result.EC === 0) {
                    setOptions(result.DT)
                }
                else {
                    console.log('>> fail', result.EM)
                }
            } catch (err) {
                console.log('errr >> ', err);
            }
        }
        callApi();
    }, [])
    return (
        <div className="optionExercise">
            <div className="optionExerciseHeader">
                <label for='switch' className='optionExercise__gender'>
                    <input id="switch" type="checkbox" hidden value={gender} onChange={() => { setGender(!gender) }} />
                    <label for="switch" className="switch" />
                    <label for="switch" className="female">Female</label>
                    <label for="switch" className="male">Male</label>
                </label>
            </div>
            {
                selectedMuscle ?
                    <>
                        <div className="row exercisePage__model">
                            {
                                gender ?
                                    <>
                                        <div className="col-6 ">
                                            <ModelFrontFemale setPage={setPage} selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                        </div>
                                        <div className="col-6">
                                            <ModelBackFemale setPage={setPage} selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="col-6 ">
                                            <ModelFront setPage={setPage} selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                        </div>
                                        <div className="col-6">
                                            <ModelBack setPage={setPage} selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                        </div>
                                    </>
                            }
                        </div>

                        <hr />
                    </>
                    :
                    <> </>
            }

            <div className="optionExerciseContent row col-12">
                {options.map((option, index) => (
                    <label for={`${option.name}Checkbox`} key={`option ${index}`} className="optionExerciseItem col-6">
                        <input type="checkbox"
                            id={`${option.name}Checkbox`}
                            checked={option.name === selectedEquipment}
                            value={option.name}
                            onChange={(e) => setSelectedEquipment(e.target.value)}
                        />
                        <label htmlFor={`${option.name}Checkbox`}>
                            <span className='optionIcon' dangerouslySetInnerHTML={{ __html: option.icon }} />
                            <span className='optionName'>{option.name}</span>
                        </label>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Option;