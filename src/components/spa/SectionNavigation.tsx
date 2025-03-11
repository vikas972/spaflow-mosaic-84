
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SectionNavigationProps {
  items: NavigationItem[];
  className?: string;
  isSubNav?: boolean;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ items, className, isSubNav = false }) => {
  const [activeSection, setActiveSection] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      const sections = items.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, position: -Infinity };
        
        const rect = element.getBoundingClientRect();
        // Consider a section "active" when it's close to the top of the viewport
        return { 
          id: item.id, 
          position: rect.top < 100 ? -rect.top : Infinity // Prioritize sections that are just above the viewport
        };
      });
      
      // Sort by position to find the most visible section
      const visibleSections = [...sections].sort((a, b) => a.position - b.position);
      if (visibleSections.length > 0 && visibleSections[0].position !== Infinity) {
        setActiveSection(visibleSections[0].id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  // Different positioning for main nav and sub-nav
  const navClasses = isSubNav 
    ? "sticky top-32 bg-white/90 backdrop-blur-md rounded-lg shadow-md border border-gray-200 p-2 mt-4"
    : "fixed top-4 left-0 right-0 z-40 mx-auto max-w-7xl bg-white/90 backdrop-blur-md rounded-lg shadow-md border border-gray-200 p-2";

  return (
    <div className={cn(navClasses, className)}>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors",
              activeSection === item.id 
                ? "bg-spa-blue/10 text-spa-blue" 
                : "text-gray-700 hover:bg-gray-100"
            )}
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
