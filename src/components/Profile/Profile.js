import React, { useState, useEffect } from 'react';
import { getUserByEmail } from '../../util/authenAxios/authenApi';
import moment from 'moment';
import './Profile.scss';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../assets/images/hero.jpg';
import Spinner from '../Spinner/Spinner'; // Thêm import này

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const { email } = useSelector((state) => state.system);

    // Thêm console.log để debug
    console.log("Email from Redux:", email);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                console.log("Fetching user info for email:", email);
                const response = await getUserByEmail(email);
                console.log("API Response:", response);
                setUserInfo(response.DT);
                setLoading(false);
            } catch (error) {
                console.error("Error details:", error);
                toast.error('Failed to fetch user information');
                setLoading(false);
            }
        };

        if (email) {
            fetchUserInfo();
        } else {
            console.log("No email available");
            setLoading(false); // Thêm dòng này để tránh loading vô hạn khi không có email
        }
    }, [email]);

    if (loading) {
        return <Spinner />;  // Thay thế <div>Loading...</div> bằng <Spinner />
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src={userInfo?.picture || defaultAvatar}
                    alt="Profile"
                    className="profile-picture"
                    onError={(e) => e.target.src = defaultAvatar}
                />
                <h1>{userInfo?.firstName} {userInfo?.lastName}</h1>
            </div>

            <div className="profile-content">
                <div className="profile-section">
                    <h2>Basic Information</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <label>Email:</label>
                            <span>{userInfo?.email}</span>
                        </div>
                        <div className="info-item">
                            <label>Gender:</label>
                            <span>{userInfo?.gender}</span>
                        </div>
                        <div className="info-item">
                            <label>Date of Birth:</label>
                            <span>{userInfo?.dateOfBirth ? moment(userInfo.dateOfBirth).format('YYYY-MM-DD') : 'Not set'}</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h2>Statistics</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <label>Workout Plans:</label>
                            <span>{userInfo?.workoutPlanCount || 0}</span>
                        </div>
                        <div className="stat-item">
                            <label>Nutrition Plans:</label>
                            <span>{userInfo?.nutritionPlanCount || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
