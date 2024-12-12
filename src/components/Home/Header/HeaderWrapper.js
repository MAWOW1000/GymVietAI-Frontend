import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  // background-color: transparent;
  background-color: black;
  // position: fixed; /* Giữ header bám dính vào đầu trang */
  // top: 0;
  // left: 0;
  width: 100%;
  // z-index: 1000; /* Đảm bảo rằng nó ở trên các phần tử khác */
  transition: background-color 0.3s ease; /* Hiệu ứng chuyển màu nền */

  &.scrolled {
        background-color: rgba(51, 51, 51, 0.9); /* Màu nền khi cuộn xuống */
    }
  
  .logo-container {
    flex: 1;
  }

  .logo {
    width: 150px;
    height: auto;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    flex: 2;
    align-items: center;
  }

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-links li {
    margin: 0 20px;
  }

  .nav-links a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #f36100;
  }

  .nav-links a.active {
    color: #f36100; /* Màu nổi bật khi active */
    /* border-bottom: 2px solid #f36100; */
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: #f36100;
  }

  /* Dropdown menu */
  .dropdown {
    position: relative;
  }

  .dropdown-btn {
    background-color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    background-color: white;
    list-style: none;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: block;
    z-index: 10;
  }

  .menu-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .menu-icon {
    margin-right: 10px; /* Khoảng cách giữa icon và chữ */
  }

  .divider {
    border: none;
    height: 1px; /* Chiều cao của dấu gạch */
    background-color: #ccc; /* Màu của dấu gạch */
    margin: 10px 0; /* Khoảng cách trên và dưới dấu gạch */
  }

  .dropdown-menu a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }

  .dropdown-menu a:hover {
    color: #007BFF;
  }
`;

export default Wrapper;
