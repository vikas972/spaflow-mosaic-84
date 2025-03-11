
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color = "#007AFF" }) => {
  return (
    <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
      <div className="flex items-start">
        <div className="mr-4 p-2 rounded-md text-white" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div>
          <h4 className="text-base font-medium mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
