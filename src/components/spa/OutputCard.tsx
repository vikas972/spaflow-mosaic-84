
import React from 'react';
import { cn } from '@/lib/utils';

interface OutputCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  color?: string;
  variant?: 'default' | 'compact' | 'featured';
}

const OutputCard: React.FC<OutputCardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  color = "#007AFF",
  variant = 'default'
}) => {
  return (
    <div className={cn(
      "flex items-center p-3 rounded-md bg-white/60 hover:bg-white transition-colors duration-200 animate-fade-in-up border border-gray-100 shadow-sm",
      variant === 'compact' && "p-2",
      variant === 'featured' && "p-4 shadow-md hover:shadow-lg",
      className
    )}>
      {icon && (
        <div className={cn(
          "mr-3 text-white p-2 rounded-md",
          variant === 'compact' && "p-1.5",
          variant === 'featured' && "p-3"
        )} style={{ backgroundColor: color }}>
          {icon}
        </div>
      )}
      <div>
        <p className={cn(
          "text-sm font-medium",
          variant === 'compact' && "text-xs",
          variant === 'featured' && "text-base"
        )}>{title}</p>
        {description && (
          <p className={cn(
            "text-xs text-gray-500",
            variant === 'compact' && "text-[10px]",
            variant === 'featured' && "text-sm"
          )}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default OutputCard;
