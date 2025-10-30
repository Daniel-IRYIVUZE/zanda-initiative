// src/pages/OurStory.jsx
import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const OurStory = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Her Future, Our Focus</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the journey of Zanda Initiative and our commitment to transforming 
            the lives of young women in Rwanda.
          </p>
        </div>

        {/* The Spark Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Spark: Why Zanda Exists</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Zanda was born from a simple, painful truth: in our communities, an unmarried 
                  teenage mother often faces a closed door. She is shamed, forced out of school, 
                  and left with no skills to provide for her child.
                </p>
                <p>
                  We saw not just a problem, but a profound loss of potential. Every young woman 
                  forced to the margins represents wasted talent, crushed dreams, and a cycle of 
                  poverty that continues to the next generation.
                </p>
                <p className="font-semibold text-primary-600">
                  We believe that her past does not define her future. At Zanda, every woman 
                  deserves a second chance and the tools to build her own destiny.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-xl font-semibold text-gray-700">
                  Transforming Shame into Strength
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide marginalized young women, especially unmarried teenage mothers, with 
                the skills in tailoring, technology, and business they need to achieve financial 
                independence and social acceptance.
              </p>
            </div>
            <div className="bg-accent-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                A future where skilled and confident young women support their families and 
                strengthen their communities, breaking the cycle of poverty for generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Empowerment",
                description: "We provide the tools, not just aid, for women to build their own lives",
                color: "text-purple-600",
                bgColor: "bg-purple-100"
              },
              {
                title: "Dignity",
                description: "We operate a safe, respectful space free from shame and stigma",
                color: "text-blue-600",
                bgColor: "bg-blue-100"
              },
              {
                title: "Innovation",
                description: "We leverage technology to enhance learning and expand our reach",
                color: "text-green-600",
                bgColor: "bg-green-100"
              },
              {
                title: "Impact",
                description: "We are driven by tangible, positive change in the lives we serve",
                color: "text-orange-600",
                bgColor: "bg-orange-100"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover-lift">
                <div className={`w-12 h-12 ${value.bgColor} ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-lg font-bold">{value.title[0]}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">D</span>
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "I started the Zanda Initiative because I believe that every young woman deserves 
              a second chance and the tools to build her own destiny. We are not just teaching 
              them to sew; we are helping them stitch together a new life of dignity, purpose, and hope."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Daniel Iryivuze</p>
              <p className="text-gray-600">Founder & CEO, Zanda Initiative</p>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">danieliryivuze4@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory;