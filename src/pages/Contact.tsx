import { Mail, Phone, MapPin,ShoppingCart, Send, User, MessageSquare, Clock, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200" 
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <MessageSquare size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Connect. Let's Collaborate.
          </h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you and discuss how we can work together to create meaningful change in our communities
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Monday to Friday, 8AM to 5PM</p>
              <a href="tel:+250780162164" className="text-green-600 hover:text-green-700 font-semibold">
                +250 780 162 164
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
              <a href="mailto:info@zandainitiative.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                info@zandainitiative.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-emerald-600">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Come see our operations</p>
              <span className="text-emerald-600 font-semibold">Kigali, Rwanda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Choose the best way to reach us. We're here to help and answer any questions you might have.
              </p>

              {/* Contact Options */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">General Inquiries</h3>
                    <p className="text-gray-600 text-sm mb-2">For general questions and information</p>
                    <a href="mailto:info@zandainitiative.com" className="text-green-600 hover:text-green-700 font-medium">
                      info@zandainitiative.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Partnerships</h3>
                    <p className="text-gray-600 text-sm mb-2">Collaborate with us on meaningful projects</p>
                    <a href="mailto:partnerships@zandainitiative.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      partnerships@zandainitiative.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Orders & Products</h3>
                    <p className="text-gray-600 text-sm mb-2">Questions about our products and services</p>
                    <a href="mailto:orders@zandainitiative.com" className="text-purple-600 hover:text-purple-700 font-medium">
                      orders@zandainitiative.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Contact Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <img 
                    src="ID" 
                    alt="Founder" 
                    className="w-20 h-20 rounded-full border-4 border-white/20 mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Daniel Iryivuze</h3>
                    <p className="text-gray-300">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out directly for important matters, partnerships, or if you'd like to learn more about our vision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-green-400" size={20} />
                    <a href="mailto:danieliryivuze4@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
                      danieliryivuze4@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-400" size={20} />
                    <a href="tel:+250780162164" className="text-green-400 hover:text-green-300 transition-colors">
                      +250 780 162 164
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/250780162164?text=Hello%20Zanda%20Initiative%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors shadow-lg"
              >
                <MessageSquare size={24} className="mr-3" />
                Chat with us on WhatsApp
              </a>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-bold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Send size={22} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how we're transforming communities through sustainable initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative group cursor-pointer">
                <img 
                  src="ID" 
                  alt="Community workshop"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Workshop in Action</h3>
                <p className="text-gray-600">See how we create sustainable products and empower our community</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative group cursor-pointer">
                <img 
                  src="ID" 
                  alt="Team collaboration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meet Our Team</h3>
                <p className="text-gray-600">Get to know the passionate people behind Zanda Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Future Workshop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are currently securing our permanent workshop location in Kigali, Rwanda. Stay tuned for updates!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <img 
                  src="ID" 
                  alt="Kigali cityscape"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kigali, Rwanda</h3>
                <p className="text-gray-700 mb-4">The heart of innovation in East Africa</p>
                <p className="text-gray-600">Specific address to be added once our facility is secured</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Kigali?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Strategic Location</h4>
                    <p className="text-gray-600">At the crossroads of East Africa, perfect for regional impact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Growing Community</h4>
                    <p className="text-gray-600">Access to talented artisans and passionate changemakers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Hub</h4>
                    <p className="text-gray-600">Thriving ecosystem of social enterprises and sustainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                What is the best way to contact you?
                <span className="text-green-600 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                The best way depends on your needs. For urgent matters, call or WhatsApp us. For detailed inquiries, email is preferred. We respond to all messages within 24 hours.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Do you offer facility tours?
                <span className="text-green-600 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Once our permanent facility is established, we'll be happy to schedule tours for interested partners, volunteers, and community members. Contact us to express your interest!
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                How can I partner with Zanda Initiative?
                <span className="text-green-600 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                We're always looking for meaningful partnerships! Email partnerships@zandainitiative.com with details about your organization and how you envision collaborating with us.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;