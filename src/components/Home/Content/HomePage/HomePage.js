import React, { useState, useEffect } from "react";
import Wrapper from "./ContentWrapper";
import { MdDirectionsBike, MdOutlineSmartphone } from "react-icons/md";
import { IoIosFitness, IoMdMail } from "react-icons/io";
import { IoFitnessSharp, IoNutrition } from "react-icons/io5";
import { FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";


function HomePage() {
    const images = {
        hero: require('../../../../assets/images/hero.jpg'),
        class1: require('../../../../assets/images/class1.jpg'),
        class2: require('../../../../assets/images/class2.jpg'),
        class3: require('../../../../assets/images/class3.jpg'),
        class4: require('../../../../assets/images/class4.jpg'),
        class5: require('../../../../assets/images/class5.jpg'),
        banner: require('../../../../assets/images/banner.jpg'),
    };

    const teamImages = {
        team1: require('../../../../assets/images/team1.jpg'),
        team2: require('../../../../assets/images/team2.jpg'),
        team3: require('../../../../assets/images/team3.jpg'),
        team4: require('../../../../assets/images/team4.jpg'),
        team5: require('../../../../assets/images/team5.jpg'),
        team6: require('../../../../assets/images/team6.jpg'),
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Hàm để chuyển đến hình ảnh tiếp theo
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3 >= Object.keys(teamImages).length ? 0 : prevIndex + 1));
    };

    // Sử dụng useEffect để tự động chuyển đổi hình ảnh
    useEffect(() => {
        const timer = setInterval(nextSlide, 3000); // Chuyển đổi sau mỗi 3 giây

        // Xóa bộ đếm thời gian khi component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <Wrapper>
            <div className="bg" style={{ backgroundImage: `url(${images.hero})` }}>
                <div className="about">
                    <span>Shape your body</span>
                    <h1>be <strong>strong</strong><br /> training hard</h1>
                    <a href="" className="btn">Get info</a>
                </div>
            </div>

            <section className="choose">
                <div className="container">
                    <div className="des">
                        <span>why choose us</span>
                        <h2>push your limits forward</h2>
                    </div>

                    <div className="item">
                        <div className="col">
                            <span>
                                <MdDirectionsBike />
                            </span>
                            <h4>Modern equipment</h4>
                            <p>I wish for power</p>
                        </div>

                        <div className="col">
                            <span>
                                <IoNutrition />
                            </span>
                            <h4>Healthy nutrition plan</h4>
                            <p>I wish for power</p>
                        </div>

                        <div className="col">
                            <span>
                                <IoFitnessSharp />
                            </span>
                            <h4>Professional training plan</h4>
                            <p>I wish for power</p>
                        </div>

                        <div className="col">
                            <span>
                                <IoIosFitness />
                            </span>
                            <h4>Unique to your needs</h4>
                            <p>I wish for power</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="classes">
                <div className="container">
                    <div className="des">
                        <span>Our classes</span>
                        <h2>what we can offer</h2>
                    </div>

                    <div className="item">
                        <div className="classitem">
                            <img src={images.class1} alt="" />

                            <div className="citext">
                                <span>STRENGTH</span>
                                <h5>Weightlifting</h5>
                                <a href=""><FaChevronRight /></a>
                            </div>
                        </div>

                        <div className="classitem">
                            <img src={images.class2} alt="" />

                            <div className="citext">
                                <span>CARDIO</span>
                                <h5>Indoor cycling</h5>
                                <a href=""><FaChevronRight /></a>
                            </div>
                        </div>

                        <div className="classitem">
                            <img src={images.class3} alt="" />

                            <div className="citext">
                                <span>STRENGTH</span>
                                <h5>Kettlebell power</h5>
                                <a href=""><FaChevronRight /></a>
                            </div>
                        </div>

                        <div className="classitem">
                            <img src={images.class4} alt="" />

                            <div className="citext">
                                <span>STRENGTH</span>
                                <h5>Indoor cycling</h5>
                                <a href=""><FaChevronRight /></a>
                            </div>
                        </div>

                        <div className="classitem">
                            <img src={images.class5} alt="" />

                            <div className="citext">
                                <span>TRAINING</span>
                                <h5>Boxing</h5>
                                <a href=""><FaChevronRight /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
                <div className="container">
                    <h2>registration now to get more deals</h2>
                    <h4>Where health, beauty and fitness meet.</h4>
                    <a href="">Appointment</a>
                </div>
            </section>

            <section className="price">
                <div className="container">
                    <div className="title">
                        <span>Our class</span>
                        <h2>choose your pricing plan</h2>
                    </div>

                    <div className="item">
                        <div className="priceitem">
                            <h3>Class drop-in</h3>
                            <div className="money">
                                <h2>$ 39.0</h2>
                                <span>SINGLE CLASS</span>
                            </div>
                            <ul>
                                <li>Free riding</li>
                                <li>Unlimited equipments</li>
                                <li>Personal trainer</li>
                                <li>Weight losing classes</li>
                                <li>Month to mouth</li>
                                <li>No time restriction</li>
                            </ul>
                            <a className="btn" href="">enroll now</a>
                        </div>

                        <div className="priceitem">
                            <h3>12 Month unlimited</h3>
                            <div className="money">
                                <h2>$ 99.0</h2>
                                <span>SINGLE CLASS</span>
                            </div>
                            <ul>
                                <li>Free riding</li>
                                <li>Unlimited equipments</li>
                                <li>Personal trainer</li>
                                <li>Weight losing classes</li>
                                <li>Month to mouth</li>
                                <li>No time restriction</li>
                            </ul>
                            <a className="btn" href="">enroll now</a>
                        </div>

                        <div className="priceitem">
                            <h3>6 Month unlimited</h3>
                            <div className="money">
                                <h2>$ 59.0</h2>
                                <span>SINGLE CLASS</span>
                            </div>
                            <ul>
                                <li>Free riding</li>
                                <li>Unlimited equipments</li>
                                <li>Personal trainer</li>
                                <li>Weight losing classes</li>
                                <li>Month to mouth</li>
                                <li>No time restriction</li>
                            </ul>
                            <a className="btn" href="">enroll now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="container">
                    <div className="title">
                        <div className="teamtitle">
                            <span>our team</span>
                            <h2>TRAIN WITH EXPERTS</h2>
                        </div>
                        <a href="">Appointment</a>
                    </div>
                    <div className="slider">
                        <div className="slides" style={{ transform: `translateX(-${currentIndex * (360 + 10)}px)` }}> {/* Điều chỉnh translateX để chuyển slide */}
                            {Object.values(teamImages).map((src, index) => (
                                <div className="slide" key={index}>
                                    <img
                                        src={src}
                                        alt={`Team member ${index + 1}`}
                                        onError={(e) => { e.target.src = "defaultImage.jpg"; }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="support">
                <div className="container">
                    <div className="items">
                        <div className="item">
                            <span>
                                <FaMapMarkerAlt />
                            </span>
                            <p>333 Middle Winchendon Rd, Rindge,<br />NH 03461</p>
                        </div>

                        <div className="item">
                            <span>
                                <MdOutlineSmartphone />
                            </span>
                            <p>125-711-811</p>
                        </div>

                        <div className="item">
                            <span>
                                <IoMdMail />
                            </span>
                            <p>Support.gymcenter@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

        </Wrapper>
    );
}

export default HomePage;
