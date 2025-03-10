
import React from 'react';
import { Home } from 'lucide-react';

interface SpaHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const SpaHeader: React.FC<SpaHeaderProps> = ({ title, subtitle, badge }) => {
  return (
    <div className="text-center mb-10 max-w-4xl animate-fade-in-up scroll-mt-20">
      {badge && (
        <div className="inline-block px-3 py-1 rounded-full bg-spa-blue/10 text-spa-blue text-sm font-medium mb-4">
          {badge}
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-spa-blue to-spa-purple">
        {title}
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SpaHeader;
