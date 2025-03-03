
import { ReactNode } from 'react';

// Types for our diagram components
export interface PillarProps {
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
  className?: string;
}

export interface ModuleProps {
  title: string;
  icon: ReactNode;
  color: string;
  description: string;
  order: number;
  className?: string;
}

export interface PersonaProps {
  name: string;
  role: string;
  color: string;
  icon: ReactNode;
}

export interface SkillProps {
  name: string;
  category?: string;
}

export interface KnowledgeItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

// Fade in animation delay helper
export const getAnimationDelay = (index: number, baseDelay: number = 0.1): string => {
  return `${baseDelay + index * 0.1}s`;
};

// Color helpers
export const getGradient = (color: string): string => {
  return `linear-gradient(135deg, ${color}, ${color}dd)`;
};

export const getComplement = (color: string): string => {
  // Simple implementation - in a real app would use color manipulation libraries
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  
  // Get complementary color (simple formula)
  const rComp = 255 - r;
  const gComp = 255 - g;
  const bComp = 255 - b;
  
  return `#${rComp.toString(16).padStart(2, '0')}${gComp.toString(16).padStart(2, '0')}${bComp.toString(16).padStart(2, '0')}`;
};

// Path generation for connecting elements
export const createCurvedPath = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  curvature: number = 0.5
): string => {
  // Control points for the curved path
  const controlX1 = startX + (endX - startX) * curvature;
  const controlY1 = startY;
  const controlX2 = endX - (endX - startX) * curvature;
  const controlY2 = endY;

  return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
};

// Helper to get positions for drawing lines between elements
export const getElementCenter = (element: HTMLElement): { x: number; y: number } => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
};
