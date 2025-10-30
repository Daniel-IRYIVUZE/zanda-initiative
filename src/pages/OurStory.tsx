import React from "react";
import { Target, Eye, Lightbulb, BarChart3, Heart, Users, Award, TrendingUp } from "lucide-react";

const OurStory: React.FC = () => {
  return (
    <div className="py-0">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1600&q=80" 
            alt="Women empowerment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Her Future, Our Focus.
          </h1>
          <p className="text-2xl text-green-50 max-w-3xl mx-auto mb-8">
            Transforming lives through skills, dignity, and opportunity
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-green-700">5+</div>
              <div className="text-sm text-green-800">Lives Transformed</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-green-700">95%</div>
              <div className="text-sm text-green-800">Employment Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Spark with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Spark: Why Zanda Exists
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 mb-6 rounded-r-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Zanda was born from a simple, painful truth: in our communities,
                  an unmarried teenage mother often faces a closed door. She is
                  shamed, forced out of school, and left with no skills to provide
                  for her child.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We saw not just a problem, but a profound loss of potential. 
                  <span className="font-semibold text-green-700"> We believe that her past does not define her future.</span>
                </p>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Every woman deserves a second chance</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Young woman learning skills" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Feel More Confident</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Our Impact in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how we're transforming lives one stitch at a time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Zanda Initiative Story"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-gray-900">Our Story: From Struggle to Success</h3>
                <p className="text-sm text-gray-600 mt-1">Meet the women who transformed their lives</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Skills Training Program"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-gray-900">Inside Our Training Center</h3>
                <p className="text-sm text-gray-600 mt-1">A day in the life at Zanda Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 m-1">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg">
                    <Target size={40} />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" 
                  alt="Mission" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide marginalized young women, especially unmarried
                  teenage mothers, with the skills in tailoring, technology, and
                  business they need to achieve financial independence and social
                  acceptance.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 m-1">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg">
                    <Eye size={40} />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" 
                  alt="Vision" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A future where skilled and confident young women support their
                  families and strengthen their communities, breaking cycles of poverty
                  and creating lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Modern Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            These principles guide everything we do and shape the impact we create
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <Lightbulb className="w-14 h-14 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Empowerment
              </h3>
              <p className="text-gray-600 text-center">
                We provide the tools, not just aid, for women to build their own
                lives and achieve independence.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-400">
              <Users className="w-14 h-14 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Dignity
              </h3>
              <p className="text-gray-600 text-center">
                We operate a safe, respectful space free from shame and stigma
                where every woman is valued.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-400">
              <TrendingUp className="w-14 h-14 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Innovation
              </h3>
              <p className="text-gray-600 text-center">
                We leverage technology to enhance learning and expand our reach
                to more communities.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-400">
              <Award className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Impact
              </h3>
              <p className="text-gray-600 text-center">
                We are driven by tangible, positive change in the lives of
                the women we serve daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-green-800">Women Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-green-800">Employment Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1,200+</div>
              <div className="text-green-800">Children Supported</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-green-800">Satisfaction Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Founder
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-2xl p-12 border border-green-800">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-6xl font-bold">D</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                  I started the Zanda Initiative because I believe that every
                  young woman deserves a second chance and the tools to build
                  her own destiny. We are not just teaching them to sew; we are
                  helping them stitch together a new life of dignity, purpose,
                  and hope.
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div>
                    <cite className="text-gray-900 font-bold text-lg not-italic block">
                      Daniel Iryivuze
                    </cite>
                    <div className="text-green-600 font-semibold">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-green-800 mb-8">
            Together, we can transform more lives and build stronger communities
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
              Support Our Mission
            </button>
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;