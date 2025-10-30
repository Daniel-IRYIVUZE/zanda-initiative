// src/contexts/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('zanda-language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('zanda-language', lang);
    sessionStorage.setItem('current-language', lang);
  };

  const translations = {
    en: {
      home: "Home",
      ourStory: "Our Story",
      ourProgram: "Our Program",
      ourImpact: "Our Impact",
      getInvolved: "Get Involved",
      contact: "Contact",
      learnMore: "Learn More",
      donate: "Donate",
      support: "Support",
      joinUs: "Join Us",
      heroTitle: "Empowering Her to Build Her Tomorrow",
      heroSubtitle: "We equip marginalized young women and teenage mothers in Rwanda with the skills, confidence, and community to stitch a new future for themselves and their children.",
      discoverStory: "Discover Our Story",
      supportMission: "Support Our Mission",
    },
    rw: {
      home: "Ahabanza",
      ourStory: "Umugani Wacu",
      ourProgram: "Porogaramu Yacu",
      ourImpact: "Ingaruka Zacu",
      getInvolved: "Winjiremo",
      contact: "Twandikire",
      learnMore: "Menya Birenzeho",
      donate: "Tanga",
      support: "Shygikira",
      joinUs: "Winjiremo",
      heroTitle: "Dufasha Gukora Ejo Heza",
      heroSubtitle: "Duhanga abakobwa bato bakuze n'abakobwa bato ba nyina mu Rwanda ubuhanga, icyizere, n'umuryango wo kubakira ejo heza bwabo n'abana babo.",
      discoverStory: "Soma Umugani Wacu",
      supportMission: "Shygikira Intego Zacu",
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};