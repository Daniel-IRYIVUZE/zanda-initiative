// src/components/impact/DonationSection.jsx
import React, { useState } from 'react';
import { Heart, MessageCircle, X, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DonationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    amount: '',
    message: ''
  });
  const { t } = useLanguage();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save donation data to localStorage
      const donations = JSON.parse(localStorage.getItem('zanda-donations') || '[]');
      donations.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('zanda-donations', JSON.stringify(donations));
      
      // Reset form
      setCurrentStep(4);
      setTimeout(() => {
        setIsModalOpen(false);
        setCurrentStep(1);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          amount: '',
          message: ''
        });
      }, 3000);
    }
  };

  const openWhatsApp = () => {
    const message = `Hello Zanda Initiative! I'm interested in supporting your mission.`;
    window.open(`https://wa.me/250780162164?text=${encodeURIComponent(message)}`, '_blank');
  };

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Donation Details' },
    { number: 3, title: 'Confirmation' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="h-16 w-16 text-accent-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Your donation helps provide training, materials, and support to young women building their futures. Every contribution makes a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors flex items-center justify-center"
          >
            <Heart className="h-5 w-5 mr-2" />
            Donate via Mobile Money
          </button>
          
          <button
            onClick={openWhatsApp}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Chat on WhatsApp
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Mobile Money: +250 780 162 164 (Daniel Iryivuze)
        </p>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Make a Donation</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      currentStep >= step.number
                        ? 'bg-accent-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? <CheckCircle className="h-4 w-4" /> : step.number}
                    </div>
                    <span className="text-xs mt-2 text-gray-600">{step.title}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Donation Amount (RWF) *
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        min="1000"
                        placeholder="e.g., 5000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Mobile Money Instructions</h4>
                      <ol className="text-sm text-yellow-700 list-decimal list-inside space-y-1">
                        <li>Open your mobile money app</li>
                        <li>Send to: <strong>+250 780 162 164</strong></li>
                        <li>Amount: <strong>{formData.amount} RWF</strong></li>
                        <li>Reference: <strong>Zanda Donation</strong></li>
                        <li>Include your name in the message</li>
                      </ol>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Donation Summary</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Name: {formData.fullName}</p>
                        <p>Phone: {formData.phone}</p>
                        <p>Amount: {formData.amount} RWF</p>
                        {formData.location && <p>Location: {formData.location}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your donation will make a real difference in someone's life.</p>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {currentStep > 1 && currentStep < 4 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 ml-auto"
                  >
                    {currentStep === 3 ? 'Complete Donation' : currentStep === 4 ? 'Close' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DonationSection;