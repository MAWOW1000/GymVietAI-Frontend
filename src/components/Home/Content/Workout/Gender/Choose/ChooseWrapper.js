import styled from "styled-components";

const Wrapper = styled.div`
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 40vh;

        button{
            width: 60%;
            height: 30%;
            margin: 20px 0;
            transition: transform 0.3s ease;
            border-radius: 8px;
            background-color: #e5e7eb;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            border: 1px solid #ddd;
            font-size: 1.2rem;
            font-weight: 500;
            color: #333;

            &:hover{
                transform: scale(1.1);
            }
        }
    }
`

export default Wrapper;