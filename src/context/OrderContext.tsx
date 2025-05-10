import React, { createContext, useState, useContext, useEffect } from 'react';
import { Order, ServiceType, OrderStatus } from '../types';
import { useAuth } from './AuthContext';

interface OrderContextType {
  orders: Order[];
  userOrders: Order[];
  getOrderById: (id: string) => Order | undefined;
  createOrder: (order: Omit<Order, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'status'>) => Order;
  updateOrder: (id: string, updates: Partial<Order>) => boolean;
  deleteOrder: (id: string) => boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Sample initial orders
const INITIAL_ORDERS: Order[] = [
  {
    id: '1',
    userId: '1',
    serviceType: ServiceType.GraphicDesign,
    description: 'Company logo redesign with modern aesthetics',
    budget: 500,
    timeline: '2 weeks',
    status: OrderStatus.Completed,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    userId: '1',
    serviceType: ServiceType.WebDevelopment,
    description: 'E-commerce website development with product catalog',
    budget: 3000,
    timeline: '2 months',
    status: OrderStatus.InProgress,
    createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Load orders from localStorage or use initial data
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    } else {
      setOrders(INITIAL_ORDERS);
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Filter orders for the current user
  const userOrders = user 
    ? user.isAdmin 
      ? orders 
      : orders.filter(order => order.userId === user.id)
    : [];

  const getOrderById = (id: string) => {
    return orders.find(order => order.id === id);
  };

  const createOrder = (orderData: Omit<Order, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'status'>) => {
    if (!user) throw new Error('User must be logged in to create an order');
    
    const newOrder: Order = {
      id: Date.now().toString(),
      userId: user.id,
      ...orderData,
      status: OrderStatus.Pending,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setOrders(prevOrders => [...prevOrders, newOrder]);
    return newOrder;
  };

  const updateOrder = (id: string, updates: Partial<Order>) => {
    const orderIndex = orders.findIndex(order => order.id === id);
    
    if (orderIndex === -1) return false;
    
    // Ensure user can only update their own orders unless they're an admin
    if (!user?.isAdmin && orders[orderIndex].userId !== user?.id) {
      return false;
    }
    
    const updatedOrder = {
      ...orders[orderIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    const newOrders = [...orders];
    newOrders[orderIndex] = updatedOrder;
    
    setOrders(newOrders);
    return true;
  };

  const deleteOrder = (id: string) => {
    const orderIndex = orders.findIndex(order => order.id === id);
    
    if (orderIndex === -1) return false;
    
    // Ensure user can only delete their own orders unless they're an admin
    if (!user?.isAdmin && orders[orderIndex].userId !== user?.id) {
      return false;
    }
    
    setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    return true;
  };

  return (
    <OrderContext.Provider value={{ 
      orders, 
      userOrders, 
      getOrderById, 
      createOrder, 
      updateOrder, 
      deleteOrder 
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};