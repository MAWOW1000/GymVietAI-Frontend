import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px;
  }

  .level-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .level-button {
    display: inline-block;
    width: 750px;
    height: 120px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .level-button:hover {
    background-color: #f0f0f0;
  }

  .info-icon {
    font-size: 25px;
    color: #20409A;
    cursor: pointer;
    margin: 0px -50px;
    margin-top : -50px;

    transition: transform 0.3s ease, color 0.3s ease;
  }

  .info-icon:hover {
    transform: scale(1.3);
    color: #0056b3;
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
  }

  .popup-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    text-align: left;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .popup-content h2 {
    margin-bottom: 15px;
  }

  .popup-content h3 {
    margin: 10px 0;
  }

  .popup-content ul {
    list-style-type: disc;
    margin: 10px 0;
    padding: 0 20px;
    text-align: left;
  }

  .close-popup-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .close-popup-icon:hover {
    color: #ff0000;
    transform: scale(1.2);
  }
  
`;

export default Wrapper;
