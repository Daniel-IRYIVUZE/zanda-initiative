// src/components/home/Introduction.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Introduction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Than Skills, We Build Futures
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Zanda Initiative is a social enterprise breaking the cycle of poverty and shame. 
            We provide a holistic 6-month program where young women learn vocational tailoring, 
            digital literacy, and entrepreneurship. Through our unique "earn-while-you-learn" model, 
            they gain income, experience, and hope from day one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-2xl">✂️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Vocational Training</h3>
            <p className="text-gray-600">
              Master tailoring skills from basic stitches to professional garment construction
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Literacy</h3>
            <p className="text-gray-600">
              Learn computer basics, social media marketing, and online business management
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrepreneurship</h3>
            <p className="text-gray-600">
              Develop business plans, financial management skills, and customer service excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;