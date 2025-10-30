// src/components/layout/Header.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Heart,
  Users,
  Home,
  BookOpen,
  BarChart3,
  Phone,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/our-story", label: "Our Story", icon: BookOpen },
    { path: "/our-program", label: "Our Program", icon: Users },
    { path: "/our-impact", label: "Our Impact", icon: BarChart3 },
    { path: "/get-involved", label: "Get Involved", icon: Heart },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text">
                Zanda Initiative
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Empowering Her to Build Her Tomorrow
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-green-600 bg-green-50 border-2 border-green-200 shadow-md"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50 hover:border-2 hover:border-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-medium transition-all ${
                      location.pathname === item.path
                        ? "text-green-600 bg-green-50 border-2 border-green-200"
                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
