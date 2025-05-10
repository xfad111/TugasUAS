import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Creative Solutions for <span className="text-primary-700">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              IFA FOUNDATION delivers innovative creative services that help businesses stand out in today's competitive landscape. From design to development, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/services')}
                className="btn-primary text-base px-6 py-3"
              >
                Explore Services
              </button>
              <button
                onClick={() => navigate('/about')}
                className="btn-outline text-base px-6 py-3 flex items-center justify-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Creative team working together" 
              className="rounded-lg shadow-xl w-full object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;