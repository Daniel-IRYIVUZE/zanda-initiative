// src/components/program/CourseVideos.jsx
import React, { useState } from 'react';
import { Play, X, Clock, Users } from 'lucide-react';

const CourseVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Basic Tailoring Techniques",
      description: "Learn fundamental sewing skills including threading machines, basic stitches, and fabric handling.",
      duration: "2 hours",
      level: "Beginner",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://www.youtube.com/embed/demo1"
    },
    {
      id: 2,
      title: "Digital Marketing for Small Business",
      description: "Master social media marketing, online selling, and building your brand presence.",
      duration: "1.5 hours",
      level: "Intermediate",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://www.youtube.com/embed/demo2"
    },
    {
      id: 3,
      title: "Business Planning & Financial Management",
      description: "Create business plans, calculate costs, set prices, and manage your finances effectively.",
      duration: "2.5 hours",
      level: "Advanced",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://www.youtube.com/embed/demo3"
    },
    {
      id: 4,
      title: "Advanced Garment Construction",
      description: "Learn to create complex garments, uniforms, and custom orders with professional finish.",
      duration: "3 hours",
      level: "Advanced",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://www.youtube.com/embed/demo4"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Library</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive video library covering all aspects of tailoring, business, and digital skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedVideo(course)}
            >
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white" fill="white" />
                </div>
                <div className="absolute top-3 right-3 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    All Levels
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-96"
                    allowFullScreen
                  />
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">About this course:</h4>
                  <p className="text-gray-600">{selectedVideo.description}</p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Duration:</span> {selectedVideo.duration}
                    </div>
                    <div>
                      <span className="font-semibold">Level:</span> {selectedVideo.level}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseVideos;