
import React from 'react';
import Module from '@/components/spa/Module';
import FeedbackLoop from '@/components/spa/FeedbackLoop';
import { Wand2, Puzzle, TestTube, Gauge } from 'lucide-react';

const CoreModulesSection: React.FC = () => {
  return (
    <div id="modules" className="relative mb-16 scroll-mt-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Core SPA Modules</h2>
        <p className="text-gray-600">Cyclical workflow from requirements to continuous improvement</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative p-4">
        {/* Module 1: Generator */}
        <Module 
          title="Generator" 
          icon={<Wand2 size={20} className="text-white" />}
          color="#007AFF"
          description="Transforms requirements into test scenarios, cases, and steps"
          order={1}
          className="col-span-1"
          data-id="module-generator"
        />
        
        {/* Module 2: Composer */}
        <Module 
          title="Composer" 
          icon={<Puzzle size={20} className="text-white" />}
          color="#5856D6"
          description="Assembles components into structured test suites"
          order={2}
          className="col-span-1"
          data-id="module-composer"
        />
        
        {/* Module 3: Executor */}
        <Module 
          title="Executor" 
          icon={<TestTube size={20} className="text-white" />}
          color="#FF9500"
          description="Automates test execution with Imran testing protocols"
          order={3}
          className="col-span-1"
          data-id="module-executor"
        />
        
        {/* Module 4: Manager */}
        <Module 
          title="Manager" 
          icon={<Gauge size={20} className="text-white" />}
          color="#34C759"
          description="Monitors metrics, handles certification processes"
          order={4}
          className="col-span-1"
          data-id="module-manager"
        />
      </div>
      
      {/* Feedback Loop */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div className="col-span-1"></div>
        <FeedbackLoop className="md:col-span-2 justify-self-center" />
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CoreModulesSection;
