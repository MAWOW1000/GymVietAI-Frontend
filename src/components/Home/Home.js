import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './Home.scss'
const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <Header />
            </div>
            <div className="home__container">
                <Outlet />
            </div>
            <div className="home__footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;