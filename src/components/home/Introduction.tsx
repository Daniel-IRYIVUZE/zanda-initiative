// src/components/home/Introduction.tsx
import React from "react";
import { Target, Users, Clock } from "lucide-react";

const Introduction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            More Than Skills, We Build{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              Futures.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            The Zanda Initiative is a social enterprise breaking the cycle of
            poverty and shame. We provide a holistic 6-month program where young
            women learn vocational tailoring, digital literacy, and
            entrepreneurship. Through our unique "earn-while-you-learn" model,
            they gain income, experience, and hope from day one.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Empower marginalized young women through comprehensive skills
                training and sustainable employment opportunities.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Community
              </h3>
              <p className="text-gray-600">
                Building a supportive network of women who uplift and inspire
                each other towards success.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6-Month Program
              </h3>
              <p className="text-gray-600">
                Comprehensive training combining vocational skills, business
                education, and personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
