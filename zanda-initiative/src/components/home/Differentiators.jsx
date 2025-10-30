// src/components/home/Differentiators.jsx
import React from 'react';
import { CheckCircle, Users, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Differentiators = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Complete Training",
      description: "We teach sewing + digital skills + business, not just one skill"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Learn and Earn",
      description: "Students work on real orders and earn money from the start"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Special Support",
      description: "Our program helps women heal from trauma and build confidence"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lifelong Support",
      description: "Continued mentorship and access to our network and platform"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go beyond traditional training programs to provide comprehensive support 
            that transforms lives and creates lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;