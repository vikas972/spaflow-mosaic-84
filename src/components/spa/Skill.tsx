
import React from 'react';
import { SkillProps } from '@/utils/diagramUtils';

const Skill: React.FC<SkillProps> = ({ name, category }) => {
  return (
    <div className="skill-badge animate-fade-in-up inline-block m-1 px-2 py-1 bg-spa-orange/10 text-spa-orange text-xs font-medium rounded-md">
      {name}
    </div>
  );
};

export default Skill;
