import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;

const Wrapper = styled.div`

    .bg {
        font-family: "Muli", sans-serif;
        flex: 1; /* Đảm bảo phần này chiếm toàn bộ không gian có sẵn */
        height: 1040px; /* Đặt chiều cao cho phần */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column; /* Đặt chiều dọc cho các phần tử con */
        justify-content: center; /* Căn giữa theo chiều dọc */
        align-items: flex-end; /* Căn các phần tử về phía lề trái */
        color: white; /* Màu chữ */
        padding: 50px; /* Thêm khoảng đệm */
        text-transform: uppercase;
        font-weight: 700;
   

    .about {
        margin-right: 13%;
    }

    .about h1 strong {
        color: #f36100;
    }

    .about span {
        display: block;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 6px;
        margin-bottom: 18px;
    }

    .about h1 {
        font-family: "Oswald", sans-serif;
        display: block;
        font-size: 80px; 
        font-weight: bold;
        margin: 0 0; /* Khoảng cách trên và dưới h1 */
        line-height: 90px;
        margin-bottom: 42px;
    }

    .about a.btn {
        display: inline-block;
        background-color: #f36100; 
        color: white; 
        padding: 17px 30px 16px; /* Khoảng đệm cho nút */
        border: none;
        text-decoration: none; /* Không gạch chân */
        font-size: 14px; /* Kích thước chữ cho nút */
        transition: background-color 0.3s ease; /* Hiệu ứng chuyển đổi */
        line-height: normal;
    }

    .about a.btn:hover {
        opacity: 80%;
    }
}

    .choose {
        background-color: #0a0a0a; /* Màu nền cho toàn bộ section */
        padding: 60px 0; /* Khoảng cách trên dưới */
        text-align: center; /* Căn giữa nội dung */

        .container {
            max-width: 1200px; /* Giới hạn chiều rộng */
            margin: 0 auto; /* Căn giữa phần tử */
            padding: 0 15px; /* Khoảng cách hai bên */
            margin-top: 40px;

            .des {
                margin-bottom: 40px; /* Khoảng cách dưới */
                
                span {
                    display: block;
                    font-size: 16px;
                    color: #f36100; /* Màu sắc cho tiêu đề nhỏ */
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px; /* Khoảng cách giữa các chữ */
                    font-weight: 700;
                }

                h2 {
                    text-transform: uppercase;
                    font-size: 32px;
                    font-weight: 600;
                    font-weight: bold;
                    color: white; /* Màu sắc cho tiêu đề chính */
                    margin: 0 0 0 20px;
                }
            }

            .item {
                display: flex;
                justify-content: space-between; /* Chia đều các phần tử */
                flex-wrap: wrap;

                .col {
                    flex-basis: 23%; /* Chiếm khoảng 1/4 chiều rộng */
                    background-color: #0a0a0a;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hiệu ứng đổ bóng */
                    margin-bottom: 20px;

                    transition: transform 0.3s ease;
                    &:hover {
                        transform: translateY(-10px); /* Di chuyển khối lên khi hover */
                    }

                    span {
                        display: inline-flex;
                        background: rgba(255, 255, 255, 0.1);
                        width: 90px;
                        height: 90px;
                        border-radius: 50%;
                        font-size: 40px; /* Kích thước lớn cho icon */
                        color: #f36100; /* Màu cho icon */
                        margin-bottom: 15px;
                        align-items: center;
                        justify-content: center;

                        transition: background 0.3s ease, border 0.3s ease;
                    }
                    &:hover span {
                    background: #f36100; /* Màu nền khi hover */
                    color: white;
                    }
                    
                    .col:hover span {

                    }

                    h4 {
                        font-size: 18px;
                        color: white; /* Màu cho tiêu đề trong khối */
                        margin-bottom: 10px;
                    }

                    p {
                        font-size: 16px;
                        color: white;
                        opacity: 50%;
                    }
                }
            }
        }
    }

    .classes {
    background-color: #1a1a1a; /* Màu nền cho toàn bộ section */
    padding: 60px 0; /* Khoảng cách trên dưới */
    text-align: center; /* Căn giữa nội dung */

    .container {
        max-width: 1200px; /* Giới hạn chiều rộng */
        margin: 0 auto; /* Căn giữa phần tử */
        padding: 0 15px; /* Khoảng cách hai bên */ 

        .des {
            margin-bottom: 40px; /* Khoảng cách dưới */

            span {
                display: block;
                font-size: 16px;
                color: #f36100; /* Màu sắc cho tiêu đề nhỏ */
                margin-bottom: 10px;
                text-transform: uppercase;
                letter-spacing: 2px; /* Khoảng cách giữa các chữ */
                font-weight: 700;
            }

            h2 {
                text-transform: uppercase;
                font-size: 32px;
                font-weight: 600;
                color: white;
            }
        }

        .item {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .classitem {
            flex: 0 0 calc(33.33% - 20px);
            background-color: black; /* Màu nền cho mỗi lớp học */
            margin-bottom: 20px;
            /* width: calc(20% - 20px); */
            position: relative;
            text-transform: uppercase;

            img {
                width: 100%; /* Chiều rộng hình ảnh là 100% */
                /* height: auto; */
                margin-bottom: 10px;
            }

            .citext {
                margin-left: 20px;
                text-align: left; /* Căn trái cho nội dung */
                color: white; /* Màu chữ cho nội dung lớp học */

                span {
                    display: block;
                    font-size: 14px; /* Kích thước chữ cho loại lớp học */
                    color: #f36100; /* Màu sắc cho loại lớp học */
                    margin-top: 5px;
                }

                h5 {
                    font-size: 18px; /* Kích thước chữ cho tiêu đề lớp học */
                    font-weight: bold; /* Đậm chữ */
                    margin-top: 5px;
                }

                a {

                    position: absolute; /* Đặt vị trí cho icon */
                    bottom: 20px; /* Đặt ở dưới cùng */
                    right: 20px; /* Đặt sang bên phải */
                    color: #f36100; /* Màu chữ cho icon */
                    font-size: 24px; /* Kích thước cho icon */
                    transition: color 0.3s ease; /* Hiệu ứng chuyển đổi màu */
                    /* border: 2px solid #f36100; Thêm khung vuông */
                    background-color: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    border-radius: 4px; /* Bo góc cho khung */
                    padding: 8px; /* Khoảng cách bên trong */
                    display: inline-flex; /* Căn giữa icon */
                    align-items: center; /* Căn giữa theo chiều dọc */
                    justify-content: center; /* Căn giữa theo chiều ngang */
                    
                    &:hover {
                        color: #f36100; /* Đổi màu khi hover */
                        background-color: #fff;
                    }
                }
            }
        }
    }
}

.banner {
    background-size: cover; /* Đảm bảo hình nền phủ kín toàn bộ section */
    background-repeat: no-repeat;
    background-position: center; /* Căn giữa hình nền */
    padding: 100px 20px; /* Khoảng cách trên và dưới */
    text-align: center;
    color: white;
    text-transform: uppercase;
    height: 550px;


.container {
    max-width: 1200px;
    margin: 0 auto; 
    padding: 0px;
}

h2 {
    font-size: 36px;
    font-weight: bold; 
    margin-top: 70px;
    margin-bottom: 15px; 
}

h4 {
    font-size: 20px;
    font-weight: 450;
    margin-bottom: 45px;
    opacity: 0.8;
}

a {
    background-color: transparent;
    color: white;
    padding: 17px 30px 16px; /* Khoảng cách trong nút */
    text-decoration: none;
    font-weight: bold; 
    border: 2px solid #f36100;

    transition: background-color 0.3s ease; /* Hiệu ứng chuyển đổi màu */
}

a:hover {
    background-color: #e55700; 
}
}

.price {
    background-color: #151515;
    padding: 60px 0;
    text-align: center;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .title {
        margin-bottom: 40px;
    }

    .title span {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        color: #f36100;
        margin-bottom: 15px;
    }

    h2 {
        text-transform: uppercase;
        color: white;
        margin: 0;
        font-size: 32px;
        font-weight: 600;
        margin-top: 10px;
    }

    .item {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .priceitem {
        background-color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng cho phần giá */
        padding: 20px;
        flex: 0 0 calc(32% - 15px); /* Tạo 3 cột, trừ đi khoảng cách giữa các cột */
        margin-bottom: 20px;
        display: flex;
        flex-direction: column; 
        border: 2px solid #333333;
        background-color: #151515;

        transition: transform 0.3s ease; 
    }

    .priceitem:hover {
        transform: translateY(-5px); /* Nâng phần tử lên khi hover */
        background-color: white;
    }

    .priceitem:hover h3, 
    .priceitem:hover ul li, 
    .priceitem:hover .money span {
        color: black;
    }

    h3 {
        font-size: 28px;
        margin-bottom: 10px; 
        color: white; 
    }

    .money {
        margin: 15px 0; /* Khoảng cách trên và dưới */

        h2 {
            margin-top: 0;
            font-size: 60px; 
            font-weight: bold;
            color: #e55700;
        }

        span {
            font-size: 16px; 
            color: #c4c4c4; 
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .priceitem ul {
        list-style: none; 
        padding: 0; 
        margin: 20px 0; /* Khoảng cách trên và dưới cho danh sách */
        text-align: center; /* Căn trái cho nội dung */

        li {
            font-size: 14px;
            margin-bottom: 10px; /* Khoảng cách dưới giữa các mục danh sách */
            color: #c4c4c4;
            line-height: 25px;
        }
    }

    .priceitem .btn {
        background-color: #333333; 
        color: white; 
        padding: 17px 30px 16px; /* Khoảng cách trong nút */
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease; /* Hiệu ứng chuyển đổi màu */
        text-transform: uppercase;
    }

    .priceitem:hover .btn {
        background-color: #e55700;
    }
}

.team {
    background-color: black;
    padding: 60px 0;
    text-align: center;

    .container {
        max-width: 2000px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 0 15px;
    }

    .title {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 40px;
    }

    .teamtitle {
        text-align: left;
    }

    .teamtitle span{
        font-size: 16px;
        font-weight: 700;
        color: #e55700;
        margin-bottom: 15px;
        text-transform: uppercase;
    }

    .teamtitle h2 {
        color: white;
        margin: 0;
        font-size: 32px;
        font-weight: 600;
        margin-top: 8px;
    }

    .title a{
        background-color: #151515;
        border: 2px solid #e55700;
        color: white;
        padding: 17px 30px 16px;
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        
        transition: background-color 0.3s ease;
        
    }
    .title a:hover{
        background-color: #e55700;
    }

    .slider {
        position: relative;
        overflow: hidden;
        max-width: 1200px;
        margin: 20px auto;
        transition: transform 0.3s ease-in-out;
    }

    .slides {
        display: flex;
        transition: transform 0.5s ease-in-out;
        padding-left: 20px;
    }

    .slide {
        flex: 0 0 360px;
        margin-right: 40px;
        transition: transform 0.3s ease-in-out;
    }

    .slide img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .slide:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: transform 0.3s;
    }
}

.support {
    background-color: #151515;
    padding: 30px 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .items{
        justify-content: space-between;
        display: flex;

        .item{
            text-align: left;
            /* background-color: #ffffff; */
            padding: 15px;
            flex: 1;
            display: flex;
            align-items: center;
            margin-right: 15px;

            span{
                font-size: 24px;
                color: white;
                display: inline-block;
                margin-bottom: 10px;
                margin-right: 10px;
                padding: 20px;
                border-radius: 50%; 
                text-align: center;
                width: 65px; 
                height: 65px;
                background-color: #e55700;
                
            }

            p{
                color: white;
                margin: 0;
                font-size: 14px; 
                font-weight: 400;
                line-height: 24px;
                margin: 0 0 15px 0;
            }
        }
    }
}

section {
    animation: ${slideIn} 1s ease-in-out forwards; /* Add animation */
    animation-delay: ${(props) => props.delay}s; /* Add delay */
    opacity: 0;
    transform: translateY(100px);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    
    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }
    &:nth-child(4) {
        animation-delay: 0.6s;
    }
    &:nth-child(5) {
        animation-delay: 0.8s;
    }
    &:nth-child(6) {
        animation-delay: 1s;
    }
    &:nth-child(7) {
        animation-delay: 1.2s;
    }
}

`;

export default Wrapper;
