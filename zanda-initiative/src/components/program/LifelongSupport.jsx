// src/components/program/LifelongSupport.jsx
import React from 'react';
import { Heart, Users, Smartphone, TrendingUp } from 'lucide-react';

const LifelongSupport = () => {
  const supportServices = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Zero Abandonment Promise",
      description: "Our commitment to never leave our graduates behind, providing ongoing support throughout their journey"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Incubation Support",
      description: "Help graduates start their own businesses or form cooperatives with seed funding and mentorship"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Platform",
      description: "Access to our custom app with video lessons, progress tracking, and online marketplace"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Mentorship Network",
      description: "Connection to business professionals and successful alumni for guidance and networking"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lifelong Support</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment doesn't end at graduation. We provide continuous support to ensure 
            our women thrive long after they complete the program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Zanda Digital Platform</h3>
          <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
            Our custom-built platform in English and Kinyarwanda provides ongoing access to 
            resources, mentorship, and market opportunities for all our graduates.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary-500 px-4 py-2 rounded-full">Video Lessons</span>
            <span className="bg-primary-500 px-4 py-2 rounded-full">Progress Tracking</span>
            <span className="bg-primary-500 px-4 py-2 rounded-full">Mentor Chat</span>
            <span className="bg-primary-500 px-4 py-2 rounded-full">Online Shop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifelongSupport;