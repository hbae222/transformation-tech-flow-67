import React from 'react';

export const FooterSection = () => {
  return (
    <footer className="py-12 bg-white text-center">
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-sm text-gray-600 font-medium">
          Backed by Harvard University
        </p>
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/590dafe8-faf3-41c2-8670-649acc811d96.png" 
            alt="Harvard University logo"
            className="h-12 w-auto"
          />
        </div>
        
        <p className="text-sm text-gray-500">
          hello@strida.org
        </p>
      </div>
    </footer>
  );
};