import { useState } from 'react';
import './ManageOrder.scss'
import { FiSearch } from "react-icons/fi";
import TableOrder from './TableOrder';
import ModalCreateOrder from './ModalCreateOrder';

function ManageOrder() {
    const [show, setShow] = useState(false);
    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        status: '',
        startDate: '',
        endDate: ''
    });
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const handleCreate = () => {
        setSelectedOrder(null);
        setShow(true);
    }

    const handleEdit = (order) => {
        setSelectedOrder(order);
        setShow(true);
    }

    const handleRefresh = () => {
        setShouldRefetch(prev => !prev);
    }

    return (
        <div className="manageOrder">
            <div className="manageOrderHeader">
                <span className="manageOrder__header__title">Manage Orders</span>
                
                <div className="manageOrder__header__filters">
                    <div className="filter-item">
                        <label>Status</label>
                        <select
                            value={filters.status}
                            onChange={(e) => setFilters({...filters, status: e.target.value})}
                        >
                            <option value="">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <label>Start Date</label>
                        <input
                            type="date"
                            value={filters.startDate}
                            onChange={(e) => setFilters({...filters, startDate: e.target.value})}
                        />
                    </div>

                    <div className="filter-item">
                        <label>End Date</label>
                        <input
                            type="date"
                            value={filters.endDate}
                            onChange={(e) => setFilters({...filters, endDate: e.target.value})}
                        />
                    </div>
                </div>

                <button onClick={handleCreate} className="manageOrder__header__button">
                    Create Order
                </button>
            </div>

            <div className="manageOrderContent">
                <TableOrder 
                    filters={filters}
                    setFilters={setFilters}
                    onEditOrder={handleEdit}
                    setShow={setShow}
                    shouldRefetch={shouldRefetch}
                />
            </div>
            
            <ModalCreateOrder 
                show={show} 
                setShow={setShow} 
                selectedOrder={selectedOrder}
                onSuccess={handleRefresh}
            />
        </div>
    );
}

export default ManageOrder;
