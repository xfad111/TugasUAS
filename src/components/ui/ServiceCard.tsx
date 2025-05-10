import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceType } from '../../types';
import { 
  Palette, 
  Globe, 
  FileText, 
  Video, 
  Share2 
} from 'lucide-react';

interface ServiceCardProps {
  serviceType: ServiceType;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  serviceType, 
  description, 
  features 
}) => {
  const navigate = useNavigate();

  const getIcon = () => {
    switch (serviceType) {
      case ServiceType.GraphicDesign:
        return <Palette className="h-10 w-10 text-primary-600" />;
      case ServiceType.WebDevelopment:
        return <Globe className="h-10 w-10 text-primary-600" />;
      case ServiceType.ContentCreation:
        return <FileText className="h-10 w-10 text-primary-600" />;
      case ServiceType.VideoProduction:
        return <Video className="h-10 w-10 text-primary-600" />;
      case ServiceType.SocialMediaManagement:
        return <Share2 className="h-10 w-10 text-primary-600" />;
      default:
        return null;
    }
  };

  const handleOrderClick = () => {
    navigate('/order-service', { state: { serviceType } });
  };

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary-100 mx-auto mb-4">
        {getIcon()}
      </div>
      
      <h3 className="text-xl font-semibold text-center mb-3">{serviceType}</h3>
      
      <p className="text-gray-600 text-center mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block h-5 w-5 rounded-full bg-primary-100 text-primary-700 text-center text-xs font-bold leading-5 mr-2">
              ✓
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={handleOrderClick}
        className="btn-primary w-full"
      >
        Order Service
      </button>
    </div>
  );
};

export default ServiceCard;