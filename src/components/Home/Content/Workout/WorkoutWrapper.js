import styled from "styled-components";

const Wrapper = styled.div`
    .progress-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px auto;
        position: relative;
        width: 80%; /* Độ rộng timeline */
    }

    .step {
        background-color: #d3d3d3;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 2;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &.active {
            background-color: #1e4dab; /* Màu bước hiện tại */
            transform: scale(1.2); /* Phóng to bước hiện tại */
        }

        &:hover {
            transform: scale(1.1);
        }
    }

    .line {
        flex: 1;
        height: 15px;
        background-color: #d3d3d3;
        margin: 0 -10px; 
        width: 0%; /* Khởi tạo độ dài ban đầu */
        transition: width 0.6s ease, background-color 0.6s ease; /* Chạy hiệu ứng khi thay đổi width */

        &.completed {
            background-color: #1e4dab; /* Màu của đường hoàn thành */
            width: 100%; /* Độ dài của đường nối khi hoàn thành */
        }
    }
`;

export default Wrapper;
