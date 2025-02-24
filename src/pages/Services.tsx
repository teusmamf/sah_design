import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Derma Peeling',
      description: 'Revitalize your skin with our gentle yet effective exfoliation. Our derma peeling treatment removes dead skin cells, unclogs pores, and stimulates cell renewal for a smoother, more radiant complexion.',
      price: 'from $120',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Skin Cleaning',
      description: 'Deep cleansing treatments that leave your skin glowing. Our comprehensive facial includes deep pore cleansing, extraction, and a customized mask to address your specific skin concerns.',
      price: 'from $90',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Eyebrows Styling',
      description: 'Precision shaping to enhance your natural beauty. Our expert estheticians will analyze your face shape and create the perfect brow arch to frame your features.',
      price: 'from $40',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Anti-Aging Facial',
      description: 'Turn back time with our advanced anti-aging facial. Using premium products and techniques, this treatment helps reduce fine lines and wrinkles while improving skin elasticity.',
      price: 'from $150',
      duration: '75 min',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=500',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our range of premium beauty treatments designed to enhance your natural beauty
            and provide the ultimate relaxation experience.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-semibold">{service.price}</span>
                      <span className="text-gray-500">{service.duration}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all"
                    >
                      Book Now
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Can't Decide? Let's Talk About Your Needs
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert estheticians are here to help you choose the perfect treatment
            for your skin type and concerns.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}