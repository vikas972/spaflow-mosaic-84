
import React from 'react';
import { Wand2, Workflow, Database, PieChart, Zap, FileCheck, GitPullRequest, BarChart, GitMerge, ArrowRight, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DetailSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

const DetailSection: React.FC<DetailSectionProps> = ({ id, title, icon, color, children }) => {
  return (
    <div id={id} className="scroll-mt-20 glass-card p-6 mb-8">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: color }}>
          {icon}
        </div>
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color = "#007AFF" }) => {
  return (
    <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
      <div className="flex items-start">
        <div className="mr-4 p-2 rounded-md text-white" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div>
          <h4 className="text-base font-medium mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  color?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, color = "#007AFF" }) => {
  return (
    <div className="flex items-start">
      <div 
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white mr-4"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div>
        <h4 className="text-base font-medium">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const FlowNode: React.FC<{ title: string; type: string; color: string; children?: React.ReactNode }> = ({ 
  title, 
  type, 
  color, 
  children 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="p-4 rounded-lg shadow-md border border-gray-100 w-full text-center mb-2"
        style={{ backgroundColor: `${color}20`, borderColor: color }}
      >
        <div className="text-xs uppercase tracking-wider mb-1" style={{ color }}>
          {type}
        </div>
        <div className="font-medium" style={{ color }}>
          {title}
        </div>
      </div>
      {children}
    </div>
  );
};

const FlowArrow: React.FC<{ direction?: 'down' | 'right'; label?: string }> = ({ 
  direction = 'down',
  label
}) => {
  return (
    <div className={`flex ${direction === 'down' ? 'flex-col items-center my-1' : 'items-center mx-2'}`}>
      {direction === 'down' ? (
        <ArrowDown className="text-gray-400 my-1" />
      ) : (
        <ArrowRight className="text-gray-400 mx-1" />
      )}
      {label && (
        <span className="text-xs text-gray-500">{label}</span>
      )}
    </div>
  );
};

const GeneratorDetails: React.FC = () => {
  return (
    <div className="space-y-8">
      <DetailSection 
        id="generator-overview" 
        title="Generator Agent Overview" 
        icon={<Wand2 size={16} className="text-white" />}
        color="#007AFF"
      >
        <div className="text-gray-700 space-y-4">
          <p>
            The Generator Agent is the cornerstone of the SPA framework, responsible for transforming business requirements into comprehensive test artifacts. Using advanced NLP capabilities, it automatically generates test scenarios, cases, steps, and synthetic data to ensure complete coverage of functional requirements.
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
              <FlowNode title="Test Data" type="Input" color="#6366F1">
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
                <div className="font-medium">MVP Lifecycle Manager</div>
              </div>
            </div>
          </div>
        </div>
      </DetailSection>
      
      <DetailSection 
        id="generator-capabilities" 
        title="Key Capabilities" 
        icon={<Zap size={16} className="text-white" />}
        color="#007AFF"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="text-base font-medium mb-3 text-spa-blue">NLP Understanding</h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Parses complex requirements in natural language</li>
              <li>Identifies implied business rules and constraints</li>
              <li>Understands context across multiple documents</li>
              <li>Recognizes domain-specific terminology</li>
              <li>Extracts test conditions from unstructured text</li>
            </ul>
          </div>
          
          <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="text-base font-medium mb-3 text-spa-blue">Test Engineering</h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Applies test design techniques automatically</li>
              <li>Generates boundary value analysis</li>
              <li>Creates equivalence partitioning tests</li>
              <li>Designs state transition test cases</li>
              <li>Implements decision table testing</li>
              <li>Develops negative and exception test cases</li>
            </ul>
          </div>
          
          <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="text-base font-medium mb-3 text-spa-blue">Data Intelligence</h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Creates realistic synthetic data sets</li>
              <li>Maintains referential integrity in complex data</li>
              <li>Applies business validations and constraints</li>
              <li>Generates performance test volumes</li>
              <li>Masks sensitive information automatically</li>
              <li>Ensures data diversity for thorough testing</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="text-lg font-medium mb-6 text-center text-spa-blue">Generator Agent Types</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center mb-4">
                <h5 className="text-lg font-medium text-blue-700 mb-2">Atomic Agents</h5>
                <p className="text-sm text-blue-600">Single-purpose components handling specific tasks</p>
              </div>
              <ul className="space-y-2">
                {["Data Fetcher", "Coverage Analyzer", "Script Template", "Scenario Parser", 
                  "Data Pattern Generator", "Risk Heuristic Engine", "CSV/JSON Transformer", "Validation Checker"
                ].map(agent => (
                  <li key={agent} className="bg-white p-2 rounded border border-blue-100 text-sm shadow-sm">
                    {agent}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-center mb-4">
                <h5 className="text-lg font-medium text-indigo-700 mb-2">Molecular Agents</h5>
                <p className="text-sm text-indigo-600">Coordinated combinations of atomic agents</p>
              </div>
              <ul className="space-y-2">
                {["Coverage Consolidator", "Script Generator", "Data Factory", 
                  "Scenario Bundler", "Quick Start Wizard"
                ].map(agent => (
                  <li key={agent} className="bg-white p-2 rounded border border-indigo-100 text-sm shadow-sm">
                    {agent}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center mb-4">
                <h5 className="text-lg font-medium text-green-700 mb-2">Compound Agents</h5>
                <p className="text-sm text-green-600">High-level orchestrators managing complex flows</p>
              </div>
              <ul className="space-y-2">
                {["MVP Lifecycle Manager", "Extended AI/Analytics"
                ].map(agent => (
                  <li key={agent} className="bg-white p-2 rounded border border-green-100 text-sm shadow-sm">
                    {agent}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DetailSection>
      
      <DetailSection 
        id="generator-metrics" 
        title="Performance Metrics" 
        icon={<BarChart size={16} className="text-white" />}
        color="#007AFF"
      >
        <div className="space-y-6">
          <p className="text-gray-700">
            The Generator Agent's effectiveness is measured through key performance indicators that track its ability to produce comprehensive, accurate test assets efficiently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-base font-medium mb-2 text-spa-blue">Test Coverage</h4>
              <div className="text-2xl font-bold mb-1">98.5%</div>
              <p className="text-xs text-gray-500">Functional requirement coverage</p>
            </div>
            
            <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-base font-medium mb-2 text-spa-blue">Generation Speed</h4>
              <div className="text-2xl font-bold mb-1">50+</div>
              <p className="text-xs text-gray-500">Test cases per minute</p>
            </div>
            
            <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-base font-medium mb-2 text-spa-blue">Accuracy</h4>
              <div className="text-2xl font-bold mb-1">96.2%</div>
              <p className="text-xs text-gray-500">Test case quality assessment</p>
            </div>
            
            <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-base font-medium mb-2 text-spa-blue">Data Variety</h4>
              <div className="text-2xl font-bold mb-1">10K+</div>
              <p className="text-xs text-gray-500">Synthetic data records per hour</p>
            </div>
          </div>
        </div>
      </DetailSection>
      
      <DetailSection 
        id="generator-integration" 
        title="Integration Points" 
        icon={<GitMerge size={16} className="text-white" />}
        color="#007AFF"
      >
        <div className="space-y-6">
          <p className="text-gray-700 mb-4">
            The Generator Agent seamlessly connects with various systems and tools in the testing ecosystem:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-base font-medium mb-3 text-spa-blue">Input Integrations</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li><span className="font-medium">JIRA/Azure DevOps:</span> Direct import of user stories and requirements</li>
                <li><span className="font-medium">Confluence/SharePoint:</span> Documentation retrieval for context</li>
                <li><span className="font-medium">Git Repositories:</span> Code analysis for API/method signatures</li>
                <li><span className="font-medium">Legacy Test Management:</span> Historical test asset import</li>
                <li><span className="font-medium">Database Schemas:</span> Data structure understanding</li>
              </ul>
            </div>
            
            <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-base font-medium mb-3 text-spa-blue">Output Integrations</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li><span className="font-medium">Test Management Systems:</span> Test case export (TestRail, QTest)</li>
                <li><span className="font-medium">CI/CD Pipelines:</span> Automated script publication</li>
                <li><span className="font-medium">Composer Agent:</span> Direct handoff of test scenarios</li>
                <li><span className="font-medium">Data Repositories:</span> Synthetic data storage</li>
                <li><span className="font-medium">Reporting Systems:</span> Coverage metrics publication</li>
              </ul>
            </div>
          </div>
        </div>
      </DetailSection>
      
      <DetailSection 
        id="generator-case-studies" 
        title="Success Stories" 
        icon={<FileCheck size={16} className="text-white" />}
        color="#007AFF"
      >
        <div className="space-y-6">
          <div className="bg-white/60 p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="text-lg font-medium mb-2">Financial Services: Regulatory Compliance Testing</h4>
            <p className="text-sm text-gray-700 mb-3">
              A global banking client used the Generator Agent to transform 5,000+ pages of regulatory requirements into comprehensive test suites. The agent automatically created 12,000+ test cases with full traceability to specific regulations, reducing compliance risk and audit preparation time by 70%.
            </p>
            <div className="text-sm text-spa-blue font-medium">
              Key achievements:
            </div>
            <ul className="text-sm text-gray-700 mt-1 list-disc pl-5">
              <li>70% reduction in compliance documentation effort</li>
              <li>98.7% regulatory requirement coverage</li>
              <li>3x faster response to regulatory changes</li>
            </ul>
          </div>
          
          <div className="bg-white/60 p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="text-lg font-medium mb-2">Digital Corporate Banking: Platform Modernization</h4>
            <p className="text-sm text-gray-700 mb-3">
              A leading financial institution leveraged the Generator Agent to modernize their corporate banking platform. The agent analyzed complex financial workflows and generated 15,000+ test scenarios covering payment processing, treasury management, and cash flow forecasting features with precise validation for regulatory requirements across multiple jurisdictions.
            </p>
            <div className="text-sm text-spa-blue font-medium">
              Key achievements:
            </div>
            <ul className="text-sm text-gray-700 mt-1 list-disc pl-5">
              <li>90% reduction in test case creation time</li>
              <li>42 critical security vulnerabilities identified pre-launch</li>
              <li>99.5% transaction accuracy verification</li>
              <li>Compliance with banking regulations across 28 countries</li>
            </ul>
          </div>
        </div>
      </DetailSection>
    </div>
  );
};

export default GeneratorDetails;
