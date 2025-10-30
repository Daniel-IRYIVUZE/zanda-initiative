// src/components/impact/SuccessStories.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Sandrine I.",
      age: 19,
      story: "Before Zanda, I had no hope. I was just a girl with a child who had shamed her family. Now, I am a seamstress, a businesswoman, and a provider. I am building a tomorrow for my son that I never thought was possible.",
      achievement: "Started her own tailoring business",
      income: "Income increased from 0 to 45,000 RWF/month"
    },
    {
      name: "Clemence Z.",
      age: 23,
      story: "The Zanda program gave me more than skills - it gave me back my dignity. Learning while earning helped me support my daughter immediately, and the digital training helped me market my services online.",
      achievement: "Working with a local fashion designer",
      income: "Now earning 60,000 RWF/month"
    },
    {
      name: "Celine I.",
      age: 18,
      story: "I was rejected by my family after getting pregnant. Zanda became my new family. The mentorship and support system helped me heal while learning valuable skills that changed my life forever.",
      achievement: "Top graduate, now mentoring new students",
      income: "Saved enough to rent her own apartment"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
          <p className="text-lg text-gray-600">
            Real lives changed through the power of education, opportunity, and community support.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="absolute top-4 left-4">
            <Quote className="h-8 w-8 text-primary-200" />
          </div>
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">
                {stories[currentStory].name[0]}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{stories[currentStory].name}</h3>
            <p className="text-gray-600">{stories[currentStory].age} years old</p>
          </div>

          <blockquote className="text-lg text-gray-700 text-center mb-6 italic">
            "{stories[currentStory].story}"
          </blockquote>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-center">
              <p className="font-semibold text-gray-900">{stories[currentStory].achievement}</p>
              <p className="text-accent-600 font-medium">{stories[currentStory].income}</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevStory}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;