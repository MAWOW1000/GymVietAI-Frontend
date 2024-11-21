import React, { useState } from 'react';
import Wrapper from './AgeWrapper';

function Age() {
  const [age, setAge] = useState(13); // Đặt giá trị mặc định là 13

  const handleAgeChange = (e) => {
    setAge(e.target.value); // Cập nhật giá trị khi người dùng kéo thanh
  };

  return (
    <Wrapper>
    <div className='container'>
        <h1>Age</h1>
          <div className="age-container ">
            <span className="age-label">Age: {age}</span>
            <input
              type="range"
              min="13"
              max="100"
              value={age}
              onChange={handleAgeChange}
              className="age-slider"
            /> 
          </div>
    
        <div className='nav'>
            <button type='Button' className='back'>Go back</button>
            <button type='Button'>Next</button> 
        </div>
    </div>
    </Wrapper>
  );
}

export default Age;