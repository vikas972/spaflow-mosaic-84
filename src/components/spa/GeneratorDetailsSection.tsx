
import React from 'react';
import GeneratorDetails from '@/components/spa/GeneratorDetails';
import SectionNavigation from '@/components/spa/SectionNavigation';
import { Wand2, Workflow, Zap, BarChart, GitMerge, FileCheck } from 'lucide-react';

const GeneratorDetailsSection: React.FC = () => {
  // Generator details sub-navigation
  const generatorNavItems = [
    { id: 'generator-overview', label: 'Overview', icon: <Wand2 size={16} className="mr-1" /> },
    { id: 'generator-workflow', label: 'Workflow', icon: <Workflow size={16} className="mr-1" /> },
    { id: 'generator-capabilities', label: 'Capabilities', icon: <Zap size={16} className="mr-1" /> },
    { id: 'generator-metrics', label: 'Metrics', icon: <BarChart size={16} className="mr-1" /> },
    { id: 'generator-integration', label: 'Integration', icon: <GitMerge size={16} className="mr-1" /> },
    { id: 'generator-case-studies', label: 'Success Stories', icon: <FileCheck size={16} className="mr-1" /> },
  ];

  return (
    <div id="generator-details" className="mt-16 mb-12 scroll-mt-28">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Generator Agent Deep Dive</h2>
        <p className="text-gray-600">Detailed exploration of capabilities, workflows, and performance metrics</p>
      </div>
      
      {/* Generator Sub-Navigation */}
      <div className="mb-8">
        <SectionNavigation items={generatorNavItems} className="sticky top-20" />
      </div>
      
      <GeneratorDetails />
    </div>
  );
};

export default GeneratorDetailsSection;
