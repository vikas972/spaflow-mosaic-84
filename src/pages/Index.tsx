
import React from 'react';
import SectionNavigation from '@/components/spa/SectionNavigation';
import SpaHeader from '@/components/spa/SpaHeader';
import CoreModulesSection from '@/components/spa/CoreModulesSection';
import StartingPoint from '@/components/spa/StartingPoint';
import PillarsSection from '@/components/spa/PillarsSection';
import OutputsSection from '@/components/spa/OutputsSection';
import AgentSpecsSection from '@/components/spa/AgentSpecsSection';
import GeneratorDetailsSection from '@/components/spa/GeneratorDetailsSection';
import SpaFooter from '@/components/spa/SpaFooter';
import ConnectorsWrapper from '@/components/spa/ConnectorsWrapper';
import { Home, Database, Puzzle, FileCheck, Bot, Wand2 } from 'lucide-react';

const Index = () => {
  // Main navigation items
  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Home size={16} className="mr-1" /> },
    { id: 'pillars', label: 'SPA Pillars', icon: <Database size={16} className="mr-1" /> },
    { id: 'modules', label: 'Core Modules', icon: <Puzzle size={16} className="mr-1" /> },
    { id: 'outputs', label: 'SPA Outputs', icon: <FileCheck size={16} className="mr-1" /> },
    { id: 'agent-specs', label: 'Agent Specs', icon: <Bot size={16} className="mr-1" /> },
    { id: 'generator-details', label: 'Generator Details', icon: <Wand2 size={16} className="mr-1" /> },
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Navigation */}
      <div className="w-full max-w-7xl mb-20">
        <SectionNavigation items={navigationItems} />
      </div>
      
      {/* Header */}
      <div id="overview" className="max-w-4xl w-full">
        <SpaHeader 
          title="Solution and Product Assurance (SPA)"
          subtitle="A comprehensive quality assurance architecture built around three main pillars and four core modules, with a continuous feedback loop for optimal performance."
          badge="Flow Diagram"
        />
      </div>
      
      {/* Main Flow Diagram */}
      <div className="w-full max-w-7xl relative">
        {/* Core Modules Flow - Moved to top */}
        <CoreModulesSection />
        
        {/* Starting Point */}
        <StartingPoint />
        
        {/* Three Pillars with Vertical Two-Way Connections */}
        <PillarsSection />
        
        {/* SPA Outputs Section - Enhanced with detailed outputs */}
        <OutputsSection />
        
        {/* Redesigned Agent Specifications */}
        <AgentSpecsSection />
        
        {/* Generator Agent Details Section with Sub-Navigation */}
        <GeneratorDetailsSection />
      </div>
      
      {/* Connect elements with flow lines */}
      <ConnectorsWrapper />
      
      {/* Footer */}
      <SpaFooter />
    </div>
  );
};

export default Index;
