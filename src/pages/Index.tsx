
import React from 'react';
import Pillar from '@/components/spa/Pillar';
import Module from '@/components/spa/Module';
import Persona from '@/components/spa/Persona';
import Skill from '@/components/spa/Skill';
import KnowledgeItem from '@/components/spa/KnowledgeItem';
import FlowConnector from '@/components/spa/FlowConnector';
import FeedbackLoop from '@/components/spa/FeedbackLoop';
import { 
  Brain, 
  Code, 
  Database, 
  FlaskConical, 
  FolderArchive, 
  Gauge, 
  Lightbulb, 
  Link, 
  Network, 
  PersonStanding, 
  PlaySquare, 
  Puzzle, 
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
        {/* Three Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Digital Workforce */}
          <Pillar 
            title="Digital Workforce" 
            icon={<Users size={24} className="text-white" />} 
            color="#007AFF"
            className="md:col-span-1"
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
          
          {/* Pillar 2: Knowledge Garden */}
          <Pillar 
            title="Knowledge Garden" 
            icon={<Database size={24} className="text-white" />} 
            color="#5856D6"
            className="md:col-span-1"
          >
            <KnowledgeItem 
              title="Persistent Knowledge Base" 
              description="Requirements, test cases, logs, certification" 
              icon={<FolderArchive size={18} />} 
            />
            <KnowledgeItem 
              title="Semantic Network" 
              description="Relationships and dependencies mapping" 
              icon={<Network size={18} />} 
            />
            <KnowledgeItem 
              title="Memory Map" 
              description="Nodes, edges, timestamps, relevance scores" 
              icon={<Link size={18} />} 
            />
          </Pillar>
          
          {/* Pillar 3: Skills Modules */}
          <Pillar 
            title="Skills Modules" 
            icon={<Code size={24} className="text-white" />} 
            color="#FF9500"
            className="md:col-span-1"
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
            </div>
          </Pillar>
        </div>
        
        {/* Core Modules Flow */}
        <div className="relative mb-10">
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
        <div className="mt-8 glass-card p-4 max-w-xs mx-auto text-center animate-pulse-soft">
          <div className="flex items-center justify-center">
            <Lightbulb className="text-spa-yellow mr-2" size={20} />
            <h3 className="font-semibold">Product Requirements</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">Entry point for the SPA workflow</p>
        </div>
      </div>
      
      {/* Flow Connectors */}
      {/* Drawing connector lines between modules */}
      <FlowConnector startId="module-generator" endId="module-composer" delay={0.5} />
      <FlowConnector startId="module-composer" endId="module-executor" delay={0.7} />
      <FlowConnector startId="module-executor" endId="module-manager" delay={0.9} />
      
      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <p>Designed with attention to detail and minimal design principles</p>
        <p className="mt-1">© {new Date().getFullYear()} SPA Flow</p>
      </div>
    </div>
  );
};

export default Index;
