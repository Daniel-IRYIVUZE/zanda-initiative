// src/components/program/EarnWhileLearn.jsx
import React from 'react';
import { DollarSign, ShoppingBag, Users, Star } from 'lucide-react';

const EarnWhileLearn = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Immediate Income",
      description: "Start earning from real client projects within the first month"
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Portfolio Building",
      description: "Create actual products for your portfolio while learning"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Experience",
      description: "Learn to work with real clients and understand market needs"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Confidence Boost",
      description: "Prove your capabilities and build self-esteem through real work"
    }
  ];

  const products = [
    { name: "School Bags", count: "14+ sold", color: "bg-blue-100 text-blue-600" },
    { name: "Company Uniforms", count: "3+ orders", color: "bg-green-100 text-green-600" },
    { name: "Custom Orders", count: "Growing", color: "bg-purple-100 text-purple-600" },
    { name: "Accessories", count: "Coming soon", color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Earn While You Learn</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our students don't just practice on scraps. They work on real orders for real customers, 
            earning income and building confidence from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Products & Sales</h3>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className={`text-sm font-semibold mb-2 ${product.color}`}>{product.name}</div>
                  <div className="text-lg font-bold text-gray-900">{product.count}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Recent Success:</strong> Sold 14 bags and 3 company uniforms made by our trainees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnWhileLearn;