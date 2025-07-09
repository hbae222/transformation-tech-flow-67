import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format",
    "/lovable-uploads/ba3e5161-3b4f-4458-9345-44b37a403311.png", 
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=64&h=64&fit=crop&crop=face&auto=format"
  ];

  return (
    <div className="bg-transparent rounded-2xl p-8 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="w-6 h-6 text-yellow-400 fill-current" 
          />
        ))}
      </div>
      
    </div>
  );
};