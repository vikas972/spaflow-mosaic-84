
import React from 'react';
import GeneratorOverview from './generator/GeneratorOverview';
import GeneratorWorkflow from './generator/GeneratorWorkflow';
import GeneratorCapabilities from './generator/GeneratorCapabilities';
import GeneratorIntegration from './generator/GeneratorIntegration';

const GeneratorDetails: React.FC = () => {
  return (
    <div className="space-y-8">
      <GeneratorOverview />
      <GeneratorWorkflow />
      <GeneratorCapabilities />
      <GeneratorIntegration />
    </div>
  );
};

export default GeneratorDetails;
