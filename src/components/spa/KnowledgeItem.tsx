
import React from 'react';
import { KnowledgeItemProps } from '@/utils/diagramUtils';

const KnowledgeItem: React.FC<KnowledgeItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-2 animate-fade-in-up hover:bg-white/50 rounded-lg transition-colors duration-300">
      <div className="mr-3 text-spa-blue">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default KnowledgeItem;
