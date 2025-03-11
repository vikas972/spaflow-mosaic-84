
import React from 'react';

interface DetailSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

const DetailSection: React.FC<DetailSectionProps> = ({ id, title, icon, color, children }) => {
  return (
    <div id={id} className="scroll-mt-20 glass-card p-6 mb-8">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: color }}>
          {icon}
        </div>
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default DetailSection;
