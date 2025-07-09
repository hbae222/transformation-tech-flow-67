"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { SaveButton } from "@/components/ui/save-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function WaitlistFormNew() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setSuccess(false);
      setEmail("");
    }, 2000);
  };

  return (
    <div className="h-screen w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold"
        >
          Join the Waitlist
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-lg mx-auto my-6 text-sm text-center relative z-10"
        >
          We limit each cohort to 50 people to keep coaching personal and effective.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="w-full space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-6 relative z-10 transition-all duration-300 focus:scale-[1.02]"
              required
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center pt-4"
          >
            <SaveButton
              type="submit"
              loading={loading}
              success={success}
              className="w-auto px-12 mt-4 relative z-10"
            >
              {success ? "Added to Waitlist!" : "Join Waitlist"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </SaveButton>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}

export { WaitlistFormNew };