// src/pages/OurProgram.jsx
import React from 'react';
import ProgramOverview from '../components/program/ProgramOverview';
import CourseVideos from '../components/program/CourseVideos';
import EarnWhileLearn from '../components/program/EarnWhileLearn';
import LifelongSupport from '../components/program/LifelongSupport';

const OurProgram = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">A Holistic Path to Independence</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 6-month program combines practical skills, digital literacy, and business training to create lasting change.
          </p>
        </div>
        
        <ProgramOverview />
        <CourseVideos />
        <EarnWhileLearn />
        <LifelongSupport />
      </div>
    </div>
  );
};

export default OurProgram;