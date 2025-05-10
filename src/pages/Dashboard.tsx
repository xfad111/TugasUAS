import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { OrderStatus } from '../types';
import OrderCard from '../components/ui/OrderCard';
import { Plus, Search, Filter } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { userOrders } = useOrders();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'All'>('All');
  
  if (!user) {
    navigate('/login');
    return null;
  }

  // Filter orders based on search term and status
  const filteredOrders = userOrders.filter(order => {
    const matchesSearch = order.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}</h1>
            <p className="text-gray-600">
              {user.isAdmin 
                ? 'Manage all service orders from your dashboard.' 
                : 'Manage your creative service orders from your dashboard.'}
            </p>
          </div>
          
          <button
            onClick={() => navigate('/order-service')}
            className="btn-primary mt-4 md:mt-0 flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Order
          </button>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
            
            <div className="md:w-64 flex items-center">
              <Filter className="text-gray-400 h-5 w-5 mr-2" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as OrderStatus | 'All')}
                className="form-input"
              >
                <option value="All">All Statuses</option>
                {Object.values(OrderStatus).map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Orders */}
        {filteredOrders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No orders found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || statusFilter !== 'All'
                ? 'Try adjusting your search or filters'
                : 'You have not placed any orders yet'}
            </p>
            <button
              onClick={() => navigate('/order-service')}
              className="btn-primary"
            >
              Create Your First Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;