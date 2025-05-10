import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  
  return (
    <div className="page-transition min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;