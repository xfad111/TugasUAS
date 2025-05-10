import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import InvoiceView from '../components/ui/InvoiceView';
import { Invoice, InvoiceStatus } from '../types';

const ViewInvoice: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // In a real application, this would come from a database
  const mockInvoice: Invoice = {
    id: `INV-${id}`,
    orderId: id || '',
    userId: user?.id || '',
    amount: 1000, // This would normally come from the order
    status: InvoiceStatus.Pending,
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    createdAt: new Date().toISOString(),
  };
  
  const order = id ? getOrderById(id) : undefined;
  
  if (!order || !user) {
    navigate('/dashboard');
    return null;
  }
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <InvoiceView 
          invoice={mockInvoice}
          order={order}
          user={user}
        />
      </div>
    </div>
  );
};

export default ViewInvoice;