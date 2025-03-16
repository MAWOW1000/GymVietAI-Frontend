import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
import './Home.scss';
import { useSelector } from 'react-redux';

const Home = () => {
    const { roleId } = useSelector((state) => state.system);
    const shouldShowPremiumBanner = ![1, 3].includes(Number(roleId));

    return (
        <div className="home">
            <div className="home__header">
                <Header />
            </div>
            {shouldShowPremiumBanner && <PremiumBanner />}
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