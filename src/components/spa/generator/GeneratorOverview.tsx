
import React from 'react';
import { Wand2, Workflow, Database, PieChart, GitPullRequest } from 'lucide-react';
import DetailSection from './DetailSection';
import FeatureCard from './FeatureCard';
import { FlowNode, FlowArrow } from './FlowComponents';

const GeneratorOverview: React.FC = () => {
  return (
    <DetailSection 
      id="generator-overview" 
      title="Generator Agent Overview" 
      icon={<Wand2 size={16} className="text-white" />}
      color="#007AFF"
    >
      <div className="text-gray-700 space-y-4">
        <p>
          The Generator Agent is the cornerstone of the SPA framework, responsible for transforming business requirements into comprehensive test artifacts. Using advanced LLM capabilities, it automatically generates test scenarios, cases, steps, and synthetic data to ensure complete coverage of functional requirements.
        </p>
        <p>
          With its ability to understand context and business logic, the Generator accelerates the QA process by eliminating manual test creation while maintaining consistency and traceability to source requirements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <FeatureCard 
          title="Automated Test Generation" 
          description="Transforms user stories and requirements into comprehensive test scenarios without manual intervention."
          icon={<Workflow size={18} />}
        />
        <FeatureCard 
          title="Smart Test Data Creation" 
          description="Produces synthetic data sets up to 10,000+ records with relevant business constraints."
          icon={<Database size={18} />}
        />
        <FeatureCard 
          title="Coverage Analysis" 
          description="Automatically maps tests to requirements and identifies coverage gaps."
          icon={<PieChart size={18} />}
        />
        <FeatureCard 
          title="Multi-Framework Support" 
          description="Generates scripts compatible with various testing frameworks including Selenium and TestMagic."
          icon={<GitPullRequest size={18} />}
        />
      </div>
      
      <div className="mt-8 p-6 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
        <h4 className="text-lg font-medium mb-4 text-center text-spa-blue">Generator Agent Architecture</h4>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
            <FlowNode title="Requirements" type="Input" color="#6366F1">
              <FlowArrow />
            </FlowNode>
            <FlowNode title="Sample Test Data Formats" type="Input" color="#6366F1">
              <FlowArrow />
            </FlowNode>
            <FlowNode title="Templates" type="Input" color="#6366F1">
              <FlowArrow />
            </FlowNode>
          </div>
          
          <div className="w-full max-w-4xl p-4 bg-blue-50 rounded-lg border border-blue-100 text-center mb-6">
            <h5 className="text-base font-medium text-spa-blue mb-2">Generator Core</h5>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-2 rounded border border-blue-100 text-sm">
                Scenario Parser
              </div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm">
                Coverage Analyzer
              </div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm">
                Script Template
              </div>
            </div>
          </div>
          
          <FlowArrow />
          
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FlowNode title="Test Scenarios" type="Output" color="#10B981" />
            <FlowNode title="Test Cases" type="Output" color="#10B981" />
            <FlowNode title="Test Scripts" type="Output" color="#10B981" />
          </div>
        </div>
      </div>
    </DetailSection>
  );
};

export default GeneratorOverview;
