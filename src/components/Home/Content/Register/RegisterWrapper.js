import styled from "styled-components";

const Wrapper = styled.div`
  .register {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  form {
    background-color: transparent;
    padding: 40px;
    width: 100%;
    max-width: 420px;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    padding-bottom: 30px;
    margin-top: 0;
    font-size: 30px;
    color: white;
  }

  .login-link {
    p {
      font-size: 28px;
      font-weight: 100;
      text-align: center;
      margin-bottom: 20px;
      color: white;
    }

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
        text-decoration: underline;
      }
    }
  }

  .input {
    display: flex;
    flex-direction: column;
  }

  input {
    opacity: 50%;
    padding: 14px;
    margin-bottom: 23px;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #1A4789; /* Chữ không bị làm mờ */
    &::placeholder {
      color: #1A4789; /* Màu cho chữ placeholder */
    }
   width: 100%;
  }

  button.commit {
    background-color: #fbceb5;
    color: #1A4789;
    padding: 17px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      opacity: 50%;
    }
  }                  

  .divEyes {
    position: relative;
  }

  .iconEyes {
      position: absolute;
      right: 22px; /* Adjust as needed */
      top: 7px;
      cursor: pointer;
      color: #1A4789; /* Change color as needed */
      font-size: 25px;
  }

  .notification {
    color: red; /* Change color as needed */
    margin-bottom: 20px; /* Space between notification and inputs */
    text-align: center; /* Center the notification */
  }
`;

export default Wrapper;
