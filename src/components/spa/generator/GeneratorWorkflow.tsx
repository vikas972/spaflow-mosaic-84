
import React from 'react';
import { Workflow } from 'lucide-react';
import DetailSection from './DetailSection';
import ProcessStep from './ProcessStep';
import { FlowArrow } from './FlowComponents';

const GeneratorWorkflow: React.FC = () => {
  return (
    <DetailSection 
      id="generator-workflow" 
      title="Generator Workflow" 
      icon={<Workflow size={16} className="text-white" />}
      color="#007AFF"
    >
      <div className="space-y-6">
        <p className="text-gray-700">
          The Generator Agent follows a systematic process to transform business requirements into executable test assets:
        </p>
        
        <div className="space-y-6 mt-4">
          <ProcessStep 
            number={1} 
            title="Requirement Analysis" 
            description="The agent parses user stories, functional specifications, and acceptance criteria to understand the underlying business logic and system behaviors."
          />
          <ProcessStep 
            number={2} 
            title="Test Scenario Identification" 
            description="Using NLP and pattern recognition, it identifies key user journeys, edge cases, and exception paths that need to be tested."
          />
          <ProcessStep 
            number={3} 
            title="Test Case Generation" 
            description="For each scenario, it creates detailed test cases with pre-conditions, steps, expected results, and post-conditions."
          />
          <ProcessStep 
            number={4} 
            title="Test Data Creation" 
            description="The agent generates synthetic test data sets that meet business rules and constraints for each test case."
          />
          <ProcessStep 
            number={5} 
            title="Coverage Analysis" 
            description="It maps tests back to requirements to identify coverage gaps and suggest additional test cases for comprehensive testing."
          />
          <ProcessStep 
            number={6} 
            title="Automation Script Generation" 
            description="Finally, it produces framework-specific automation scripts ready for execution in the target environment."
          />
        </div>
        
        <div className="mt-8 p-6 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="text-lg font-medium mb-6 text-center text-spa-blue">Generator Workflow Pipeline</h4>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div className="mb-2 w-40 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Atomic</div>
                <div className="font-medium">Data Fetcher</div>
              </div>
              <FlowArrow direction="down" />
              <div className="mb-2 w-40 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Atomic</div>
                <div className="font-medium">Scenario Parser</div>
              </div>
              <FlowArrow direction="down" />
              <div className="w-40 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-center">
                <div className="text-xs text-indigo-500 uppercase tracking-wider mb-1">Molecular</div>
                <div className="font-medium">Script Generator</div>
              </div>
            </div>
            
            <div className="hidden md:flex flex-col items-center mx-2">
              <FlowArrow direction="right" />
              <div className="h-32"></div>
              <FlowArrow direction="right" />
            </div>
            
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div className="mb-2 w-40 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Atomic</div>
                <div className="font-medium">Coverage Analyzer</div>
              </div>
              <FlowArrow direction="down" />
              <div className="mb-2 w-40 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Atomic</div>
                <div className="font-medium">Validation Checker</div>
              </div>
              <FlowArrow direction="down" />
              <div className="w-40 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-center">
                <div className="text-xs text-indigo-500 uppercase tracking-wider mb-1">Molecular</div>
                <div className="font-medium">Coverage Consolidator</div>
              </div>
            </div>
            
            <div className="hidden md:flex flex-col items-center mx-2">
              <FlowArrow direction="right" />
              <div className="h-32"></div>
              <FlowArrow direction="right" />
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-2 w-40 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Atomic</div>
                <div className="font-medium">Data Pattern Generator</div>
              </div>
              <FlowArrow direction="down" />
              <div className="mb-2 w-40 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Atomic</div>
                <div className="font-medium">CSV/JSON Transformer</div>
              </div>
              <FlowArrow direction="down" />
              <div className="w-40 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-center">
                <div className="text-xs text-indigo-500 uppercase tracking-wider mb-1">Molecular</div>
                <div className="font-medium">Data Factory</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <FlowArrow direction="down" />
          </div>
          
          <div className="max-w-md mx-auto mt-2">
            <div className="p-3 bg-green-50 rounded-lg border border-green-100 text-center">
              <div className="text-xs text-green-500 uppercase tracking-wider mb-1">Compound</div>
              <div className="font-medium">Generator Agent</div>
            </div>
          </div>
        </div>
      </div>
    </DetailSection>
  );
};

export default GeneratorWorkflow;
