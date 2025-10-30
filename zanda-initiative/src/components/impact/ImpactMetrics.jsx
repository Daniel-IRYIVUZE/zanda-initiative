// src/components/impact/ImpactMetrics.jsx
import React from 'react';
import { Target, Users, DollarSign, TrendingUp } from 'lucide-react';

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: <Target className="h-8 w-8" />,
      value: "90%",
      label: "Graduation Rate Goal",
      description: "Target completion rate for our training programs"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "70%",
      label: "Employment Rate",
      description: "Graduates earning income within 3 months"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      value: "2-3x",
      label: "Income Growth",
      description: "Average increase in monthly income"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "50+",
      label: "Women Trained Annually",
      description: "By 2027, scaling our impact each year"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Impact Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover-lift">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;