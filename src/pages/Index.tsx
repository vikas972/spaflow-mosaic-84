import React, { useState } from 'react';
import Pillar from '@/components/spa/Pillar';
import Module from '@/components/spa/Module';
import Persona from '@/components/spa/Persona';
import Skill from '@/components/spa/Skill';
import KnowledgeItem from '@/components/spa/KnowledgeItem';
import FlowConnector from '@/components/spa/FlowConnector';
import FeedbackLoop from '@/components/spa/FeedbackLoop';
import OutputCard from '@/components/spa/OutputCard';
import SectionNavigation from '@/components/spa/SectionNavigation';
import GeneratorDetails from '@/components/spa/GeneratorDetails';
import { 
  ArrowDownUp,
  ArrowDown,
  ArrowUp,
  BarChart,
  Book,
  Bot,
  Brain, 
  Briefcase,
  ChartBar,
  CheckCircle,
  Code, 
  Cog,
  Database, 
  Eye,
  FileCheck,
  FileCode,
  FileJson,
  FileSpreadsheet,
  FileText,
  FlaskConical, 
  FolderArchive, 
  Gauge, 
  GitMerge,
  Goal,
  HelpCircle,
  Home,
  Lightbulb,
  LineChart, 
  ListChecks,
  Network, 
  PersonStanding, 
  PlaySquare, 
  Puzzle, 
  ScrollText,
  Server,
  Settings,
  Shield,
  SquareStack, 
  TestTube, 
  Users, 
  Wand2,
  Workflow,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Helper component for Agent Specification items
const SpecItem = ({ children, className }) => (
  <div className={cn("text-sm space-y-1 list-disc pl-5", className)}>
    {children}
  </div>
);

// Helper component for Agent Specification items with title
const SpecSection = ({ title, color, children }) => (
  <div className="mb-4">
    <h4 className="text-sm font-medium mb-2" style={{ color }}>{title}</h4>
    {children}
  </div>
);

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
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Navigation */}
      <div className="w-full max-w-7xl mb-20">
        <SectionNavigation items={navigationItems} />
      </div>
      
      {/* Header */}
      <div id="overview" className="text-center mb-10 max-w-4xl animate-fade-in-up scroll-mt-20">
        <div className="inline-block px-3 py-1 rounded-full bg-spa-blue/10 text-spa-blue text-sm font-medium mb-4">
          Flow Diagram
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-spa-blue to-spa-purple">
          Solution and Product Assurance (SPA)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive quality assurance architecture built around three main pillars and four core modules,
          with a continuous feedback loop for optimal performance.
        </p>
      </div>
      
      {/* Main Flow Diagram */}
      <div className="w-full max-w-7xl relative">
        {/* Core Modules Flow - Moved to top */}
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
        
        {/* Starting Point */}
        <div className="mt-2 mb-16 glass-card p-4 max-w-xs mx-auto text-center animate-pulse-soft">
          <div className="flex items-center justify-center">
            <Lightbulb className="text-spa-yellow mr-2" size={20} />
            <h3 className="font-semibold">Product Requirements</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">Entry point for the SPA workflow</p>
        </div>
        
        {/* Three Pillars with Vertical Two-Way Connections */}
        <div id="pillars" className="mb-16 relative scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">SPA Framework Pillars</h2>
            <p className="text-gray-600">Three interconnected components that power the SPA ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" id="pillars-container">
            {/* Pillar 1: Digital Workforce */}
            <Pillar 
              title="Digital Workforce" 
              icon={<Users size={24} className="text-white" />} 
              color="#007AFF"
              className="md:col-span-1"
              data-id="pillar-workforce"
            >
              <Persona 
                name="Test Designer" 
                role="Scenario Generation" 
                color="#007AFF" 
                icon={<FlaskConical size={18} className="text-white" />} 
              />
              <Persona 
                name="Suite Composer" 
                role="Test Assembly" 
                color="#5856D6" 
                icon={<Puzzle size={18} className="text-white" />} 
              />
              <Persona 
                name="Test Executor" 
                role="Automated Test Execution & Validation" 
                color="#FF9500" 
                icon={<PlaySquare size={18} className="text-white" />} 
              />
              <Persona 
                name="QA Manager" 
                role="Certification & Improvement" 
                color="#34C759" 
                icon={<Gauge size={18} className="text-white" />} 
              />
            </Pillar>
            
            {/* Pillar 2: <DTB> Knowledge Garden */}
            <Pillar 
              title="<DTB> Knowledge Garden" 
              icon={<Database size={24} className="text-white" />} 
              color="#5856D6"
              className="md:col-span-1"
              data-id="pillar-knowledge"
            >
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Persistent Knowledge Base:</h4>
                <div className="space-y-2">
                  <KnowledgeItem 
                    title="Sampling Knowledge Hub" 
                    description="L0/L1/L2/L3 IPAD/FS/UJ/UserStories/WireFrames/Proto" 
                    icon={<FolderArchive size={18} />} 
                    label="Functional Requirements"
                  />
                  <KnowledgeItem 
                    title="VanGuard Knowledge Hub" 
                    description="TS/TC/Metrics/Reports/Strategy.." 
                    icon={<SquareStack size={18} />} 
                    label="Functional Testing"
                  />
                  <KnowledgeItem 
                    title="Nexus Knowledge Hub" 
                    description="Reference Arch: L0/L1/L2/L3 DESIGN/Impact Analysis" 
                    icon={<Server size={18} />} 
                    label="Technical"
                  />
                  <KnowledgeItem 
                    title="Rainforest Knowledge Hub" 
                    description="Incidents- SNOW/JIRA/User Manuals/Run Book/etc." 
                    icon={<HelpCircle size={18} />} 
                    label="Support"
                  />
                </div>
              </div>
            </Pillar>
            
            {/* Pillar 3: Skills */}
            <Pillar 
              title="Skills" 
              icon={<Code size={24} className="text-white" />} 
              color="#FF9500"
              className="md:col-span-1"
              data-id="pillar-skills"
            >
              <div className="flex flex-wrap">
                <Skill name="NLP" />
                <Skill name="Scenario Reasoning" />
                <Skill name="Decision-Making" />
                <Skill name="Test Case Generation" />
                <Skill name="Test Planning" />
                <Skill name="Contextual Memory" />
                <Skill name="Generative Content" />
                <Skill name="Automation Logic" />
                <Skill name="Feedback Integration" />
                <Skill name="Certification" />
                <Skill name="Compliance" />
                <Skill name="Multi-Modal Processing" />
                <Skill name="Reinforcement Learning" />
                <Skill name="NL2SQL" />
                <Skill name="NL2API" />
                <Skill name="Text2Speech" />
                <Skill name="Speech2Text" />
                <Skill name="Apply Model/Algos on Knowledge" />
                <Skill name="Summarize Knowledge into Frames" />
                <Skill name="Infer from Videos/Composite Content" />
                <Skill name="Reasoning to Identify Actions" />
                <Skill name="Ability to Learn" />
              </div>
            </Pillar>
          </div>
          
          {/* Vertical Bidirectional Connections */}
          <div className="mt-6 flex justify-around">
            <div className="flex flex-col items-center">
              <ArrowUp className="text-spa-blue animate-pulse-soft" />
              <div className="h-12 border-l border-dashed border-spa-blue"></div>
              <ArrowDown className="text-spa-blue animate-pulse-soft" />
            </div>
            <div className="flex flex-col items-center">
              <ArrowUp className="text-spa-blue animate-pulse-soft" />
              <div className="h-12 border-l border-dashed border-spa-blue"></div>
              <ArrowDown className="text-spa-blue animate-pulse-soft" />
            </div>
          </div>
          <p className="text-center text-sm text-spa-blue mt-2">Bidirectional Knowledge Flow Between Pillars</p>
        </div>
        
        {/* SPA Outputs Section - Enhanced with detailed outputs */}
        <div id="outputs" className="mt-8 mb-12 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">SPA Outputs</h2>
            <p className="text-gray-600">Comprehensive deliverables generated by the SPA framework</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Generator Outputs */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center mr-3">
                  <Wand2 size={16} className="text-white" />
                </div>
                Generator Outputs
              </h3>
              <div className="space-y-3">
                <OutputCard title="Test Scenarios" description="Comprehensive coverage scenarios" icon={<ScrollText size={16} />} color="#007AFF" />
                <OutputCard title="Test Cases" description="Detailed step-by-step instructions" icon={<FileText size={16} />} color="#007AFF" />
                <OutputCard title="Test Steps" description="Granular verification points" icon={<ListChecks size={16} />} color="#007AFF" />
                <OutputCard title="Test Data" description="Synthetic and reference data sets" icon={<Database size={16} />} color="#007AFF" />
                <OutputCard title="Coverage Analysis" description="Gaps and risk assessments" icon={<ChartBar size={16} />} color="#007AFF" />
                <OutputCard title="Requirements Traceability" description="Mapping to source requirements" icon={<GitMerge size={16} />} color="#007AFF" />
                <OutputCard title="Automated Scripts" description="Framework-specific test code" icon={<FileCode size={16} />} color="#007AFF" />
              </div>
            </div>
            
            {/* Composer Outputs */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#5856D6] flex items-center justify-center mr-3">
                  <Puzzle size={16} className="text-white" />
                </div>
                Composer Outputs
              </h3>
              <div className="space-y-3">
                <OutputCard title="Golden Thread Test Suite" description="End-to-end business process validation" icon={<FileCheck size={16} />} color="#5856D6" />
                <OutputCard title="CR-XYZ_Test Suite" description="Change request validation package" icon={<FileText size={16} />} color="#5856D6" />
                <OutputCard title="E2E Test Suite" description="Complete user journey validation" icon={<GitMerge size={16} />} color="#5856D6" />
                <OutputCard title="Test Magic Scripts" description="Optimized execution code" icon={<FileCode size={16} />} color="#5856D6" />
                <OutputCard title="Test Data_ABC_Scenario" description="Context-specific test data" icon={<FileJson size={16} />} color="#5856D6" />
                <OutputCard title="Integration Test Flows" description="System interaction validations" icon={<Network size={16} />} color="#5856D6" />
                <OutputCard title="Regression Test Pack" description="Impact-based regression suite" icon={<CheckCircle size={16} />} color="#5856D6" />
              </div>
            </div>
            
            {/* Executor Outputs */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF9500] flex items-center justify-center mr-3">
                  <TestTube size={16} className="text-white" />
                </div>
                Executor Outputs
              </h3>
              <div className="space-y-3">
                <OutputCard title="Test Execution Logs" description="Detailed run history" icon={<ScrollText size={16} />} color="#FF9500" />
                <OutputCard title="Defect Reports" description="Automated bug tracking" icon={<HelpCircle size={16} />} color="#FF9500" />
                <OutputCard title="Environmental Validation" description="System readiness checks" icon={<Server size={16} />} color="#FF9500" />
                <OutputCard title="CI/CD Integration Results" description="Pipeline gate metrics" icon={<Cog size={16} />} color="#FF9500" />
                <OutputCard title="Performance Benchmarks" description="Speed and throughput metrics" icon={<LineChart size={16} />} color="#FF9500" />
                <OutputCard title="Screenshot Comparisons" description="Visual regression outputs" icon={<FileSpreadsheet size={16} />} color="#FF9500" />
                <OutputCard title="Execution Dashboards" description="Real-time monitoring views" icon={<ChartBar size={16} />} color="#FF9500" />
              </div>
            </div>
            
            {/* Manager Outputs */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#34C759] flex items-center justify-center mr-3">
                  <Gauge size={16} className="text-white" />
                </div>
                Manager Outputs
              </h3>
              <div className="space-y-3">
                <OutputCard title="Project_ABC_Metric" description="Project-specific KPIs" icon={<LineChart size={16} />} color="#34C759" />
                <OutputCard title="Monthly Performance Report" description="Trend analysis and insights" icon={<FileSpreadsheet size={16} />} color="#34C759" />
                <OutputCard title="Project Status Report" description="Executive dashboards" icon={<ChartBar size={16} />} color="#34C759" />
                <OutputCard title="Metrics and Risk Ledger" description="Risk assessment and mitigation" icon={<Shield size={16} />} color="#34C759" />
                <OutputCard title="Certification Documents" description="Compliance validation" icon={<FileCheck size={16} />} color="#34C759" />
                <OutputCard title="Resource Utilization" description="Environment and tool usage" icon={<Settings size={16} />} color="#34C759" />
                <OutputCard title="Sign-off Records" description="Approval documentation" icon={<Briefcase size={16} />} color="#34C759" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Redesigned Agent Specifications */}
        <div id="agent-specs" className="mt-12 mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">SPA Agent Specifications</h2>
            <p className="text-gray-600">Key characteristics organized by Goals, Perspectives, and Experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Digital Agents Column */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#6E56CF] flex items-center justify-center mr-3">
                  <Bot size={16} className="text-white" />
                </div>
                Digital Agents
              </h3>
              
              <div className="space-y-4">
                <OutputCard 
                  title="Generator Agent" 
                  description="Creates test artifacts from requirements" 
                  icon={<Wand2 size={16} />} 
                  color="#007AFF"
                  variant="compact" 
                />
                
                <OutputCard 
                  title="Composer Agent" 
                  description="Assembles test scenarios into flows" 
                  icon={<Puzzle size={16} />} 
                  color="#5856D6"
                  variant="compact" 
                />
                
                <OutputCard 
                  title="Executor Agent" 
                  description="Runs tests and captures results" 
                  icon={<TestTube size={16} />} 
                  color="#FF9500"
                  variant="compact" 
                />
                
                <OutputCard 
                  title="Manager Agent" 
                  description="Provides oversight and certification" 
                  icon={<Gauge size={16} />} 
                  color="#34C759"
                  variant="compact" 
                />
                
                <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <p className="font-medium mb-1">Key Stakeholders:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Business Analysts</li>
                    <li>QA Engineers</li>
                    <li>Developers</li>
                    <li>System Integrators</li>
                    <li>Test Managers</li>
                    <li>Release Managers</li>
                    <li>Compliance Officers</li>
                    <li>DevOps Engineers</li>
                    <li>Product Owners</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Goals Pillar */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center mr-3">
                  <Goal size={16} className="text-white" />
                </div>
                Goals
              </h3>
              
              <div className="space-y-4">
                <SpecSection title="Generator Goals" color="#007AFF">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Automate Scenario Creation</li>
                    <li>Produce Comprehensive Test Data</li>
                    <li>Ensure Complete Coverage</li>
                    <li>Accelerate Onboarding</li>
                    <li>Support Multiple Frameworks</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Composer Goals" color="#5856D6">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Combine Scenarios into Flows</li>
                    <li>Optimize Test Execution</li>
                    <li>Maintain Version History</li>
                    <li>Provide Business Visibility</li>
                    <li>Facilitate Stakeholder Collaboration</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Executor Goals" color="#FF9500">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Run Tests Efficiently</li>
                    <li>Real-Time Monitoring</li>
                    <li>Integrate with CI/CD</li>
                    <li>Defect Handling</li>
                    <li>Scalable Execution</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Manager Goals" color="#34C759">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Ensure Governance</li>
                    <li>Risk & Coverage Oversight</li>
                    <li>Sign-Off Workflows</li>
                    <li>Reporting & Analytics</li>
                    <li>Archival & Audit</li>
                  </ul>
                </SpecSection>
              </div>
            </div>
            
            {/* Perspectives Pillar */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#5856D6] flex items-center justify-center mr-3">
                  <Eye size={16} className="text-white" />
                </div>
                Perspectives
              </h3>
              
              <div className="space-y-4">
                <SpecSection title="Generator Perspectives" color="#007AFF">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><span className="font-medium">Business Analyst:</span> Alignment with criteria</li>
                    <li><span className="font-medium">QA Engineer:</span> Script generation efficiency</li>
                    <li><span className="font-medium">Developer:</span> Maintainable test cases</li>
                    <li><span className="font-medium">System Integrator:</span> Pipeline integration</li>
                    <li><span className="font-medium">Risk Manager:</span> Coverage oversight</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Composer Perspectives" color="#5856D6">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><span className="font-medium">Tester:</span> Scenario arrangement</li>
                    <li><span className="font-medium">Test Manager:</span> Coverage visibility</li>
                    <li><span className="font-medium">Release Manager:</span> Readiness assessment</li>
                    <li><span className="font-medium">DevOps:</span> Pipeline integration</li>
                    <li><span className="font-medium">Compliance:</span> Regulatory validation</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Executor Perspectives" color="#FF9500">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><span className="font-medium">QA Lead:</span> Failure triage</li>
                    <li><span className="font-medium">Developer:</span> Debugging information</li>
                    <li><span className="font-medium">DevOps:</span> CI pipeline gates</li>
                    <li><span className="font-medium">Product Owner:</span> Release readiness</li>
                    <li><span className="font-medium">Infrastructure:</span> Resource utilization</li>
                  </ul>
                </SpecSection>
              </div>
            </div>
            
            {/* Experiences Pillar */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF9500] flex items-center justify-center mr-3">
                  <Book size={16} className="text-white" />
                </div>
                Experiences
              </h3>
              
              <div className="space-y-4">
                <SpecSection title="Generator Experiences" color="#007AFF">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Smooth Requirement Import</li>
                    <li>Scalable Data Generation</li>
                    <li>Real-Time Coverage Feedback</li>
                    <li>Extensible Script Templates</li>
                    <li>Guided UI Workflow</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Composer Experiences" color="#5856D6">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Graphical Flow Composition</li>
                    <li>Automated Overlap Detection</li>
                    <li>Annotations & Tagging System</li>
                    <li>Comprehensive Flow Reporting</li>
                    <li>Version Control & Comparison</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Executor Experiences" color="#FF9500">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>One-Click Scheduling</li>
                    <li>Live Log Feeds</li>
                    <li>Fail-Fast Mode</li>
                    <li>Defect Auto-Raise</li>
                    <li>Parallel Execution Dashboard</li>
                  </ul>
                </SpecSection>
                
                <SpecSection title="Manager Experiences" color="#34C759">
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Central Dashboard</li>
                    <li>Coverage Threshold Alerts</li>
                    <li>Simple Sign-Off</li>
                    <li>Defect Prioritization</li>
                    <li>Archival & Retrieval</li>
                  </ul>
                </SpecSection>
              </div>
            </div>
          </div>
        </div>
        
        {/* Generator Agent Details Section with Sub-Navigation */}
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
      </div>
      
      {/* Flow Connectors */}
      {/* Drawing connector lines between modules */}
      <FlowConnector startId="module-generator" endId="module-composer" delay={0.5} />
      <FlowConnector startId="module-composer" endId="module-executor" delay={0.7} />
      <FlowConnector startId="module-executor" endId="module-manager" delay={0.9} />
      
      {/* Drawing connector lines between pillars */}
      <FlowConnector startId="pillar-workforce" endId="pillar-knowledge" delay={1.1} curved={false} />
      <FlowConnector startId="pillar-knowledge" endId="pillar-skills" delay={1.3} curved={false} />
      <FlowConnector startId="pillar-workforce" endId="pillar-skills" delay={1.5} curved={false} />
      
      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <p>Designed with attention to detail and minimal design principles</p>
        <p className="mt-1">© {new Date().getFullYear()} SPA Flow</p>
      </div>
    </div>
  );
};

export default Index;

