import styled from "styled-components";

const Wrapper = styled.div`

.login {
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
    /* border-radius: 10px; */
    /* box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); */
    width: 100%;
    max-width: 420px;
}

h1 {
    text-align: center;
    padding-bottom: 30px;
    margin-top: 0;
    font-size: 28px;
    font-weight: 500;
    color: white;
}

.register-link p {
    font-size: 28px;
    font-weight: 100;
    text-align: center;
    margin-bottom: 20px;
    color: white;
}

.register-link a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3; 
        text-decoration: underline;
    }
}

.input {
    display: flex;
    flex-direction: column;
}

input {
    background-color: rgba(255, 255, 255, 0.5);
    /* opacity: 50%; */
    padding: 14px;
    margin-bottom: 23px;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 16px;

    &::placeholder {
        color: #ccc; 
    }
}

button.summit {
    background-color: #FBCEB5;
    color: #1A4789;
    padding: 17px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 5px;
}

button.summit:hover {
    opacity: 50%;
}

.remember-forgot {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.remember-forgot a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
        text-decoration: underline;
      }
}

.otherway {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    align-item: center;
}

.otherway button {
    background-color: white;
    color: #1A4789;
    padding: 17px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    width: 70%;
    
}

.otherway button:hover {
    opacity: 50%;
}

.remember-forgot label{
    color: #FBCEB5;
}


h3{
    color: white;
    font-size: 16px;
    text-align: center;
    margin: 30px 0px 0px;
    font-weight: 400;
}

.login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 18px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }

`;

export default Wrapper;