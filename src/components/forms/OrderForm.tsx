import React, { useState, useEffect } from 'react';
import { ServiceType, Order } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../context/OrderContext';

interface OrderFormProps {
  initialData?: Partial<Order>;
  isEdit?: boolean;
}

const OrderForm: React.FC<OrderFormProps> = ({ 
  initialData = {}, 
  isEdit = false 
}) => {
  const [formData, setFormData] = useState({
    serviceType: initialData.serviceType || ServiceType.GraphicDesign,
    description: initialData.description || '',
    budget: initialData.budget || 0,
    timeline: initialData.timeline || '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createOrder, updateOrder } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setFormData({
        serviceType: initialData.serviceType || ServiceType.GraphicDesign,
        description: initialData.description || '',
        budget: initialData.budget || 0,
        timeline: initialData.timeline || '',
      });
    }
  }, [initialData]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    if (!formData.budget || formData.budget <= 0) {
      newErrors.budget = 'Budget must be greater than 0';
    }
    
    if (!formData.timeline.trim()) {
      newErrors.timeline = 'Timeline is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      if (isEdit && initialData.id) {
        updateOrder(initialData.id, formData);
      } else {
        createOrder(formData);
      }
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label htmlFor="serviceType" className="form-label">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="form-input"
        >
          {Object.values(ServiceType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="description" className="form-label">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your project requirements"
          className="form-input"
        />
        {errors.description && <p className="form-error">{errors.description}</p>}
      </div>
      
      <div>
        <label htmlFor="budget" className="form-label">
          Budget (USD)
        </label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Enter your budget"
          min="0"
          step="50"
          className="form-input"
        />
        {errors.budget && <p className="form-error">{errors.budget}</p>}
      </div>
      
      <div>
        <label htmlFor="timeline" className="form-label">
          Expected Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          placeholder="e.g., 2 weeks, 1 month"
          className="form-input"
        />
        {errors.timeline && <p className="form-error">{errors.timeline}</p>}
      </div>
      
      <div className="flex items-center gap-4 pt-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn-outline flex-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex-1"
        >
          {isSubmitting ? 'Submitting...' : isEdit ? 'Update Order' : 'Create Order'}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;