
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SectionNavigationProps {
  items: NavigationItem[];
  className?: string;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ items, className }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={cn("sticky top-4 z-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 p-2", className)}>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionNavigation;
