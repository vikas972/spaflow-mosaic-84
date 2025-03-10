
import React from 'react';
import { SkillProps } from '@/utils/diagramUtils';
import { cn } from '@/lib/utils';

const Skill: React.FC<SkillProps & { className?: string }> = ({ name, category, className }) => {
  return (
    <div className={cn(
      "skill-badge animate-fade-in-up inline-block m-1 px-2 py-1 bg-spa-orange/10 text-spa-orange text-xs font-medium rounded-md",
      className
    )}>
      {name}
    </div>
  );
};

export default Skill;
