
import React from 'react';
import { Lightbulb } from 'lucide-react';

const StartingPoint: React.FC = () => {
  return (
    <div className="mt-2 mb-16 glass-card p-4 max-w-xs mx-auto text-center animate-pulse-soft">
      <div className="flex items-center justify-center">
        <Lightbulb className="text-spa-yellow mr-2" size={20} />
        <h3 className="font-semibold">Product Requirements</h3>
      </div>
      <p className="text-sm text-gray-600 mt-1">Entry point for the SPA workflow</p>
    </div>
  );
};

export default StartingPoint;
