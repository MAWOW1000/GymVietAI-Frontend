import React from "react";
import Wrapper from "./LevelWrapper";
import Select from "./Select/Select";

function Level(){
    return(
        <Wrapper>
            <div className="container">
                <h1>Level</h1>
                <Select />
            </div>
        </Wrapper>
    )
}

export default Level;