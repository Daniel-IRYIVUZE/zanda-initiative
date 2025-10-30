// src/components/home/ImpactStats.tsx
import React from "react";
import { Users, Heart, TrendingUp, Shield, Sparkles } from "lucide-react";

const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "200,000+",
      description: "Young people entering the job market annually in Rwanda",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      number: "7.2%",
      description: "Of teenage girls become mothers (RDHS, 2020)",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      number: "100%",
      description: "Of our pilot trainees earned an income while learning",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      number: "0",
      description: "Abandonment Policy - We never give up on our women",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow-sm border">
            <Sparkles size={20} className="mr-2 text-yellow-500" />
            <span className="font-semibold text-gray-700">
              Making Real Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              Impact
            </span>{" "}
            in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon size={36} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-600 group-hover:bg-clip-text">
                {stat.number}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
