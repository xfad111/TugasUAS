import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/layout/ProtectedRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import OrderService from './pages/OrderService';
import EditOrder from './pages/EditOrder';
import ViewInvoice from './pages/ViewInvoice';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/order-service" 
          element={
            <ProtectedRoute>
              <OrderService />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/orders/:id/edit" 
          element={
            <ProtectedRoute>
              <EditOrder />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/orders/:id/invoice" 
          element={
            <ProtectedRoute>
              <ViewInvoice />
            </ProtectedRoute>
          } 
        />
        
        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;