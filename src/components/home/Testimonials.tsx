import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "IFA FOUNDATION transformed our brand identity with their exceptional graphic design services. The team truly understood our vision and delivered beyond our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote: "Working with IFA FOUNDATION on our website redesign was seamless. Their team is responsive, creative, and technically skilled. Our new site has received overwhelmingly positive feedback.",
      author: "Michael Chen",
      position: "CEO",
      company: "Innovate Studios",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote: "The content strategy IFA FOUNDATION developed for us increased our engagement metrics by 200%. Their creative approach to storytelling has transformed how we connect with our audience.",
      author: "Emma Rodriguez",
      position: "Brand Manager",
      company: "Global Retail Group",
      rating: 4,
      image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with IFA FOUNDATION.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;