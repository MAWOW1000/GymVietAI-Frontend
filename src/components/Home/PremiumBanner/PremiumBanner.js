import React, { useState } from 'react';
import PremiumModal from '../PremiumModal/PremiumModal';
import './PremiumBanner.scss';
import { useSelector } from 'react-redux';

const PremiumBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isPremium, roleId } = useSelector((state) => state.system);
    
    console.log('PremiumBanner - roleId:', roleId);
    console.log('PremiumBanner - isPremium:', isPremium);

    // Không hiển thị banner nếu đã premium hoặc đã đóng banner hoặc là admin/premium user
    if (!isVisible || isPremium || roleId === 1 || roleId === 3) return null;

    return (
        <>
            <div className="premium-banner">
                <div className="premium-banner__content">
                    <span>Unlock Premium Features Now</span>
                    <button 
                        className="premium-banner__button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Upgrade
                    </button>
                    <button 
                        className="premium-banner__close"
                        onClick={() => setIsVisible(false)}
                    >
                        ×
                    </button>
                </div>
            </div>
            <PremiumModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default PremiumBanner;
