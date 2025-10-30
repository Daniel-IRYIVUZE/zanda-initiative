// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import ImpactStats from '../components/home/ImpactStats';
import Differentiators from '../components/home/Differentiators';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <ImpactStats />
      <Differentiators />
      <CallToAction />
    </div>
  );
};

export default Home;