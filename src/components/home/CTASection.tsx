import { useState } from "react";
import {
  ArrowRight,
  Star,
  Users,
  Calendar,
  Heart,
  Target,
  Sparkles,
  Play,
  Award,
  TrendingUp,
} from "lucide-react";

const CTASection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600"
          alt="Empowered women"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-3000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
          <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/40 shadow-lg hover:scale-105 transition-transform">
            <Star size={18} className="mr-2 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-semibold">Proven Impact</span>
          </div>
          <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/40 shadow-lg hover:scale-105 transition-transform">
            <Users size={18} className="mr-2 text-green-300" />
            <span className="text-sm font-semibold">Community Driven</span>
          </div>
          <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/40 shadow-lg hover:scale-105 transition-transform">
            <Calendar size={18} className="mr-2 text-blue-300" />
            <span className="text-sm font-semibold">6-Month Program</span>
          </div>
          <div className="inline-flex items-center bg-yellow-400/90 backdrop-blur-md rounded-full px-5 py-2.5 border border-yellow-300 shadow-lg hover:scale-105 transition-transform">
            <Award size={18} className="mr-2 text-yellow-900" />
            <span className="text-sm font-semibold text-yellow-900">
              Life-Changing
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Transform Lives Today</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join Us in Rewriting{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Her Story
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-yellow-300/60"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-8 text-green-50 leading-relaxed">
              Your partnership can unlock potential and create lasting change
              for marginalized young women and teenage mothers in Rwanda.
            </p>

            {/* Impact Stats */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
                <Heart className="text-pink-300 mr-2" size={24} />
                <div className="text-left">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-green-100">Lives Impacted</div>
                </div>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
                <Target className="text-yellow-300 mr-2" size={24} />
                <div className="text-left">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs text-green-100">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
                <TrendingUp className="text-blue-300 mr-2" size={24} />
                <div className="text-left">
                  <div className="text-2xl font-bold">3x</div>
                  <div className="text-xs text-green-100">Income Growth</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/get-involved"
                className="group inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl"
              >
                Get Involved Today
                <ArrowRight
                  size={22}
                  className="ml-3 group-hover:translate-x-2 transition-transform"
                />
              </a>

              <a
                href="/donate"
                className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
              >
                Make a Donation
                <Heart
                  size={22}
                  className="ml-3 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Video/Image Card */}
          <div className="relative">
            {!showVideo ? (
              <div
                className="relative group cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800"
                    alt="Empowered woman"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play
                        size={32}
                        className="text-green-600 ml-1 fill-green-600"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold mb-1">
                      Watch Our Impact Story
                    </h3>
                    <p className="text-sm text-gray-200">
                      See how we're changing lives
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Play
                      size={48}
                      className="mx-auto mb-4 text-white opacity-50"
                    />
                    <p className="text-lg text-white/80">Video Player</p>
                    <p className="text-sm text-white/60 mt-2">
                      (Video content would be embedded here)
                    </p>
                    <button
                      onClick={() => setShowVideo(false)}
                      className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Floating testimonial cards */}
            <div className="hidden lg:block absolute -left-8 top-1/4 bg-white text-gray-900 rounded-xl p-4 shadow-2xl max-w-xs transform -rotate-6 hover:rotate-0 transition-transform">
              <div className="flex items-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100"
                  alt="Beneficiary"
                  className="w-12 h-12 rounded-full mr-3 border-2 border-green-500"
                />
                <div>
                  <div className="font-bold text-sm">Marie K.</div>
                  <div className="text-xs text-gray-600">Program Graduate</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                "This program changed my life completely!"
              </p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/25 transition-all transform hover:-translate-y-1 shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">6 Months</div>
            <div className="text-green-100">Comprehensive Training</div>
            <p className="text-sm text-green-200 mt-2">
              Hands-on skills development
            </p>
          </div>

          <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/25 transition-all transform hover:-translate-y-1 shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-green-100">Income While Learning</div>
            <p className="text-sm text-green-200 mt-2">
              Earn as you develop skills
            </p>
          </div>

          <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/25 transition-all transform hover:-translate-y-1 shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Lifelong</div>
            <div className="text-green-100">Community Support</div>
            <p className="text-sm text-green-200 mt-2">
              Ongoing mentorship network
            </p>
          </div>
        </div>

        {/* Additional Visual Elements - Success Stories */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Recent Success Stories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                img: "ID",
                name: "Grace",
              },
              {
                img: "ID",
                name: "Faith",
              },
              {
                img: "ID",
                name: "Hope",
              },
              {
                img: "ID",
                name: "Joy",
              },
            ].map((person, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border-2 border-white/30 hover:border-white/60 transition-all transform hover:-translate-y-1"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <div className="font-bold text-lg">{person.name}</div>
                    <div className="text-xs text-green-200">Graduate 2025</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-white"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-white"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
