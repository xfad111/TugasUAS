import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="page-transition">
      <Hero />
      <ServicesOverview />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose IFA FOUNDATION</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Creative Excellence</h3>
                <p className="text-primary-100">We deliver innovative, award-winning creative work that stands out in today's competitive landscape.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Strategic Approach</h3>
                <p className="text-primary-100">Every project begins with understanding your goals and audience to develop targeted solutions.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-primary-100">Our work doesn't just look good—it delivers measurable results for your business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-700 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your creative vision to life. Our team is ready to help you stand out and succeed.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center mx-auto"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;