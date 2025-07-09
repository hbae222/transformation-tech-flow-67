import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import GradientButton from "@/components/ui/button-1";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const WaitlistFormCurved = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('ADHD Website Waitlist')
        .insert([
          {
            full_name: fullName,
            email: email
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });

      // Clear form
      setFullName('');
      setEmail('');
      window.scrollTo({ top: 0, left: 0});
    } catch (error: any) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[2400px] mx-auto p-12 md:p-16">
      <div className="bg-white rounded-3xl shadow-neural border border-gray-100 p-16 md:p-24">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
            We are limiting the cohort spots to 50 max.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="h-14 px-6 text-lg rounded-2xl border-gray-200 focus:border-gray-400 focus:ring-0 text-center placeholder:text-center max-w-md mx-auto"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-14 px-6 text-lg rounded-2xl border-gray-200 focus:border-gray-400 focus:ring-0 text-center placeholder:text-center max-w-md mx-auto"
          />
          <div className="flex justify-center">
            <GradientButton 
              onClick={() => {
                const form = document.querySelector('form');
                if (form) {
                  const formEvent = new Event('submit', { bubbles: true, cancelable: true });
                  form.dispatchEvent(formEvent);
                }
              }}
              width="300px"
              height="60px"
              disabled={isLoading}
            >
              {isLoading ? 'Applying...' : 'Apply'}
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  );
};