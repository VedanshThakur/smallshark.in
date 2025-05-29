import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Small Shark | Investor-Startup Platform';
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;