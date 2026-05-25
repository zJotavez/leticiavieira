import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MidCTA } from './components/MidCTA';
import { Clinic } from './components/Clinic';
import { Testimonials } from './components/Testimonials';
import { FooterCTA } from './components/FooterCTA';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  return (
    <React.Fragment>
      <Background />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <MidCTA />
        <Clinic />
        <Testimonials />
        <FooterCTA />
      </main>
      <AIAssistant />
    </React.Fragment>
  );
}
