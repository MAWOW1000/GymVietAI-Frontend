import styled from "styled-components";

const Wrapper = styled.footer`
.footer {
    background-color: black;
    padding: 40px 0 20px;

    @media screen and (max-width: 739px) {
        padding: 30px 0 15px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
        background-color: black;

        @media screen and (max-width: 739px) {
            padding: 0 10px;
        }
    }

    .items {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; /* Đảm bảo các phần tử con sẽ xuống dòng nếu không đủ chỗ */

        @media screen and (max-width: 739px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        @media screen and (min-width: 740px) and (max-width: 1023px) {
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .item {
            flex: 1; 
            min-width: 250px; 
            margin: 15px;
            color: #c4c4c4;
            font-size: 14px;
            word-wrap: break-word; /* Tự động xuống dòng nếu chuỗi quá dài */
            overflow-wrap: break-word; /* Tương thích với các trình duyệt cũ */
            text-align: justify; /* Canh đều nội dung (tùy chọn) */

            @media screen and (max-width: 739px) {
                min-width: 100%;
                margin: 10px 0;
                padding: 0 15px;
            }

            @media screen and (min-width: 740px) and (max-width: 1023px) {
                flex: 0 0 calc(50% - 30px);
                margin: 15px;
            }

            p {
                margin-bottom: 10px;
                word-wrap: break-word; /* Tự động xuống dòng nếu chuỗi quá dài */
                overflow-wrap: break-word;
                line-height: 1.5; /* Cải thiện khoảng cách giữa các dòng */

                @media screen and (max-width: 739px) {
                    margin-bottom: 8px;
                }
            }

            .meta-info {
                display: flex; 
                align-items: center; 
                font-size: 13px; 
                color: #c4c4c4;

                @media screen and (max-width: 739px) {
                    justify-content: center;
                    flex-wrap: wrap;
                }
            }

            .meta-info p {
                opacity: 50%;
                margin: 0;
            }

            .separator {
                margin: 0 10px;
                color: #c4c4c4;

                @media screen and (max-width: 739px) {
                    margin: 0 5px;
                }
            }

            .meta-separator {
                opacity: 30%;
                width: 100%;
                height: 1px;
                background-color: #c4c4c4;
                margin: 10px 0;
            }
        }

        .logo {
            max-width: 100%;
            margin-bottom: 20px;

            @media screen and (max-width: 739px) {
                margin-bottom: 15px;
                max-width: 80%;
            }
        }

        h4 {
            font-size: 20px;
            margin-bottom: 20px;
            margin-top: 10px;
            color: #ffffff;
            line-height: 24px;

            @media screen and (max-width: 739px) {
                font-size: 18px;
                margin-bottom: 15px;
                margin-top: 8px;
            }
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin: 10px 0;
            color: #c4c4c4;

            @media screen and (max-width: 739px) {
                margin: 8px 0;
            }
        }

        .icon {
            display: flex;
            margin-top: 10px;

            @media screen and (max-width: 739px) {
                justify-content: center;
            }
        }

        h6 {
            font-size: 13px;
            font-weight: 400;
            margin: 10px 0;

            @media screen and (max-width: 739px) {
                font-size: 12px;
                margin: 8px 0;
            }
        }

        a {
            color: #ffffff;
            opacity: 80%;
            margin-right: 15px;
            font-size: 15px;
            transition: color 0.3s;

            @media screen and (max-width: 739px) {
                margin-right: 12px;
                font-size: 14px;
            }

            &:hover {
                opacity: 100%;
            }
        }
    }

    .copyright {
        text-align: center;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        color: #c4c4c4;
        font-size: 14px;

        @media screen and (max-width: 739px) {
            margin-top: 20px;
            padding-top: 15px;
            font-size: 12px;
        }
    }
}
`;

export default Wrapper;
