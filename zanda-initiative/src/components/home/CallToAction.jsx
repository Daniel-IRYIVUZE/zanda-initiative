// src/components/home/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Us in Rewriting Her Story
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Your partnership can unlock potential and create lasting change for young women 
          and their families in Rwanda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/get-involved"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Get Involved Today
          </Link>
          <Link
            to="/our-impact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
          >
            Make a Donation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;