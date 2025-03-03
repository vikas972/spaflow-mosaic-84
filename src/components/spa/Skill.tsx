
import React from 'react';
import { SkillProps } from '@/utils/diagramUtils';

const Skill: React.FC<SkillProps> = ({ name, category }) => {
  return (
    <div className="skill-badge animate-fade-in-up inline-block m-1">
      {name}
    </div>
  );
};

export default Skill;
