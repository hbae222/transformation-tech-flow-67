import React from 'react';
import { Play } from 'lucide-react';
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import videoPreview from '@/assets/video-preview.jpg';

export const VideoSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="max-w-4xl mx-auto px-6 text-center mb-32 md:mb-40 will-change-transform"
      style={{ contain: 'layout style' }}
      initial={{ opacity: 0, y: 80 }}
      animate={isIntersecting ? { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      } : {}}
      whileHover={{
        y: -20,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-4"
        style={{
          textShadow: "0 0 20px rgba(139, 69, 19, 0.1)",
          filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
        }}
      >
        See How It Works
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-muted-foreground text-lg mb-12"
      >
        Watch how our proven method builds focus, habits, and clarity - in under 2 minutes.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="video-container relative group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-neural hover:shadow-hover transition-all duration-500">
          <img src={videoPreview} alt="Product demo preview" className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="play-button w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow-primary">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Testimonial Section - placed below video */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12"
      >
        <TestimonialSection />
      </motion.div>
    </motion.div>
  );
};