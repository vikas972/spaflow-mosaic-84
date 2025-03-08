
import React from 'react';
import Pillar from '@/components/spa/Pillar';
import Module from '@/components/spa/Module';
import Persona from '@/components/spa/Persona';
import Skill from '@/components/spa/Skill';
import KnowledgeItem from '@/components/spa/KnowledgeItem';
import FlowConnector from '@/components/spa/FlowConnector';
import FeedbackLoop from '@/components/spa/FeedbackLoop';
import OutputCard from '@/components/spa/OutputCard';
import { 
  ArrowDownUp,
  Brain, 
  Code, 
  Database, 
  FileText,
  FlaskConical, 
  FolderArchive, 
  Gauge, 
  HelpCircle,
  Lightbulb, 
  Network, 
  PersonStanding, 
  PlaySquare, 
  Puzzle, 
  Server,
  SquareStack, 
  TestTube, 
  Users, 
  Wand2 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="text-center mb-10 max-w-4xl animate-fade-in-up">
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
        <div className="relative mb-16">
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
        
        {/* Three Pillars Row - Moved below Core Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" id="pillars-container">
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
                  description="Functional Requirements: L0/L1/L2/L3 IPAD/FS/UJ/UserStories/WireFrames/Proto" 
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
        
        {/* Pillar interconnections with bidirectional arrows */}
        <div className="my-4">
          <div className="flex justify-center items-center">
            <div className="flex-1 border-t border-dashed border-spa-blue"></div>
            <ArrowDownUp className="mx-2 text-spa-blue animate-pulse-soft" />
            <div className="flex-1 border-t border-dashed border-spa-blue"></div>
          </div>
          <p className="text-center text-sm text-spa-blue mt-1">Bidirectional Flow Between Pillars</p>
        </div>
        
        {/* SPA Outputs Section */}
        <div className="mt-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">SPA Outputs</h2>
            <p className="text-gray-600">Deliverables generated by the SPA framework</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Generator Outputs */}
            <div className="glass-card p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center mr-2">
                  <Wand2 size={14} className="text-white" />
                </div>
                Generator Outputs
              </h3>
              <div className="space-y-2">
                <OutputCard title="Test Scenarios" icon={<FileText size={14} />} />
                <OutputCard title="Test Cases" icon={<FileText size={14} />} />
                <OutputCard title="Test Steps" icon={<FileText size={14} />} />
                <OutputCard title="Test Data" icon={<Database size={14} />} />
                <OutputCard title="Test Coverage Analysis" icon={<Gauge size={14} />} />
              </div>
            </div>
            
            {/* Composer Outputs */}
            <div className="glass-card p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#5856D6] flex items-center justify-center mr-2">
                  <Puzzle size={14} className="text-white" />
                </div>
                Composer Outputs
              </h3>
              <div className="space-y-2">
                <OutputCard title="Golden Thread Test Suite" icon={<FileText size={14} />} />
                <OutputCard title="CR-XYZ_Test Suite" icon={<FileText size={14} />} />
                <OutputCard title="E2E Test Suite" icon={<FileText size={14} />} />
                <OutputCard title="Test Magic Scripts" icon={<Code size={14} />} />
                <OutputCard title="Test Data_ABC_Scenario" icon={<Database size={14} />} />
              </div>
            </div>
            
            {/* Manager Outputs */}
            <div className="glass-card p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center mr-2">
                  <Gauge size={14} className="text-white" />
                </div>
                Manager Outputs
              </h3>
              <div className="space-y-2">
                <OutputCard title="Project_ABC_Metric" icon={<Gauge size={14} />} />
                <OutputCard title="Monthly Performance Report" icon={<FileText size={14} />} />
                <OutputCard title="Project Status Report" icon={<FileText size={14} />} />
                <OutputCard title="Metrics and Risk Ledger" icon={<FileText size={14} />} />
                <OutputCard title="Certification Documents" icon={<FileText size={14} />} />
              </div>
            </div>
          </div>
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
