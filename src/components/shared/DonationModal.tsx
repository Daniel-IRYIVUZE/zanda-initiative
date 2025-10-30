// src/components/shared/DonationModal.tsx
import React, { useState } from "react";
import { X, Send, ArrowLeft, Gift, Shield, Heart } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    amount: "",
    customAmount: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    const donations = JSON.parse(
      localStorage.getItem("zandaDonations") || "[]"
    );
    const donationAmount =
      formData.amount === "custom" ? formData.customAmount : formData.amount;

    donations.push({
      ...formData,
      amount: donationAmount,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("zandaDonations", JSON.stringify(donations));

    // Show success and close
    alert("Thank you for your donation! Our team will contact you shortly.");
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      amount: "",
      customAmount: "",
      message: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-500 to-green-700 rounded-t-2xl p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <Heart size={28} className="text-white" />
            <h2 className="text-2xl font-bold">Support Our Mission</h2>
          </div>
          <p className="text-green-100">
            Help us empower women and transform lives
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-4">
                <Gift size={48} className="mx-auto text-green-500 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Personal Information
                </h3>
                <p className="text-gray-600">Let us know how to reach you</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Continue to Donation
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-4">
                <Shield size={48} className="mx-auto text-green-700 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Donation Details
                </h3>
                <p className="text-gray-600">Choose your donation amount</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Where are you from?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Donation Amount (RWF) *
                </label>
                <select
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                >
                  <option value="">Select Amount</option>
                  <option value="5000">5,000 RWF - Basic Kit</option>
                  <option value="10000">10,000 RWF - Training Materials</option>
                  <option value="25000">25,000 RWF - Monthly Support</option>
                  <option value="50000">50,000 RWF - Business Starter</option>
                  <option value="100000">100,000 RWF - Transform a Life</option>
                  <option value="custom">Custom Amount</option>
                </select>
              </div>

              {formData.amount === "custom" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Custom Amount (RWF)
                  </label>
                  <input
                    type="number"
                    name="customAmount"
                    value={formData.customAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter custom amount"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message of Support (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Share words of encouragement..."
                />
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield size={20} className="text-yellow-600" />
                  <h3 className="font-bold text-yellow-800">
                    Mobile Money Instructions
                  </h3>
                </div>
                <p className="text-yellow-700 text-sm">
                  Please send your donation via Mobile Money to:
                  <br />
                  <strong className="text-lg">+250 780 162 164</strong>
                  <br />
                  <strong>Reference:</strong> Zanda Initiative Donation
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  <ArrowLeft size={18} />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Send size={18} />
                  <span>Complete Donation</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DonationModal;
