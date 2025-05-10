import React from 'react';
import { ServiceType } from '../types';
import ServiceCard from '../components/ui/ServiceCard';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      type: ServiceType.GraphicDesign,
      description: "Professional graphic design services to create stunning visuals that elevate your brand and communication materials.",
      features: [
        "Logo design and brand identity",
        "Marketing materials and collateral",
        "Social media graphics",
        "Packaging design",
        "Illustration and infographics"
      ]
    },
    {
      type: ServiceType.WebDevelopment,
      description: "Custom web development solutions that combine beautiful design with powerful functionality to create impactful online experiences.",
      features: [
        "Responsive website design",
        "E-commerce development",
        "Content management systems",
        "Web application development",
        "Website maintenance and support"
      ]
    },
    {
      type: ServiceType.ContentCreation,
      description: "Strategic content creation that tells your story, engages your audience, and drives results across all platforms.",
      features: [
        "Copywriting and editing",
        "Blog posts and articles",
        "Email campaigns",
        "SEO content optimization",
        "Brand storytelling"
      ]
    },
    {
      type: ServiceType.VideoProduction,
      description: "High-quality video production services that capture attention and communicate your message effectively.",
      features: [
        "Promotional videos",
        "Product demonstrations",
        "Corporate videos",
        "Social media content",
        "Animation and motion graphics"
      ]
    },
    {
      type: ServiceType.SocialMediaManagement,
      description: "Comprehensive social media management to build your online presence, engage with your audience, and grow your business.",
      features: [
        "Platform strategy and setup",
        "Content planning and creation",
        "Community management",
        "Performance analysis",
        "Paid social campaigns"
      ]
    }
  ];

  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Creative Services</h1>
            <p className="text-xl text-gray-700 mb-8">
              We offer a comprehensive range of creative services to help your business stand out and succeed in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                serviceType={service.type}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Creative Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured yet flexible process to ensure we deliver exceptional results that meet your specific needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your business, goals, audience, and vision through in-depth consultation."
              },
              {
                number: "02",
                title: "Strategy",
                description: "Based on our findings, we develop a tailored strategy that aligns with your objectives and targets your audience effectively."
              },
              {
                number: "03",
                title: "Creation",
                description: "Our creative team brings the strategy to life, crafting beautiful and functional solutions that capture your brand essence."
              },
              {
                number: "04",
                title: "Refinement",
                description: "We fine-tune our work based on your feedback, ensuring every detail meets your expectations and requirements."
              },
              {
                number: "05",
                title: "Delivery",
                description: "We deliver the final product along with any necessary training or support to ensure a smooth implementation."
              }
            ].map((step, index, array) => (
              <div key={index} className="relative">
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-6 text-xl font-bold text-primary-700">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                {index < array.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-primary-100 -ml-0.5 h-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Creative Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your creative vision to life. Our team is ready to help you achieve your goals.
          </p>
          <button
            onClick={() => navigate('/order-service')}
            className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center mx-auto"
          >
            Order a Service
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;