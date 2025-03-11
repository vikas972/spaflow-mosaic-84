import React from 'react';
import Pillar from '@/components/spa/Pillar';
import Persona from '@/components/spa/Persona';
import KnowledgeItem from '@/components/spa/KnowledgeItem';
import Skill from '@/components/spa/Skill';
import { ArrowUp, ArrowDown, Users, Database, Code, FlaskConical, Puzzle, PlaySquare, Gauge, FolderArchive, SquareStack, Server, HelpCircle } from 'lucide-react';

const PillarsSection: React.FC = () => {
  return (
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
                title="Functional Knowledge Hub" 
                description="L0/L1/L2/L3 IPAD/FS/UJ/UserStories/WireFrames/Proto" 
                icon={<FolderArchive size={18} />} 
                label="Functional Requirements"
              />
              <KnowledgeItem 
                title="Testing Knowledge Hub" 
                description="TS/TC/Metrics/Reports/Strategy.." 
                icon={<SquareStack size={18} />} 
                label="Functional Testing"
              />
              <KnowledgeItem 
                title="Technology Knowledge Hub" 
                description="Reference Arch: L0/L1/L2/L3 DESIGN/Impact Analysis" 
                icon={<Server size={18} />} 
                label="Technical"
              />
              <KnowledgeItem 
                title="Support Knowledge Hub" 
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
            <Skill name="LLM" />
            <Skill name="Sample Test Data" />
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
  );
};

export default PillarsSection;
