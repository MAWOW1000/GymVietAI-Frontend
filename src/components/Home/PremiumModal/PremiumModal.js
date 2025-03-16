import React, { useEffect, useState, useRef } from 'react';
import { getSubscriptionPlans, createPayment, validatePayment } from '../../../util/paymentAxios/paymentApi';
import { useLocation, useNavigate } from 'react-router-dom';
import './PremiumModal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setPremium } from '../../../redux/slices/systemSlice';

const PremiumModal = ({ isOpen, onClose }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [plans, setPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userId, isLogin } = useSelector((state) => state.system);
    const hasValidatedPayment = useRef(false);
    const isMounted = useRef(true);

    // Reset hasValidatedPayment khi modal đóng
    useEffect(() => {
        if (!isOpen) {
            hasValidatedPayment.current = false;
        }
    }, [isOpen]);

    // Cleanup khi unmount
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await getSubscriptionPlans();
                if (response.success) {
                    setPlans(response.data);
                }
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        if (isOpen) {
            fetchPlans();
        }
    }, [isOpen]);

    useEffect(() => {
        const handlePaymentReturn = async () => {
            const searchParams = new URLSearchParams(location.search);
            const hasPaymentParams = searchParams.has('vnp_ResponseCode');

            // Thêm điều kiện isOpen để chỉ validate khi modal mở
            if (hasPaymentParams && !hasValidatedPayment.current && isMounted.current && isOpen) {
                hasValidatedPayment.current = true;

                try {
                    setIsLoading(true);
                    const params = {};
                    searchParams.forEach((value, key) => {
                        params[key] = value;
                    });

                    const response = await validatePayment(params);

                    if (!isMounted.current) return;

                    if (response.EC === 0) {
                        // Đánh dấu là đã premium
                        dispatch(setPremium(true));

                        toast.success('🎉 Payment successful! Your premium features are now activated.', {
                            autoClose: 5000,
                            position: "top-center"
                        });
                        navigate('/', { replace: true });
                        onClose();
                    } else {
                        let errorMessage = response.EM || 'Payment verification failed';

                        if (params.vnp_ResponseCode === '24') {
                            errorMessage = 'Payment cancelled by user';
                        } else if (params.vnp_ResponseCode !== '00') {
                            errorMessage = 'Payment failed. Please try again';
                        }

                        toast.error(`❌ ${errorMessage}`, {
                            autoClose: 5000,
                            position: "top-center"
                        });
                        navigate('/', { replace: true });
                    }
                } catch (error) {
                    console.error('Payment verification error:', error);
                    toast.error('⚠️ Unable to verify payment. Please contact support.', {
                        autoClose: 5000,
                        position: "top-center"
                    });
                    navigate('/', { replace: true });
                } finally {
                    if (isMounted.current) {
                        setIsLoading(false);
                    }
                }
            }
        };

        handlePaymentReturn();
    }, [location.search, isOpen]);

    if (!isOpen) return null;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const getMonthlyPrice = (price, duration) => {
        return formatPrice(price / duration);
    };

    const handleSubscribe = async (planId) => {
        try {
            setIsLoading(true);
            if (!isLogin || !userId) {
                toast.error('Please login to subscribe');
                return;
            }

            const response = await createPayment(userId, planId);

            if (response.EC === 0 && response.DT?.paymentUrl) {
                localStorage.setItem('currentOrder', response.DT.orderId);
                window.location.href = response.DT.paymentUrl;
            } else {
                toast.error(response.EM || 'Failed to create payment');
            }
        } catch (error) {
            console.error('Payment creation error:', error);
            toast.error('Failed to process payment. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="premium-modal-overlay" onClick={onClose}>
            <div className="premium-modal" onClick={e => e.stopPropagation()}>
                <button className="premium-modal__close" onClick={onClose}>×</button>

                <div className="premium-modal__header">
                    <h1>
                        <span className="blue-text">PREMIUM</span>
                        <br />
                        MEMBERSHIP PLANS
                    </h1>
                    <p>Choose the plan that works best for you!</p>
                </div>

                <div className="premium-modal__plans">
                    <div className="features-list">
                        {plans.length > 0 && plans[0].features.map((feature, index) => (
                            <div className="feature" key={index}>
                                <span>{feature}</span>
                                <div className="checkmarks">
                                    <span className="check">✓</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="premium-modal__pricing">
                    {plans.map((plan) => (
                        <div className="pricing-card" key={plan.id}>
                            {plan.duration >= 6 && (
                                <div className="save-badge">Save {((1 - (plan.price / plan.duration) / (plans[0]?.price || 1)) * 100).toFixed(0)}%</div>
                            )}
                            <h3>{plan.name}</h3>
                            <div className="price">{getMonthlyPrice(plan.price, plan.duration)}/month</div>
                            <div className="renewal">
                                Total: {formatPrice(plan.price)}
                                <br />
                                Duration: {plan.duration} {plan.duration === 1 ? 'month' : 'months'}
                            </div>
                            <button
                                className="subscribe-btn"
                                onClick={() => handleSubscribe(plan.id)}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Processing...' : 'Subscribe Now'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PremiumModal;
