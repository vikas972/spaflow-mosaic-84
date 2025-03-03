
import React from 'react';
import { PillarProps } from '@/utils/diagramUtils';
import { cn } from '@/lib/utils';

const Pillar: React.FC<PillarProps> = ({ title, icon, color, children, className }) => {
  return (
    <div 
      className={cn(
        "pillar-card animate-fade-in-up", 
        className
      )}
      style={{ 
        borderTop: `4px solid ${color}`,
        animationDelay: "0.2s"
      }}
    >
      <div className="flex items-center mb-4">
        <div 
          className="w-10 h-10 rounded-md flex items-center justify-center mr-3"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};

export default Pillar;
