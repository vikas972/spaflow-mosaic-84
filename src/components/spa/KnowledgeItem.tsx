
import React from 'react';
import { KnowledgeItemProps } from '@/utils/diagramUtils';

const KnowledgeItem: React.FC<KnowledgeItemProps> = ({ title, description, icon, label }) => {
  return (
    <div className="flex items-start p-2 animate-fade-in-up hover:bg-white/50 rounded-lg transition-colors duration-300">
      <div className="mr-3 text-spa-blue">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">{title}</h4>
          {label && (
            <span className="text-xs bg-spa-blue/10 text-spa-blue px-2 py-0.5 rounded-full">
              {label}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default KnowledgeItem;
