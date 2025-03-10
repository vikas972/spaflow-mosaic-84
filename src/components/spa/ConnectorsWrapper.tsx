
import React from 'react';
import FlowConnector from '@/components/spa/FlowConnector';

const ConnectorsWrapper: React.FC = () => {
  return (
    <>
      {/* Flow Connectors */}
      {/* Drawing connector lines between modules */}
      <FlowConnector startId="module-generator" endId="module-composer" delay={0.5} />
      <FlowConnector startId="module-composer" endId="module-executor" delay={0.7} />
      <FlowConnector startId="module-executor" endId="module-manager" delay={0.9} />
      
      {/* Drawing connector lines between pillars */}
      <FlowConnector startId="pillar-workforce" endId="pillar-knowledge" delay={1.1} curved={false} />
      <FlowConnector startId="pillar-knowledge" endId="pillar-skills" delay={1.3} curved={false} />
      <FlowConnector startId="pillar-workforce" endId="pillar-skills" delay={1.5} curved={false} />
    </>
  );
};

export default ConnectorsWrapper;
