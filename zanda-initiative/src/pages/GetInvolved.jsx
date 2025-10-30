// src/pages/GetInvolved.jsx
import React from 'react';
import { Building, ShoppingBag, Users, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GetInvolved = () => {
  const { t } = useLanguage();

  const involvementOptions = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Corporate Partnership",
      description: "Align your brand with a powerful cause and create meaningful social impact",
      actions: [
        "Sponsor a student's training program",
        "Place bulk orders for uniforms and merchandise",
        "Provide pro-bono professional services",
        "Host employee volunteering events"
      ],
      buttonText: "Become a Partner",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Place an Order",
      description: "Purchase high-quality products made by our trainees and support their education",
      actions: [
        "School uniforms and bags",
        "Company merchandise",
        "Custom sewing projects",
        "Hotel and restaurant linens"
      ],
      buttonText: "Order Products",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Volunteer",
      description: "Share your expertise and time to help our women succeed",
      actions: [
        "Business mentorship",
        "Skills training workshops",
        "Marketing and branding support",
        "Technical assistance"
      ],
      buttonText: "Volunteer Now",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Spread the Word",
      description: "Help us break the stigma and reach more women in need",
      actions: [
        "Share our story on social media",
        "Organize fundraising events",
        "Introduce us to potential partners",
        "Become a community ambassador"
      ],
      buttonText: "Share Our Mission",
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Be a Part of Her New Beginning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your support can transform lives and create lasting change. Join our mission to empower 
            young women and break the cycle of poverty in Rwanda.
          </p>
        </div>

        {/* Involvement Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mb-6`}>
                {option.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              
              <ul className="space-y-3 mb-8">
                {option.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {action}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                {option.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Financial Support Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Financial Support</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Your financial contribution directly fuels our mission. Help us scale our impact and 
            reach more young women in need of a second chance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { amount: "500,000 RWF", description: "Sponsors one woman's complete training" },
              { amount: "250,000 RWF", description: "Provides sewing machines for two students" },
              { amount: "100,000 RWF", description: "Covers materials for one training group" }
            ].map((item, index) => (
              <div key={index} className="bg-primary-500 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">{item.amount}</div>
                <p className="text-primary-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <button className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors">
            Make a Donation
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Involved?</h3>
          <p className="text-gray-600 mb-6">
            Contact us to discuss partnership opportunities, place an order, or learn more about 
            how you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:danieliryivuze4@gmail.com"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/250780162164"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:+250780162164"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;