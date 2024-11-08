import './Option.scss'
import ModelBack from '../Modal/ModelBack'
import ModelFront from '../Modal/ModelFront'
import { useEffect, useState } from 'react'
import { getEquipments } from '../../../../../util/exerciseApi'
const Option = ({ selectedMuscle, setSelectedMuscle, selectedEquipment, setSelectedEquipment }) => {
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
                <h3>Optional</h3>
            </div>
            {
                selectedMuscle ?
                    <>
                        <div className="row exercisePage__model">
                            <div className="col-6 ">
                                <ModelFront selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                            </div>
                            <div className="col-6">
                                <ModelBack selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                            </div>
                        </div>
                        <hr />
                    </>
                    :
                    <> </>
            }
            <div className="optionExerciseContent row col-12">
                {options.map((option, index) => (
                    <div key={`option ${index}`} className="optionExerciseItem col-6">
                        <input type="checkbox"
                            id={`${option.name}Checkbox`}
                            checked={option.name === selectedEquipment}
                            value={option.name}
                            onChange={(e) => setSelectedEquipment(e.target.value)}
                        />
                        <label htmlFor={`${option.name}Checkbox`}>{option.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Option;