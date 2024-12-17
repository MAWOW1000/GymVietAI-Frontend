import React, { useState, useEffect } from "react";
import Wrapper from "./ContentWrapper";
import { MdDirectionsBike, MdOutlineSmartphone } from "react-icons/md";
import { IoIosFitness, IoMdMail } from "react-icons/io";
import { IoFitnessSharp, IoNutrition } from "react-icons/io5";
import { FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import homepageVideo from "../../../../assets/videos/homepageVideo.mp4"


function HomePage() {
    const images = {
        hero: require('../../../../assets/images/hero.jpg'),
        class1: require('../../../../assets/images/aClass1.jpg'),
        class2: require('../../../../assets/images/aClass2.jpg'),
        class3: require('../../../../assets/images/aClass3.jpg'),
        class4: require('../../../../assets/images/aClass4.jpg'),
        class5: require('../../../../assets/images/aClass5.jpg'),
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
    const [teamImagesKeys] = useState(Object.keys(teamImages));

    // Hàm để chuyển đến hình ảnh tiếp theo
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % teamImagesKeys.length;
            return newIndex;
        });
    };

    // Sử dụng useEffect để tự động chuyển đổi hình ảnh
    useEffect(() => {
        const timer = setInterval(nextSlide, 3000); // Chuyển đổi sau mỗi 3 giây

        // Xóa bộ đếm thời gian khi component unmount
        return () => clearInterval(timer);
    }, [teamImagesKeys.length - 1]); // Thêm teamImagesKeys.length vào mảng phụ thuộc

    return (
        <Wrapper>
            {/* <div className="bg" style={{ backgroundImage: `url(${images.hero})` }}> */}
            <div className="bg">
                <video
                    src={homepageVideo}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        // position: "absolute",
                        // top: 0,
                        // left: 0,
                        // zIndex: -1,
                    }}
                ></video>
                <div className="about">
                    <span>Shape your body</span>
                    <h1>be <strong>strong</strong><br /> training hard</h1>
                    <a href="" className="btn">Get info</a>
                </div>
            </div>

            <section className="choose">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="des">
                                <span>why choose us</span>
                                <h2>push your limits forward</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 align-items-center d-flex flex-column">
                            <span>
                                <IoNutrition />
                            </span>
                            <h4>Tailored Workout&Meal Plans</h4> {/*Lịch tập và chế độ ăn phù hợp */}
                            <p>Get personalized workout and meal suggestions based on your profile</p> {/*Đề xuất lịch tập và thực đơn cá nhân hóa*/}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 align-items-center d-flex flex-column">
                            <span>
                                <MdDirectionsBike />
                            </span>
                            <h4>Smart Assistance</h4> {/*Hỗ trợ thông minh */}
                            <p>Chatbot AI provides instant support and guidance</p> {/*Chatbot AI hỗ trợ và hướng dẫn nhanh chóng */}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 align-items-center d-flex flex-column">
                            <span>
                                <IoFitnessSharp />
                            </span>
                            <h4>User-Friendly Interface</h4> {/*Giao diện dễ sử dụng */}
                            <p>Easily track and adjust your workout schedule</p> {/*Dễ dàng theo dõi và điều chỉnh lịch tập */}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 align-items-center d-flex flex-column">
                            <span>
                                <IoIosFitness />
                            </span>
                            <h4>All-in-one Convenience</h4> {/*Tiện ích đa năng */}
                            <p>Enjoy QR payments, workout management, and result tracking</p> {/*Thanh toán QR, quản lý bài tập và theo dõi kết quả */}
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
                        {[
                            {
                                img: images.class1,
                                tag: 'SMART',
                                title: 'Generate Workout Plan'
                            },
                            {
                                img: images.class2,
                                tag: 'SMART',
                                title: 'Generate Meal Plan'
                            },
                            {
                                img: images.class3,
                                tag: 'INFORMATION',
                                title: 'Extensive online library'
                            },
                            {
                                img: images.class4,
                                tag: 'FAST',
                                title: 'Smart chatbot system'
                            },
                            {
                                img: images.class5,
                                tag: 'FAST',
                                title: 'Online payment'
                            }
                        ].map((item, index) => (
                            <div className="classitem" key={index}>
                                <img src={item.img} alt={item.title} />
                                <div className="citext">
                                    <span>{item.tag}</span>
                                    <h5>{item.title}</h5>
                                    <a href=""><FaChevronRight /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2>registration now to get more deals</h2>
                            <h4>Where health, beauty and fitness meet.</h4>
                            <a href="">Appointment</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="price">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                <span>Our class</span>
                                <h2>choose your pricing plan</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="priceitem">
                                <h3>BASIC</h3>
                                <div className="money">
                                    <h2>$ 0.0</h2>
                                    <span>On 30-Days</span>
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

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="priceitem">
                                <h3>PREMIUM</h3>
                                <div className="money">
                                    <h2>$ 3.9</h2>
                                    <span>On 30-Days</span>
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

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="priceitem">
                                <h3>VIP</h3>
                                <div className="money">
                                    <h2>$ 7.9</h2>
                                    <span>On 30-Days</span>
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
                </div>
            </section>

            <section className="team">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                <div className="teamtitle">
                                    <span>our team</span>
                                    <h2>TRAIN WITH EXPERTS</h2>
                                </div>
                                <a href="">Appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider">
                                <div className="slides" style={{ transform: `translateX(-${currentIndex * 250}px)` }}> {/* Điều chỉnh translateX để chuyển slide */}
                                    {teamImagesKeys.map((key, index) => (
                                        <div className="slide" key={index}>
                                            <img
                                                src={teamImages[key]}
                                                alt={`Team member ${index + 1}`}
                                                onError={(e) => { e.target.src = "defaultImage.jpg"; }}
                                                style={{ transition: 'transform 0.3s ease-in-out' }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="support">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <p>333 Middle Winchendon Rd, Rindge,<br />NH 03461</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <span>
                                    <MdOutlineSmartphone />
                                </span>
                                <p>125-711-811</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <span>
                                    <IoMdMail />
                                </span>
                                <p>Support.gymcenter@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Wrapper>
    );
}

export default HomePage;
