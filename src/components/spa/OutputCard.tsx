
import React from 'react';
import { cn } from '@/lib/utils';

interface OutputCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const OutputCard: React.FC<OutputCardProps> = ({ 
  title, 
  description, 
  icon, 
  className 
}) => {
  return (
    <div className={cn(
      "flex items-center p-2 rounded-md bg-white/50 hover:bg-white transition-colors duration-200 animate-fade-in-up",
      className
    )}>
      {icon && (
        <div className="mr-2 text-spa-blue">
          {icon}
        </div>
      )}
      <div>
        <p className="text-sm font-medium">{title}</p>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

export default OutputCard;
