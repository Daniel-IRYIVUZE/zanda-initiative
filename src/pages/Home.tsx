// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import ImpactStats from '../components/home/ImpactStats';
import HowWeDifferent from '../components/home/HowWeDifferent';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <ImpactStats />
      <HowWeDifferent />
      <CTASection />
    </div>
  );
};

export default Home;