import { FaUser, FaBookOpen } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { IoEyeSharp } from "react-icons/io5";
import './Static.scss'
function Static() {
    return (
        <div className="staticRow row">
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><FaUser /></i>
                    <h3 className="staticTitle">User</h3>
                </span>
                <h1 className="staticNumber">10.000</h1>
            </div>
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><FaBookOpen /></i>
                    <h3 className="staticTitle">Exercise</h3>
                </span>
                <h1 className="staticNumber">2.000</h1>
            </div>
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><AiFillDollarCircle /></i>
                    <h3 className="staticTitle">Revenue</h3>
                </span>
                <h1 className="staticNumber">100.000$</h1>
            </div>
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><IoEyeSharp /></i>
                    <h3 className="staticTitle">Guest</h3>
                </span>
                <h1 className="staticNumber">30.000</h1>
            </div>
        </div>
    );
}

export default Static
