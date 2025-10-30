import React, { useState } from "react";
import {
  DollarSign,
  Users,
  Smartphone,
  BookOpen,
  Video,
  CheckCircle,
  Award,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  instructor: string;
  thumbnail: string;
  modules: number;
}

const OurProgram: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: "1",
      title: "Introduction to Tailoring",
      description:
        "Learn the basics of sewing, from threading a needle to creating simple garments. This course covers essential techniques and safety practices.",
      videoId: "dQw4w9WgXcQ",
      duration: "4 weeks",
      instructor: "Expert Tailor",
      thumbnail:
        "https://images.unsplash.com/photo-1558769132-cb1aea3c321a?w=800&q=80",
      modules: 12,
    },
    {
      id: "2",
      title: "Digital Literacy Fundamentals",
      description:
        "Master essential computer skills, internet usage, and basic software applications for modern business operations.",
      videoId: "dQw4w9WgXcQ",
      duration: "3 weeks",
      instructor: "Tech Specialist",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      modules: 10,
    },
    {
      id: "3",
      title: "Business Planning & Management",
      description:
        "Learn how to create business plans, manage finances, and develop customer relationships for sustainable entrepreneurship.",
      videoId: "dQw4w9WgXcQ",
      duration: "5 weeks",
      instructor: "Business Coach",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      modules: 15,
    },
  ];

  const benefits = [
    "Hands-on training with real equipment",
    "Earn income while learning",
    "Individual mentorship sessions",
    "Business startup support",
    "Digital marketplace access",
    "Lifetime alumni network",
  ];

  return (
    <div className="py-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://kenlinkinstitute.ac.ug/wp-content/uploads/2023/11/fashion_page-1.gif"
            alt="Tailoring training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A Holistic Path to Independence
            </h1>
            <p className="text-2xl text-green-50 max-w-3xl mx-auto mb-8">
              Our 6-month program transforms lives through comprehensive skills
              training and ongoing support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-green-700 bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-4">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">6 Months</div>
                <div className="text-sm text-green-800">Full Program</div>
              </div>
              <div className="bg-green-700 bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">3 Pillars</div>
                <div className="text-sm text-green-800">Core Training</div>
              </div>
              <div className="bg-green-700 bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-4">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-green-800">Practical Skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Video */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience Our Program
            </h2>
            <p className="text-xl text-gray-600">
              Watch how we transform lives through skills and dignity
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Zanda Program Overview"
              className="w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* The Journey - 3 Pillars */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            The 6-Month Zanda Journey
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Three interconnected pillars that build confidence, skills, and
            sustainable livelihoods
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 m-1">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea3c321a?w=600&q=80"
                    alt="Tailoring"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={28} />
                </div>
                <div className="text-green-600 font-bold text-sm mb-2">
                  PILLAR 1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vocational Tailoring
                </h3>
                <p className="text-gray-700 mb-4">
                  Master the craft of sewing, from basic stitches to creating
                  high-quality, marketable products like school bags, uniforms,
                  and custom orders.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Pattern making & cutting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Machine operation & maintenance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Quality control techniques
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 m-1">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                    alt="Digital literacy"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="text-white" size={28} />
                </div>
                <div className="text-blue-600 font-bold text-sm mb-2">
                  PILLAR 2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Literacy
                </h3>
                <p className="text-gray-700 mb-4">
                  Gain essential tech skills: computer basics, social media for
                  business, online selling, and using mobile money for financial
                  inclusion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Social media marketing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">E-commerce platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Mobile money transactions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 m-1">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                    alt="Business training"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <div className="text-purple-600 font-bold text-sm mb-2">
                  PILLAR 3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Entrepreneurship Training
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn to create a simple business plan, calculate costs, set
                  profitable prices, and manage customer relationships.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Business plan development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Financial management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Customer service excellence
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn While You Learn */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The "Earn-While-You-Learn" Difference
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our students don't just practice on scraps. They work on real
                orders for real customers. By producing and selling products
                like bags and uniforms, they earn an income from the very
                beginning, proving to themselves that they are capable and
                valuable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    $150+
                  </div>
                  <div className="text-sm text-gray-600">
                    Average earnings during training
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    Products made per student
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                alt="Women working together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm">Real Product Training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Gain
            </h2>
            <p className="text-xl text-gray-600">
              Beyond skills—a complete transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Course Curriculum
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Comprehensive training modules designed for real-world success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => setSelectedVideo(course)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50bg-opacity-40 hover:bg-opacity-50 transition-all group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-90 rounded-full group-hover:bg-opacity-100 transition-all">
                      <Video className="text-green-600" size={32} />
                    </div>
                  </button>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.modules} modules
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <span className="font-medium text-green-600">
                      {course.instructor}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(course)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold shadow-md hover:shadow-lg"
                  >
                    Watch Introduction
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifelong Support */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Community support"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-700 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Lifelong Support: Our Zero Abandonment Promise
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Graduation is just the beginning, we're with you for life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-green-200 bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all">
              <TrendingUp className="w-12 h-12 mb-4 text-green-900" />
              <h3 className="text-2xl font-bold mb-3 text-green-900">
                Incubation Support
              </h3>
              <p className="text-green-800">
                We help graduates start their own businesses or form
                cooperatives with ongoing mentorship and resources.
              </p>
            </div>
            <div className="bg-green-200 bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all">
              <Smartphone className="w-12 h-12 mb-4 text-green-900" />
              <h3 className="text-2xl font-bold mb-3 text-green-900">
                Zanda Digital Platform
              </h3>
              <p className="text-green-800">
                Access to ongoing lessons, mentorship chats, and an online
                marketplace via our custom app and website.
              </p>
            </div>
            <div className="bg-green-200 bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all">
              <Users className="w-12 h-12 mb-4 text-green-900" />
              <h3 className="text-2xl font-bold mb-3 text-green-900">
                Mentorship Network
              </h3>
              <p className="text-green-800">
                Connection to business professionals and a supportive community
                of program alumni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our next cohort and start your journey to independence
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl">
              Apply Now
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/50bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {selectedVideo.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProgram;
