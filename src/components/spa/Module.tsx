
import React from 'react';
import { ModuleProps } from '@/utils/diagramUtils';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Module: React.FC<ModuleProps> = ({ 
  title, 
  icon, 
  color, 
  description, 
  order,
  className 
}) => {
  return (
    <div 
      className={cn(
        "module-card animate-fade-in-up relative", 
        className
      )}
      style={{ 
        borderTop: `3px solid ${color}`,
        animationDelay: `${0.3 + order * 0.1}s`
      }}
      id={`module-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      
      {order < 4 && (
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 text-spa-blue animate-pulse-soft">
          <ArrowRight size={24} />
        </div>
      )}
      
      <div 
        className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white text-spa-blue w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 shadow-sm"
        style={{ borderColor: color }}
      >
        {order}
      </div>
    </div>
  );
};

export default Module;
