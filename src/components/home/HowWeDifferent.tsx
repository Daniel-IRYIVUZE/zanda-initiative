// src/components/home/HowWeDifferent.tsx
import React from "react";
import {
  GraduationCap,
  DollarSign,
  Heart,
  Users,
  Award,
  Zap,
} from "lucide-react";

const HowWeDifferent: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Complete Training",
      description: "Tailoring + Digital Skills + Business Education",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-300",
    },
    {
      icon: DollarSign,
      title: "Learn & Earn",
      description:
        "Real orders from real customers build confidence and income",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-300",
    },
    {
      icon: Heart,
      title: "Trauma-Informed Support",
      description: "A safe environment designed for healing and growth",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-300",
    },
    {
      icon: Users,
      title: "Lifelong Community",
      description:
        "Continued mentorship and digital platform for ongoing support",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-300",
    },
    {
      icon: Award,
      title: "Quality Certification",
      description: "Recognized vocational certification upon completion",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-300",
    },
    {
      icon: Zap,
      title: "Fast Track to Employment",
      description: "Direct pathways to jobs or entrepreneurship opportunities",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-300",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
            <Zap size={20} className="mr-2" />
            <span className="font-semibold">Our Unique Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Are{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine comprehensive training with real-world experience and
            lifelong support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  size={42}
                  className={`${feature.bgColor}  text-white rounded-br-2xl p-1`}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-600 group-hover:bg-clip-text">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom border accent */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4 group-hover:w-24 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDifferent;
