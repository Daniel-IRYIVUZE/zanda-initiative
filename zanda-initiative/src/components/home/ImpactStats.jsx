// src/components/home/ImpactStats.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ImpactStats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">200,000+</div>
            <p className="text-gray-700 font-medium">Young people entering job market annually</p>
          </div>
          
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">7.2%</div>
            <p className="text-gray-700 font-medium">Of teenage girls become mothers (RDHS, 2020)</p>
          </div>
          
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-gray-700 font-medium">Of pilot trainees earned income while learning</p>
          </div>
          
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">0</div>
            <p className="text-gray-700 font-medium">Abandonment Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;