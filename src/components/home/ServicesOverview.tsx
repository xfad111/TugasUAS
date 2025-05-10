import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Globe, FileText, Video, Share2 } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Palette className="h-10 w-10 text-primary-600" />,
      title: 'Graphic Design',
      description: 'Professional designs that capture your brand essence and message.',
    },
    {
      icon: <Globe className="h-10 w-10 text-primary-600" />,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies.',
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-600" />,
      title: 'Content Creation',
      description: 'Engaging content that tells your story and connects with your audience.',
    },
    {
      icon: <Video className="h-10 w-10 text-primary-600" />,
      title: 'Video Production',
      description: 'High-quality videos that showcase your products and services.',
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary-600" />,
      title: 'Social Media Management',
      description: 'Strategic social media management to boost your online presence.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Creative Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of professional creative services to help your business grow and thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <div className="flex justify-center">
                <button 
                  onClick={() => navigate('/services')}
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/order-service')}
            className="btn-primary px-6 py-3"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;