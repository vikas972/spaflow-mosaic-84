
import React from 'react';
import { ArrowDownLeft, ArrowUpRight, RefreshCw } from 'lucide-react';

interface FeedbackLoopProps {
  className?: string;
}

const FeedbackLoop: React.FC<FeedbackLoopProps> = ({ className }) => {
  return (
    <div className={`glass-card p-4 animate-fade-in-up ${className}`} style={{ animationDelay: '0.8s' }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <RefreshCw className="text-spa-green animate-spin-slow" size={20} />
        <h3 className="text-base font-semibold">Continuous Feedback Loop</h3>
      </div>
      
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-spa-blue">
          <ArrowUpRight size={16} />
          <span>Quality Metrics</span>
        </div>
        <div className="flex items-center gap-2 text-spa-green">
          <ArrowDownLeft size={16} />
          <span>Learning & Improvement</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackLoop;
