// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">Z</span>
              </div>
              <span className="ml-3 text-xl font-bold">Zanda Initiative</span>
            </div>
            <p className="text-primary-200 mb-4 max-w-md">
              Empowering marginalized young women and teenage mothers in Rwanda with skills, confidence, and community to build better tomorrows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-primary-200 hover:text-white transition-colors">
                  {t('ourStory')}
                </Link>
              </li>
              <li>
                <Link to="/our-program" className="text-primary-200 hover:text-white transition-colors">
                  {t('ourProgram')}
                </Link>
              </li>
              <li>
                <Link to="/our-impact" className="text-primary-200 hover:text-white transition-colors">
                  {t('ourImpact')}
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-200 hover:text-white transition-colors">
                  {t('getInvolved')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-200 mr-3" />
                <span className="text-primary-200">danieliryivuze4@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-200 mr-3" />
                <span className="text-primary-200">+250 780 162 164</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-200 mr-3" />
                <span className="text-primary-200">Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm">
            © 2025 Zanda Initiative. All rights reserved.
          </p>
          <p className="text-primary-200 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for a better tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;