
import React from 'react';
import { GitMerge } from 'lucide-react';
import DetailSection from './DetailSection';

const GeneratorIntegration: React.FC = () => {
  return (
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
  );
};

export default GeneratorIntegration;
