import React from 'react';
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export const HybridCoachingSection = () => {
  const benefits = [
    {
      emoji: "🧠",
      title: "Human Coaching",
      items: [
        "Deep, personal insight",
        "Real accountability", 
        "Tailored expert feedback",
        "Emotional motivation",
        "Strategic support"
      ]
    },
    {
      emoji: "⚠️",
      title: "Weekly-Only Limits",
      items: [
        "Midweek momentum drops",
        "No daily tracking",
        "Slow course correction", 
        "Motivation spikes, then fades",
        "Too spaced for ADHD support"
      ]
    },
    {
      emoji: "🚀",
      title: "Hybrid Human + AI Coaching",
      items: [
        "Daily check-ins = steady progress",
        "Instant feedback = fewer mistakes",
        "Routine reinforcement = faster learning",
        "Less slipping = more consistency", 
        "Smarter coaching = better results"
      ]
    }
  ];

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6 md:px-12 mb-32 md:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 1, ease: "easeOut" }
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-16 leading-tight"
        style={{
          textShadow: "0 0 20px rgba(139, 69, 19, 0.1)",
          filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
          lineHeight: "1.1"
        }}
      >
        Why Hybrid Coaching Works Better
      </motion.h2>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[30rem] md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <BentoGridItem
            key={benefit.title}
            title={benefit.title}
            description={
              <ul className="space-y-2 w-full mt-6 mb-2">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-left w-full px-4">
                    <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm leading-relaxed flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            }
            header={
              <div className="flex items-center justify-center h-16 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg mb-2">
                <div className="text-4xl">{benefit.emoji}</div>
              </div>
            }
            className={`benefit-card`}
          />
        ))}
      </BentoGrid>
    </motion.div>
  );
};