import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;
  width: 100%;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color: rgba(51, 51, 51, 0.9);
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
    gap: 10px;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto; /* Thêm thanh cuộn ngang */
    box-sizing: border-box;
  }

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
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
    color: #f36100;
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
    margin-right: 10px;
  }

  .divider {
    border: none;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
  }

  .dropdown-menu a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }

  .dropdown-menu a:hover {
    color: #007BFF;
  }

  @media (max-width: 767px) {
    padding: 10px;
    
    .logo {
      width: 120px;
    }

    .navbar {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      flex-direction: column;
      padding: 80px 20px;
      transition: 0.3s ease;
      z-index: 1000;
      flex-wrap: wrap; /* Cho phép các phần tử bẻ dòng khi không gian không đủ */
      overflow-x: hidden;
    }

    .nav-links {
      flex-direction: column;
      width: 100%;
      display: block;
    }

    .hamburger {
      display: block;
      position: fixed;
      right: 20px;
      z-index: 1001;
    }

    .social-icons {
      display: none;
    }

    .dropdown {
      display: none; /* Ẩn dropdown khi màn hình nhỏ */
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px;

    .logo {
      width: 130px;
    }

    .nav-links li {
      margin: 0 10px;
    }

    .social-icons {
      gap: 10px;
    }
  }

  @media (min-width: 992px) {
    /* ...existing desktop styles remain unchanged... */
  }
`;

export default Wrapper;
