
import React from 'react';
import { PersonaProps } from '@/utils/diagramUtils';

const Persona: React.FC<PersonaProps> = ({ name, role, color, icon }) => {
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300 animate-fade-in-up">
      <div 
        className="persona-icon mr-3"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Persona;
