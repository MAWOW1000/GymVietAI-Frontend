import styled from "styled-components";

const Wrapper = styled.div`

.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;

    opacity: 0;
    animation: popUp 1s forwards
}

form {
    background-color: transparent; /* Nền trong suốt nhẹ */
    padding: 40px;
    border-radius: 10px;
    position: relative; /* Để dùng pseudo-element */
    width: 100%;
    max-width: 420px;
    overflow: hidden; /* Ẩn phần hiệu ứng ra ngoài */
    backdrop-filter: blur(20px);

    opacity: 0;
    animation: popUp 0.8s ease-out forwards 0.2s;
}


h1 {
    text-align: center;
    padding-bottom: 30px;
    margin-top: 0;
    font-size: 28px;
    font-weight: 500;
    color: white;

    /* opacity: 0;
    animation: popUp 0.8s ease-out forwards 0.2s; */
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
        color: #f36100; 
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

    /* opacity: 0;
    animation: popUp 0.8s ease-out forwards 0.2s; */

    &::placeholder {
        color: #ccc; 
    }
}

button.summit {
    background-color: #FBCEB5;
    color: black;
    padding: 17px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 5px;

    /* opacity: 0;
    animation: popUp 0.8s ease-out forwards 0.2s; */
}

button.summit:hover {
    /* opacity: 50%; */
    animation: pulse 0.6s ease;
}

@keyframes pulse {
  0% {
    transform: scale(1); /* Ban đầu */
  }
  50% {
    transform: scale(1.2); /* Giãn ra */
  }
  100% {
    transform: scale(1); /* Thu lại */
  }
}

.remember-forgot {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.remember-forgot a {
    color: white;
    text-decoration: none;
    transition: color 0.5s ease;

      &:hover {
        color: #f36100;
        font-weight: bold;
        text-decoration: underline;
        transform: scale(1.2);
        
      }
      &:hover::after{
        content: " ?";
      }
}

.otherway {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.otherway button {
    background-color: white;
    color: black;
    padding: 17px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    width: 45%;
    
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

@keyframes popUp {
    0% {
        transform: translateY(20px); /* Bắt đầu từ dưới */
        /* opacity: 0; */
    }
    100% {
        transform: translateY(0); /* Cuối cùng là vị trí bình thường */
        opacity: 1;
    }
}

/* @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
} */

`;

export default Wrapper;