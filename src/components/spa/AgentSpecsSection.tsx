
import React from 'react';
import OutputCard from '@/components/spa/OutputCard';
import { 
  Bot, Wand2, Puzzle, TestTube, Gauge, Goal, Eye, Book
} from 'lucide-react';

// Helper component for Agent Specification items
const SpecItem = ({ children, className }) => (
  <div className={`text-sm space-y-1 list-disc pl-5 ${className}`}>
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

const AgentSpecsSection: React.FC = () => {
  return (
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
  );
};

export default AgentSpecsSection;
