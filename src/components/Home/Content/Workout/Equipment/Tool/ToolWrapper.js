import styled from "styled-components";

const Wrapper = styled.div`
.container {
  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */
  justify-content: flex-start;
}

.level-item {
  width: calc(20% - 16px);  /* Mỗi nút chiếm 1/5 chiều rộng của container */
  display: flex;
  justify-content: center;
  align-items: center;
}

.level-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 140px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-top: 20px;
  transition: transform 0.3s ease;
}

.level-button .icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.level-button:hover {
    transform: scale(1.1);
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
        margin-top: 40px;

        &:hover{
            transform: scale(1.1);
        }
    }
 }


`
export default Wrapper;