import { FaPen, FaTrash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getOrders, deleteOrder } from '../../../util/paymentAxios/paymentApi';
import { toast } from 'react-toastify';
import moment from 'moment';

function TableOrder(props) {
    const { filters, setFilters, onEditOrder, shouldRefetch } = props;
    const [orders, setOrders] = useState([]);
    const [pagination, setPagination] = useState({
        total: 0,
        total_pages: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, [filters, shouldRefetch]);

    const fetchOrders = async () => {
        try {
            const response = await getOrders(filters);
            if (response && response.EC === 0) {
                setOrders(response.DT.orders);
                setPagination(response.DT.pagination);
            }
        } catch (error) {
            toast.error('Failed to fetch orders');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (orderId) => {
        try {
            const response = await deleteOrder(orderId);
            if (response && response.EC === 0) {
                toast.success('Order deleted successfully');
                fetchOrders();
            } else {
                toast.error(response.EM || 'Failed to delete order');
            }
        } catch (error) {
            toast.error('Failed to delete order');
        }
    };

    const handleStatusStyle = (status) => {
        switch(status.toLowerCase()) {
            case 'completed': return 'text-success';
            case 'pending': return 'text-warning';
            case 'cancelled': return 'text-danger';
            default: return '';
        }
    };

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    return (
        <div className="tableOrders">
            {orders.length > 0 ? (
                <>
                    <table className="table table-borderless table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>User</th>
                                <th>Plan</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.user_email}</td>
                                    <td>{order.plan_name}</td>
                                    <td>${order.amount}</td>
                                    <td className={handleStatusStyle(order.status)}>
                                        {order.status}
                                    </td>
                                    <td>{moment(order.created_at).format('DD/MM/YYYY HH:mm')}</td>
                                    <td>
                                        <i className="tableOrderIcon" onClick={() => onEditOrder(order)}>
                                            <FaPen />
                                        </i>
                                        <i className="tableOrderIcon" onClick={() => handleDelete(order.id)}>
                                            <FaTrash />
                                        </i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${pagination.page === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setFilters({...filters, page: filters.page - 1})}
                                    disabled={pagination.page === 1}
                                >
                                    Previous
                                </button>
                            </li>
                            {[...Array(pagination.total_pages)].map((_, index) => (
                                <li key={index} className={`page-item ${pagination.page === index + 1 ? 'active' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => setFilters({...filters, page: index + 1})}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${pagination.page === pagination.total_pages ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setFilters({...filters, page: filters.page + 1})}
                                    disabled={pagination.page === pagination.total_pages}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <div className="text-center p-4 no-data-message">
                    <p>No orders found</p>
                </div>
            )}
        </div>
    );
}

export default TableOrder;
