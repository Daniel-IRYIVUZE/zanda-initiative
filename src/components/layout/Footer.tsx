// src/components/layout/Footer.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Send,
  Globe,
  CheckCircle,
  Twitter,
  Linkedin,
} from "lucide-react";
import WhatsAppButton from "../shared/WhatsAppButton";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Top Decorative Wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current text-gray-800"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Zanda Initiative
                </h2>
                <p className="text-gray-400 text-sm font-medium">
                  Empowering Her to Build Her Tomorrow
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              Breaking the cycle of poverty and shame through skills, confidence, and community. Together, we're rewriting stories and creating lasting change.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700 hover:border-green-500 transition-colors">
                <Users className="text-green-400 mb-1" size={20} />
                <div className="text-xl font-bold text-white">5+</div>
                <div className="text-xs text-gray-400">Lives Changed</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700 hover:border-green-500 transition-colors">
                <Award className="text-yellow-400 mb-1" size={20} />
                <div className="text-xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wider">
                Connect With Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  className="group bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  className="group bg-gray-800 p-3 rounded-xl hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  className="group bg-gray-800 p-3 rounded-xl hover:bg-sky-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="group bg-gray-800 p-3 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                <WhatsAppButton
                  phoneNumber="+250780162164"
                  message="Hello Zanda Initiative, I would like to learn more about your programs."
                  className="bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <ArrowRight size={20} className="text-green-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/our-story", label: "Our Story" },
                { path: "/our-program", label: "Our Program" },
                { path: "/our-impact", label: "Our Impact" },
                { path: "/get-involved", label: "Get Involved" },
                { path: "/shop", label: "Shop" },
                { path: "/donate", label: "Donate" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-all group"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <Heart size={20} className="text-green-400" />
              <span>Our Programs</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Vocational Training", icon: TrendingUp },
                { name: "Mental Health Support", icon: Heart },
                { name: "Business Incubation", icon: Award },
                { name: "Community Building", icon: Users },
                { name: "Life Skills Workshop", icon: Globe },
              ].map((program) => {
                const Icon = program.icon;
                return (
                  <li
                    key={program.name}
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors cursor-pointer group"
                  >
                    <Icon size={16} className="text-green-500 opacity-70 group-hover:opacity-100" />
                    <span>{program.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@zandainitiative.com"
                className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-all group border border-gray-700 hover:border-green-500"
              >
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30">
                  <Mail size={18} className="text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 mb-0.5">Email</div>
                  <div className="text-sm text-gray-300 group-hover:text-white truncate">
                    info@zandainitiative.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+250780162164"
                className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-all group border border-gray-700 hover:border-green-500"
              >
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-0.5">Phone</div>
                  <div className="text-sm text-gray-300 group-hover:text-white">
                    +250 780 162 164
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-0.5">Location</div>
                  <div className="text-sm text-gray-300">Kigali, Rwanda</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 backdrop-blur-sm rounded-2xl p-5 border border-green-500/20">
              <h4 className="font-bold mb-2 flex items-center space-x-2">
                <Send size={18} className="text-green-400" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Get our latest news and updates
              </p>
              
              {subscribed ? (
                <div className="flex items-center space-x-2 text-green-400 bg-green-500/20 rounded-lg p-3">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-3 py-2.5 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 text-sm"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
              <p>© 2025 Zanda Initiative. All Rights Reserved.</p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 px-4 py-2 rounded-full border border-green-500/30">
              <Heart size={18} className="text-green-400" />
              <p className="text-green-300 font-semibold text-sm">
                Zero Abandonment, New Destiny Awaits
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Made with <Heart size={12} className="inline text-red-500" /> for empowering young women in Rwanda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;