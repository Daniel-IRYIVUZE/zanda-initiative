// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, changeLanguage, t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('ourStory'), href: '/our-story' },
    { name: t('ourProgram'), href: '/our-program' },
    { name: t('ourImpact'), href: '/our-impact' },
    { name: t('getInvolved'), href: '/get-involved' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-12 w-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Zanda Initiative</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="border-0 bg-transparent text-sm focus:ring-0"
              >
                <option value="en">EN</option>
                <option value="rw">Kinyarwanda</option>
              </select>
            </div>

            <Link
              to="/our-impact"
              className="bg-accent-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-600 transition-colors"
            >
              {t('donate')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2 mr-4">
              <Globe className="h-4 w-4 text-gray-600" />
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="border-0 bg-transparent text-sm focus:ring-0"
              >
                <option value="en">EN</option>
                <option value="rw">Kinyarwanda</option>
              </select>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/our-impact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-accent-500 text-white hover:bg-accent-600"
            >
              {t('donate')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;