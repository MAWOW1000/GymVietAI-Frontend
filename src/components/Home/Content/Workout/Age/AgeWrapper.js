import styled from 'styled-components';

const Wrapper = styled.div`
  .age-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%; 
    max-width: 750px;
    margin: 50px auto;
    padding: 45px;
    /* background-color: #d3d3d3; */
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 70%;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .age-label {
    font-size: 28px;
    font-weight: bold;
  }

  .age-slider {
    width: 100%;
    max-width: 750px;
    cursor: pointer;
  }

 .nav{
    max-width: 750px;
    justify-content: space-between;
    margin-left: 21%;

    .back{
        color: #000;
        background-color: #fff;
    }

    button{
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-radius: 15px;
        background-color: #20409A;
        color: #fff;    
        padding: 20px 60px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;

        &:hover{
            transform: scale(1.1);
        }
    }
 }

`;

export default Wrapper;
