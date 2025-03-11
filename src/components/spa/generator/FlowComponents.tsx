
import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface FlowNodeProps {
  title: string;
  type: string;
  color: string;
  children?: React.ReactNode;
}

export const FlowNode: React.FC<FlowNodeProps> = ({ title, type, color, children }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="p-4 rounded-lg shadow-md border border-gray-100 w-full text-center mb-2"
        style={{ backgroundColor: `${color}20`, borderColor: color }}
      >
        <div className="text-xs uppercase tracking-wider mb-1" style={{ color }}>
          {type}
        </div>
        <div className="font-medium" style={{ color }}>
          {title}
        </div>
      </div>
      {children}
    </div>
  );
};

interface FlowArrowProps {
  direction?: 'down' | 'right';
  label?: string;
}

export const FlowArrow: React.FC<FlowArrowProps> = ({ direction = 'down', label }) => {
  return (
    <div className={`flex ${direction === 'down' ? 'flex-col items-center my-1' : 'items-center mx-2'}`}>
      {direction === 'down' ? (
        <ArrowDown className="text-gray-400 my-1" />
      ) : (
        <ArrowRight className="text-gray-400 mx-1" />
      )}
      {label && (
        <span className="text-xs text-gray-500">{label}</span>
      )}
    </div>
  );
};
