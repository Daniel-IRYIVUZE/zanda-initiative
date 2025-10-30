// src/pages/OurImpact.jsx
import React from 'react';
import ImpactMetrics from '../components/impact/ImpactMetrics';
import SuccessStories from '../components/impact/SuccessStories';
import Traction from '../components/impact/Traction';
import DonationSection from '../components/impact/DonationSection';

const OurImpact = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Measuring Change, One Life at a Time</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to transparency and track our success through clear, measurable outcomes that transform lives and communities.
          </p>
        </div>
        
        <ImpactMetrics />
        <SuccessStories />
        <Traction />
        <DonationSection />
      </div>
    </div>
  );
};

export default OurImpact;