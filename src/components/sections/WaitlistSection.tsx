import React from 'react';
import { WaitlistFormCurved } from "@/components/ui/waitlist-form-curved";
import { motion } from "framer-motion";

export const WaitlistSection = () => {
  return (
    <motion.div 
      data-section="waitlist"
      className="py-4 md:py-6 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: -30,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <WaitlistFormCurved />
      </motion.div>
    </motion.div>
  );
};