import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderForm from '../components/forms/OrderForm';
import { ServiceType } from '../types';

const OrderService: React.FC = () => {
  const location = useLocation();
  const serviceType = location.state?.serviceType || undefined;
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Order a Creative Service</h1>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below with your project details and we'll get back to you promptly.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <OrderForm initialData={{ serviceType }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderService;