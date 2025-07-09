import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-hover border border-border/20">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Join the Waitlist
        </h2>
        <p className="text-muted-foreground">
          We limit each cohort to 50 people to keep coaching personal and effective.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full input-field"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full cta-button flex items-center justify-center gap-2"
          >
            Join Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-xs text-muted-foreground text-center">
            We'll notify you when spots open up. No spam, ever.
          </p>
        </form>
      ) : (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            You're on the list!
          </h3>
          <p className="text-muted-foreground">
            We'll send you an email when spots become available.
          </p>
        </div>
      )}
    </div>
  );
};