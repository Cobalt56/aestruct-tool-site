import React from 'react';
import { Tool } from '../types';
import { TOOL_ICONS } from '../constants';
import Button from './Button';
import { ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: Tool;
  onTryTeaser: (tool: Tool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onTryTeaser }) => {
  return (
    <div className="bg-ae-card border border-ae-muted/20 rounded-xl p-6 flex flex-col h-full transition-all duration-300 group hover:-translate-y-2 hover:border-ae-accent hover:shadow-2xl hover:shadow-ae-accent/10">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-ae-dark rounded-lg text-ae-accent transition-transform duration-300 ease-out group-hover:scale-110">
          {TOOL_ICONS[tool.id]}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-ae-muted bg-ae-dark px-2 py-1 rounded">
          {tool.category.split(' ')[0]}
        </span>
      </div>
      
      <h3 className="text-xl font-serif font-bold text-ae-light mb-2">{tool.name}</h3>
      <p className="text-sm text-ae-muted mb-4 flex-grow">{tool.description}</p>
      
      <div className="space-y-3 mt-4">
        <Button 
          variant="primary" 
          size="sm" 
          className="w-full"
          onClick={() => onTryTeaser(tool)}
        >
          Try Demo <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        
        <div className="pt-3 border-t border-white/10 text-center">
          <Link 
            to="/product-contact" 
            className="inline-flex items-center justify-center gap-1 text-sm font-bold text-ae-accent hover:text-white transition-colors"
          >
            Request Full Version <Send className="w-3 h-3 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;