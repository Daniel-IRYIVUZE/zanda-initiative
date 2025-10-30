// src/components/home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/our-story"
              className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors text-center"
            >
              {t('discoverStory')}
            </Link>
            <Link
              to="/our-impact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center"
            >
              {t('supportMission')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;