import React from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { HybridCoachingSection } from "@/components/sections/HybridCoachingSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Section 1: Fullscreen Hero */}
      <HeroSection />

      {/* Sections 2, 3, 4: Direct content */}
      <div className="py-24 md:py-32 bg-white">
        {/* Section 2: Video Demo Preview */}
        <VideoSection />

        {/* Section 3: Why Hybrid Coaching Works Better */}
        <HybridCoachingSection />

        {/* Section 4: Waitlist Signup */}
        <WaitlistSection />
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};
export default Landing;