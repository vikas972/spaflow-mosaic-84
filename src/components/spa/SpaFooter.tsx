
import React from 'react';

const SpaFooter: React.FC = () => {
  return (
    <div className="mt-16 text-center text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '1s' }}>
      <p>Designed with attention to detail and minimal design principles</p>
      <p className="mt-1">© {new Date().getFullYear()} SPA Flow</p>
    </div>
  );
};

export default SpaFooter;
