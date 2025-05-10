import React from 'react';
import { CheckCircle, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About IFA FOUNDATION</h1>
            <p className="text-xl text-gray-700 mb-8">
              We're a team of creative professionals dedicated to helping businesses communicate effectively through innovative design and strategic content.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018, IFA FOUNDATION began with a simple mission: to provide businesses with creative services that truly make an impact. What started as a small team has grown into a full-service creative agency serving clients globally.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Isabella Adams, recognized that many businesses struggled to communicate their value effectively. She assembled a team of experts across design, development, and content creation to bridge this gap.
              </p>
              <p className="text-gray-700">
                Today, we continue to evolve and innovate, staying ahead of industry trends to deliver cutting-edge creative solutions for our clients.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="IFA FOUNDATION team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and core values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-6 mx-auto">
                <Target className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To empower businesses through exceptional creative services that elevate brands, engage audiences, and drive meaningful results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-6 mx-auto">
                <Award className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Excellence:</strong> We strive for exceptional quality in everything we create.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Innovation:</strong> We embrace creativity and forward-thinking solutions.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Integrity:</strong> We operate with honesty and transparency.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Partnership:</strong> We build collaborative relationships with our clients.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the creative minds behind IFA FOUNDATION.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Isabella Adams",
                role: "Founder & Creative Director",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Marcus Lee",
                role: "Design Lead",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Olivia Chen",
                role: "Web Development Director",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "David Wilson",
                role: "Content Strategy Manager",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-lg mx-auto object-cover w-full aspect-square"
                  />
                  <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300"></div>
                </div>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;