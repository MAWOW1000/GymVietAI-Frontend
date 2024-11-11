import styled from "styled-components";

const Wrapper = styled.footer`

.footer {

    background-color: black;
    padding: 40px 0 20px;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
        background-color: black;
    }

    .items {
        display: flex;
        justify-content: space-between;

        .item {
            flex: 1; 
            min-width: 250px; 
            margin: 15px; /* Khoảng cách giữa các item */
            color: #c4c4c4;
            font-size: 14px;

            p {
                margin-bottom: 10px;
            }

            .meta-info {
                display: flex; 
                align-items: center; 
                font-size: 13px; 
                color: #c4c4c4;
            }

            .meta-info p {
                opacity: 50%;
                margin: 0;
            }

            .separator {
                margin: 0 10px; /* Khoảng cách giữa các thẻ p */
                color: #c4c4c4; /* Màu cho dấu gạch dọc */
            }

            /* Dấu gạch ngang giữa meta-info và nội dung bên dưới */
            .meta-separator {
                opacity: 30%;
                width: 100%;
                height: 1px;
                background-color: #c4c4c4; /* Màu của dấu gạch ngang */
                margin: 10px 0; /* Khoảng cách trên dưới cho dấu gạch ngang */
            }
        }

        .logo {
            max-width: 100%;
            margin-bottom: 20px;
        }

        h4 {
            font-size: 20px;
            margin-bottom: 20px;
            margin-top: 10px;
            color: #ffffff;
            line-height: 24px;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin: 10px 0;
            color: #c4c4c4;
        }

        .icon {
            display: flex; /* Sử dụng flexbox cho các icon */
            margin-top: 10px; /* Khoảng cách trên */
        }

        h6 {
            font-size: 13px;
            font-weight: 400;
            margin: 10px 0;
        }

        a {
            color: #ffffff; /* Màu chữ cho icon */
            opacity: 80%;
            margin-right: 15px; /* Khoảng cách giữa các icon */
            font-size: 15px; /* Kích thước icon */
            transition: color 0.3s; /* Hiệu ứng chuyển màu */
        }

        a:hover {
            color: #f36100; /* Màu khi hover */
        }
    }
}
`;

export default Wrapper;
