import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { StorySection } from '../sections/StorySection';
import { ProblemSection } from '../sections/ProblemSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { ComparisonSection } from '../sections/ComparisonSection';
import { CountrySection } from '../sections/CountrySection';
import { PricingSection } from '../sections/PricingSection';
import { FAQSection } from '../sections/FAQSection';
import { ContactSection } from '../sections/ContactSection';
import { FooterSection } from '../sections/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CountrySection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}