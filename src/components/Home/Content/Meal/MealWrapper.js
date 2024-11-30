import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #3d3f46;
  }

  hr {
  border: 0;
  height: 0.1px;
  background-color: #ddd;
  margin: 20px auto;
  max-width: 400px;
}

  .choose,
  .type {
    margin-top: 20px;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #fff;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background-color: #f5f5f5;
      border: 2px solid #ddd;
      border-radius: 8px;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: #555;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #3d3f46;
        color: #fff;
        border-color: #fff;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.98);
      }

      &:focus{
        box-shadow: 0 0 0 2px orangered;
      }
    }

    button + button {
      margin-left: 10px;
    }
  }

  .write,
  .goal,
  .time {
    margin-top: 40px;
    background-color: #3d3f46;
    padding: 20px;
    border-radius: 12px;
    color: #fff;
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #fff;
    }

    .height,
    .weight {
      margin-bottom: 20px;

      h3 {
        font-size: 1rem;
        margin-bottom: 5px;
        color: #fff;
      }
    }

    input {
      width: 100%;
      max-width: 200px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f5f5f5;
      color: #333;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #ffcc00;
      }

      &::placeholder {
        color: #aaa;
        text-align: right;
        margin-right: 10px;
      }
    }
  }

  .summit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 60px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  background-color: #fff;
  border: 2px solid #3d3f46;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: 50px;
}

.summit:hover {
  /* background-color: #3d3f46;
  border-color: #fff;
  color: #fff; */
  transform: scale(1.05);
}

.summit:active {
  transform: scale(0.98);
}

.summit:focus {
  outline: none;
  box-shadow: 0 0 0 2px orangered;
}
`;

export default Wrapper;
