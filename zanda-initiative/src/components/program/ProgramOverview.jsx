// src/components/program/ProgramOverview.jsx
import React from 'react';
import { Calendar, Users, Target } from 'lucide-react';

const ProgramOverview = () => {
  const programDetails = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "6-Month Program",
      description: "Comprehensive training combining theory and practical application"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Groups",
      description: "Personalized attention with small class sizes for optimal learning"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Real Projects",
      description: "Work on actual client orders to build portfolio and experience"
    }
  ];

  const curriculum = [
    {
      phase: "Phase 1",
      title: "Foundation Skills",
      duration: "2 Months",
      skills: ["Basic tailoring techniques", "Machine operation & safety", "Fabric knowledge", "Measurement taking"]
    },
    {
      phase: "Phase 2",
      title: "Advanced Craftsmanship",
      duration: "2 Months",
      skills: ["Garment construction", "Uniform production", "Quality control", "Pattern making"]
    },
    {
      phase: "Phase 3",
      title: "Business & Digital",
      duration: "2 Months",
      skills: ["Business planning", "Digital marketing", "Financial management", "Customer service"]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Zanda Journey</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive 6-month program is carefully designed to transform participants 
              from beginners to confident, skilled professionals ready to launch their careers 
              or start their own businesses.
            </p>
            
            <div className="space-y-6">
              {programDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{detail.title}</h3>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Curriculum</h3>
            <div className="space-y-6">
              {curriculum.map((phase, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-6 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-sm font-semibold text-primary-600">{phase.phase}</span>
                      <h4 className="text-lg font-semibold text-gray-900">{phase.title}</h4>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <ul className="text-gray-600 space-y-1">
                    {phase.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;