import React from "react";
import Wrapper from "./ChooseWrapper"

function Choose(){

    const types = [
        { id: 1, type: "Male" },
        { id: 2, type: "Female" }
    ];

    return(
        <Wrapper>
            <div className="container">
                {types.map((step, id) => (
                    <React.Fragment key={step.id}>
                        <button type="button">
                            {step.type}
                        </button>
                    </React.Fragment>
                )
                )}
            </div>
        </Wrapper>
    )
}

export default Choose;