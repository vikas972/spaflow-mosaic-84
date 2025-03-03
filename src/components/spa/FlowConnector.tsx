
import React, { useEffect, useState } from 'react';
import { createCurvedPath } from '@/utils/diagramUtils';

interface FlowConnectorProps {
  startId: string;
  endId: string;
  curved?: boolean;
  animated?: boolean;
  delay?: number;
}

const FlowConnector: React.FC<FlowConnectorProps> = ({ 
  startId, 
  endId, 
  curved = true,
  animated = true,
  delay = 0
}) => {
  const [path, setPath] = useState<string>('');
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updatePath = () => {
    const startElement = document.getElementById(startId);
    const endElement = document.getElementById(endId);
    
    if (!startElement || !endElement) return;
    
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    
    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.top + startRect.height / 2;
    const endX = endRect.left + endRect.width / 2;
    const endY = endRect.top + endRect.height / 2;
    
    if (curved) {
      setPath(createCurvedPath(startX, startY, endX, endY));
    } else {
      setPath(`M ${startX} ${startY} L ${endX} ${endY}`);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    setTimeout(updatePath, 500 + delay * 1000); // Initial update with delay
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [startId, endId, delay]);

  useEffect(() => {
    updatePath();
  }, [dimensions]);

  return (
    <svg 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <path 
        d={path} 
        className={animated ? "flow-path" : "connector"}
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
};

export default FlowConnector;
