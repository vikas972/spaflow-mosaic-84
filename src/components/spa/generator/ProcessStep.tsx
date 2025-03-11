
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  color?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, color = "#007AFF" }) => {
  return (
    <div className="flex items-start">
      <div 
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white mr-4"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div>
        <h4 className="text-base font-medium">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
