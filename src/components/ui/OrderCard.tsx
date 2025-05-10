import React from 'react';
import { Order, OrderStatus } from '../../types';
import { CalendarClock, DollarSign, Edit, Trash2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../context/OrderContext';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const navigate = useNavigate();
  const { deleteOrder } = useOrders();

  const statusColors = {
    [OrderStatus.Pending]: 'bg-amber-100 text-amber-800',
    [OrderStatus.InProgress]: 'bg-blue-100 text-blue-800',
    [OrderStatus.Completed]: 'bg-green-100 text-green-800',
    [OrderStatus.Cancelled]: 'bg-red-100 text-red-800',
  };

  const handleEdit = () => {
    navigate(`/orders/${order.id}/edit`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      deleteOrder(order.id);
    }
  };

  const handleViewInvoice = () => {
    navigate(`/orders/${order.id}/invoice`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="card hover:shadow-md transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{order.serviceType}</h3>
          <p className="text-gray-600 text-sm">{formatDate(order.createdAt)}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
          {order.status}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4">{order.description}</p>
      
      <div className="flex gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-1" />
          <span className="text-sm">${order.budget}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <CalendarClock className="h-4 w-4 mr-1" />
          <span className="text-sm">{order.timeline}</span>
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 mt-2">
        <button
          onClick={handleViewInvoice}
          className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
          title="View Invoice"
        >
          <FileText className="h-4 w-4" />
        </button>
        <button
          onClick={handleEdit}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
          title="Edit Order"
        >
          <Edit className="h-4 w-4" />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          title="Delete Order"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;