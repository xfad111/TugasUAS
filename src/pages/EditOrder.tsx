import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderForm from '../components/forms/OrderForm';
import { useOrders } from '../context/OrderContext';

const EditOrder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById } = useOrders();
  const navigate = useNavigate();
  
  const order = id ? getOrderById(id) : undefined;
  
  // If the order doesn't exist, redirect to dashboard
  if (!order) {
    navigate('/dashboard');
    return null;
  }
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Edit Order</h1>
          <p className="text-gray-600 text-center mb-8">
            Update your order details below.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <OrderForm initialData={order} isEdit={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;