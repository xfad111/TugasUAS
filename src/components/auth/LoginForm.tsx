import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogIn } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!formData.username.trim() || !formData.password) {
      setError('Username and password are required');
      setIsSubmitting(false);
      return;
    }
    
    const success = login(formData.username, formData.password);
    
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-2">
          <LogIn className="h-10 w-10 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-600">Log in to your account to continue</p>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="form-input"
            autoComplete="username"
          />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Link to="#" className="text-xs text-primary-700 hover:text-primary-800">
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="form-input"
            autoComplete="current-password"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Don't have an account?</span>{' '}
        <Link to="/signup" className="text-primary-700 hover:text-primary-800 font-medium">
          Sign up now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;