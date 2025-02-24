import React from 'react';
import { ArrowRight, Sparkles, Heart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'Derma Peeling',
      description: 'Revitalize your skin with our gentle yet effective exfoliation.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Skin Cleaning',
      description: 'Deep cleansing treatments that leave your skin glowing.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Eyebrows Styling',
      description: 'Precision shaping to enhance your natural beauty.',
      icon: Smile,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607779097040-26e80aa4576f?auto=format&fit=crop&q=80"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Experience Radiant Beauty
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-slide-up">
            Your sanctuary for beauty and wellness in the heart of the city
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Explore Our Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Steticts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Steticts, we believe in enhancing your natural beauty through expert care
              and premium treatments. Our commitment to excellence ensures you receive
              the highest quality service in a serene and luxurious environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Our Featured Treatments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <service.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-primary font-medium hover:text-primary/80 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Beauty Journey?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Book Your Appointment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}