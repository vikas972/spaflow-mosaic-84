
import React from 'react';
import { cn } from '@/lib/utils';

interface OutputCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  color?: string;
}

const OutputCard: React.FC<OutputCardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  color = "#007AFF" 
}) => {
  return (
    <div className={cn(
      "flex items-center p-3 rounded-md bg-white/60 hover:bg-white transition-colors duration-200 animate-fade-in-up border border-gray-100 shadow-sm",
      className
    )}>
      {icon && (
        <div className="mr-3 text-white p-2 rounded-md" style={{ backgroundColor: color }}>
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
