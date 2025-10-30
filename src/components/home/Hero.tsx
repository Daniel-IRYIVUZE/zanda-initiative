// src/components/home/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Play, Star } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-700 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/471092319/photo/teenage-mom.jpg?s=612x612&w=0&k=20&c=5T6nzPoUZUKlPdF9EAvw0nt31naP4Wb48KCm8zrI2nE=')", 
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/80 via-green-700/70 to-green-900/80 mix-blend-multiply"></div>

      {/* Decorative Glows */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Star size={16} className="mr-2 text-yellow-300" />
            <span className="text-sm font-medium">
              Empowering Women in Rwanda
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Her to Build{" "}
            <span className="bg-gradient-to-r from-green-300 to-accent-300 bg-clip-text text-transparent">
              Her Tomorrow.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            We equip marginalized young women and teenage mothers in Rwanda with
            the skills, confidence, and community to stitch a new future for
            themselves and their children.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link
              to="/our-story"
              className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Discover Our Story
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Heart size={20} className="mr-2" />
              Support Our Mission
            </Link>
          </div>

          {/* Video Preview */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-green-100 hover:text-white cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Play size={20} className="ml-1" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12"
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
    </section>
  );
};

export default Hero;
