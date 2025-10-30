import React, { useState } from "react";
import {
  Target,
  TrendingUp,
  Users,
  Heart,
  Star,
  DollarSign,
  Award,
  Mail,
  Linkedin,
} from "lucide-react";

const OurImpact: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const metrics = [
    {
      icon: Target,
      value: "90%",
      label: "Graduation Rate Goal",
      description: "Training Completion",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      value: "70%",
      label: "Income Within 3 Months",
      description: "Economic Empowerment",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      value: "2x",
      label: "Average Income Growth",
      description: "Income Growth",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      value: "95%",
      label: "Improved Confidence",
      description: "Well-being",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const milestones = [
    {
      status: "✅",
      text: "Registered as a legal social enterprise",
      year: "Q3, 2025",
    },
    {
      status: "✅",
      text: "Successfully trained our first two students in the pilot phase",
      year: "Q3, 2025",
    },
    {
      status: "✅",
      text: "Sold our first products: 14 bags and 3 company uniforms",
      year: "Q3, 2025",
    },
    {
      status: "🚧",
      text: "Development of the Zanda Digital Platform underway",
      year: "Q4, 2025",
    },
    { status: "🎯", text: "Expansion to 50 students per year", year: "Q4, 2026" },
  ];

  const teamMembers = [
    {
      name: "Daniel Iryivuze",
      role: "Founder / CEO",
      image:
        "ID",
      bio: "Visionary leader dedicated to transforming lives through education and empowerment.",
      color: "from-green-600 to-green-700",
    },
    {
      name: "Jean Paul BUKURU",
      role: "Chief Operating Officer (COO)",
      image:
      "ID",
      bio: "Ensuring smooth operations and program excellence across all initiatives.",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Chanceline Niyotugendana",
      role: "Chief Financial Officer (CFO)",
      image:
        "ID",
      bio: "Managing financial strategy and ensuring sustainable growth.",
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Raissa Mpawenayo",
      role: "Product Manager",
      image:
        "ID",
      bio: "Leading product development and quality assurance initiatives.",
      color: "from-pink-600 to-pink-700",
    },
    {
      name: "Elvine Mugisha",
      role: "Marketing Manager",
      image:
        "ID",
      bio: "Driving brand awareness and community engagement strategies.",
      color: "from-orange-600 to-orange-700",
    },
    {
      name: "Prencia Arakaza",
      role: "Operations Coordinator",
      image:
        "ID",
      bio: "Coordinating daily operations and student support services.",
      color: "from-teal-600 to-teal-700",
    },
  ];

  const testimonials = [
    {
      name: "Alice",
      role: "Zanda Graduate, Class of 2025",
      image: "A",
      quote:
        "Before Zanda, I had no hope. I was just a girl with a child who had shamed her family. Now, I am a seamstress, a businesswoman, and a provider. I am building a tomorrow for my son that I never thought was possible.",
      rating: 5,
    },
    {
      name: "Marie",
      role: "Current Student",
      image: "M",
      quote:
        "The Zanda Initiative gave me more than skills—it gave me dignity. I now have the confidence to face my community and provide for my daughter.",
      rating: 5,
    },
  ];

  return (
    <div className="py-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Impact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Measuring Change, One Life at a Time
          </h1>
          <p className="text-2xl text-green-50 max-w-3xl mx-auto mb-8">
            Tracking our success through clear, measurable outcomes and real
            stories of transformation
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-8 py-4">
              <div className="text-4xl font-bold text-green-700">500+</div>
              <div className="text-sm text-green-700">Lives Impacted</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-8 py-4">
              <div className="text-4xl font-bold text-green-700">$100+</div>
              <div className="text-sm text-green-700">Income Generated</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-8 py-4">
              <div className="text-4xl font-bold text-green-700">15+</div>
              <div className="text-sm text-green-700">Products Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Video */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              See Our Impact in Action 
            </h2>
            <p className="text-xl text-gray-600">
              Real stories of transformation and hope
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Zanda Impact Story"
              className="w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Goals & Metrics */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-4">
            Our Goals & Metrics
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Data-driven impact that transforms communities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}
                ></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-8 m-1 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${metric.color} text-white rounded-full mb-4 shadow-lg`}
                  >
                    <metric.icon size={32} />
                  </div>
                  <div className="text-4xl font-bold text-green-700 text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Transformation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-4">
            Stories of Transformation
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Hear directly from the women whose lives we've changed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold text-green-700">
                        {testimonial.image}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <cite className="text-gray-900 font-bold text-green-700 not-italic block">
                        {testimonial.name}
                      </cite>
                      <div className="text-green-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction & Milestones */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-4">
            Our Journey & Milestones
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Building momentum toward sustainable impact
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-green-600"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-green-500 rounded-full flex items-center justify-center text-2xl z-10 shadow-lg">
                      {milestone.status}
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between">
                        <p className="text-gray-700 text-lg font-medium">
                          {milestone.text}
                        </p>
                        <span className="font-bold text-green-700 text-sm ml-4">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700  mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to empowering young women and
              transforming communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}
                ></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-6 m-1 text-center hover:shadow-2xl transition-shadow">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-700  mb-1">
                    {member.name}
                  </h3>
                  <div
                    className={`inline-block bg-gradient-to-r ${member.color} text-white px-4 py-1 rounded-full text-sm font-semibold mb-4`}
                  >
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-12">
            Impact by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-green-100 bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <DollarSign className="w-12 h-12 mx-auto mb-3  text-green-800" />
              <div className="text-4xl font-bold text-green-900 mb-2 ">
                $ 100+
              </div>
              <div className="text-green-700">Total Income Generated</div>
            </div>
            <div className="bg-green-100 bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-12 h-12 mx-auto mb-3 text-green-800" />
              <div className="text-4xl font-bold text-green-900 mb-2">5+</div>
              <div className="text-green-700">Lives Transformed</div>
            </div>
            <div className="bg-green-100 bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Award className="w-12 h-12 mx-auto mb-3 text-green-800" />
              <div className="text-4xl font-bold text-green-900 mb-2">15+</div>
              <div className="text-green-700">Products Created</div>
            </div>
            <div className="bg-green-100 bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Target className="w-12 h-12 mx-auto mb-3 text-green-800" />
              <div className="text-4xl font-bold text-green-900 mb-2">95%</div>
              <div className="text-green-700">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Support Our Growing Impact
            </h2>
            <p className="text-xl mb-8 text-green-700">
              Your donation helps us scale our program and reach more young
              women in need. Every contribution creates lasting change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Make a Donation
              </button>
              <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white">
                Become a Partner
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">$100</div>
                <div className="text-sm text-green-700">Trains 1 Student</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$500</div>
                <div className="text-sm text-green-700">Equipment & Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$1,000</div>
                <div className="text-sm text-green-700">Full Scholarship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {isDonationModalOpen && (
        <div className="fixed inset-0 bg-black/50bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Make a Donation
              </h3>
              <button
                onClick={() => setIsDonationModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Your support makes a real difference in the lives of young women
              seeking independence and dignity.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <button className="border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50">
                  $50
                </button>
                <button className="border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50">
                  $100
                </button>
                <button className="border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50">
                  $500
                </button>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
                Continue to Payment
              </button>
              <p className="text-center text-sm text-gray-500">
                Contact: +250780162164 | WhatsApp available
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurImpact;
