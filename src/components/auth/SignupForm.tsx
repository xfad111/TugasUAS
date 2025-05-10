import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserPlus } from 'lucide-react';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/[A-Z]/.test(formData.password) || 
               !/[0-9]/.test(formData.password) || 
               !/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = 'Password must contain an uppercase letter, a number, and a special character';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const success = signup(formData.name, formData.username, formData.password);
    
    if (success) {
      navigate('/dashboard');
    } else {
      setErrors({ username: 'Username already exists' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-2">
          <UserPlus className="h-10 w-10 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
        <p className="text-gray-600">Sign up to get started with IFA Foundation</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="form-input"
            autoComplete="name"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>
        
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
            placeholder="Choose a username"
            className="form-input"
            autoComplete="username"
          />
          {errors.username && <p className="form-error">{errors.username}</p>}
        </div>
        
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="form-input"
            autoComplete="new-password"
          />
          {errors.password && <p className="form-error">{errors.password}</p>}
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 6 characters with an uppercase letter, a number, and a special character.
          </p>
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="form-input"
            autoComplete="new-password"
          />
          {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full mt-6"
        >
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>{' '}
        <Link to="/login" className="text-primary-700 hover:text-primary-800 font-medium">
          Sign in instead
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;