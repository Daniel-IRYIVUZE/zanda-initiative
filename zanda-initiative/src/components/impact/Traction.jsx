// src/components/impact/Traction.jsx
import React from 'react';
import { CheckCircle, Calendar, Target } from 'lucide-react';

const Traction = () => {
  const milestones = [
    {
      achieved: true,
      date: "2025",
      title: "Pilot Phase Launched",
      achievements: ["Company legally registered", "First 2 students trained", "2 sewing machines purchased", "First products sold"]
    },
    {
      achieved: false,
      date: "Early 2026",
      title: "Scale Phase",
      achievements: ["First full program with 10-15 women", "Digital platform v1 launch", "3 graduates start businesses"]
    },
    {
      achieved: false,
      date: "Late 2026",
      title: "Growth Phase",
      achievements: ["20+ women in training", "Online store launched", "Partnerships expanded"]
    },
    {
      achieved: false,
      date: "2027",
      title: "Sustainability",
      achievements: ["50+ women trained annually", "70% costs covered by sales", "Regional expansion planning"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey & Future Goals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to our ambitious future plans, track our progress 
            as we work towards transforming more lives.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                  milestone.achieved ? 'bg-accent-500' : 'bg-primary-300'
                }`}></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-white border rounded-2xl p-6 shadow-sm hover-lift ${
                    milestone.achieved ? 'border-accent-200' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center mb-4">
                      {milestone.achieved ? (
                        <CheckCircle className="h-6 w-6 text-accent-500 mr-2" />
                      ) : (
                        <Target className="h-6 w-6 text-primary-500 mr-2" />
                      )}
                      <span className="text-lg font-semibold text-gray-900">{milestone.title}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{milestone.date}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {milestone.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;