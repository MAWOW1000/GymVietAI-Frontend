import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createOrder, updateOrder, getSubscriptionPlans } from '../../../util/paymentAxios/paymentApi';
import { toast } from 'react-toastify';

function ModalCreateOrder(props) {
    const { show, setShow, selectedOrder, onSuccess } = props;
    const [formData, setFormData] = useState({
        userId: '',
        planId: '',
        amount: '',
        status: 'pending',
        note: ''
    });
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetchPlans();
    }, []);

    useEffect(() => {
        if (selectedOrder) {
            setFormData({
                userId: selectedOrder.user_id,
                planId: selectedOrder.plan_id,
                amount: selectedOrder.amount,
                status: selectedOrder.status,
                note: selectedOrder.admin_note || ''
            });
        } else {
            setFormData({
                userId: '',
                planId: '',
                amount: '',
                status: 'pending',
                note: ''
            });
        }
    }, [selectedOrder]);

    const fetchPlans = async () => {
        try {
            const response = await getSubscriptionPlans();
            if (response && response.EC === 0) {
                setPlans(response.DT);
            }
        } catch (error) {
            toast.error('Failed to fetch subscription plans');
        }
    };

    const handleSubmit = async () => {
        try {
            if (!formData.userId || !formData.planId || !formData.amount) {
                toast.error('Please fill in all required fields');
                return;
            }

            const response = selectedOrder 
                ? await updateOrder(selectedOrder.id, formData)
                : await createOrder(formData);

            if (response && response.EC === 0) {
                toast.success(selectedOrder ? 'Order updated successfully' : 'Order created successfully');
                setShow(false);
                if (onSuccess) onSuccess();
            } else {
                toast.error(response.EM || 'Operation failed');
            }
        } catch (error) {
            toast.error('Operation failed');
        }
    };

    return (
        <Modal className='modalCreateOrder' show={show} onHide={() => setShow(false)} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title>{selectedOrder ? 'Edit Order' : 'Create Order'}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group mb-3">
                    <label>User ID <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={formData.userId}
                        onChange={(e) => setFormData({...formData, userId: e.target.value})}
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Plan <span className="text-danger">*</span></label>
                    <select 
                        className="form-control"
                        value={formData.planId}
                        onChange={(e) => {
                            const plan = plans.find(p => p.id === e.target.value);
                            setFormData({
                                ...formData, 
                                planId: e.target.value,
                                amount: plan ? plan.price : ''
                            });
                        }}
                    >
                        <option value="">Select a plan</option>
                        {plans.map(plan => (
                            <option key={plan.id} value={plan.id}>
                                {plan.name} - ${plan.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label>Amount <span className="text-danger">*</span></label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Status</label>
                    <select 
                        className="form-control"
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label>Admin Note</label>
                    <textarea 
                        className="form-control"
                        value={formData.note}
                        onChange={(e) => setFormData({...formData, note: e.target.value})}
                        rows="3"
                    />
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {selectedOrder ? 'Update' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreateOrder;
