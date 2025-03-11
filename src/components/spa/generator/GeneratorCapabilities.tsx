
import React from 'react';
import { Zap } from 'lucide-react';
import DetailSection from './DetailSection';

const GeneratorCapabilities: React.FC = () => {
  return (
    <DetailSection 
      id="generator-capabilities" 
      title="Key Capabilities" 
      icon={<Zap size={16} className="text-white" />}
      color="#007AFF"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/60 p-4 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="text-base font-medium mb-3 text-spa-blue">Synthesised Knowledge</h4>
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
              {["Generator", "Extended AI/Analytics"
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
  );
};

export default GeneratorCapabilities;
