import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TOOLS, TOOL_ICONS } from '../constants';
import { Tool } from '../types';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle2, Terminal, ArrowRight, Send } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';

interface ToolDetailProps {
  onTryTeaser: (tool: Tool) => void;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ onTryTeaser }) => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = TOOLS.find(t => t.id === toolId);

  usePageSEO({
    title: tool ? `${tool.name} | AEstruct Inc.` : "Tool Not Found",
    description: tool ? tool.description : "Tool details not found."
  });

  if (!tool) {
    return <Navigate to="/products" replace />;
  }

  // Safely handle the icon cloning
  const iconNode = TOOL_ICONS[tool.id];
  const renderedIcon = React.isValidElement(iconNode) 
    ? React.cloneElement(iconNode as React.ReactElement<{ className?: string }>, { className: "w-full h-full" })
    : iconNode;

  return (
    <div className="min-h-screen pb-20 animate-in fade-in duration-500">
      {/* Header / Hero */}
      <div className="bg-ae-darker border-b border-white/5 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center text-ae-muted hover:text-ae-accent mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-6 bg-ae-card border border-white/10 rounded-2xl shadow-2xl shadow-ae-accent/5 flex-shrink-0">
              <div className="text-ae-accent w-16 h-16">
                {renderedIcon}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-ae-card border border-white/10 text-xs font-bold text-ae-muted uppercase tracking-wider">
                  {tool.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-ae-accent/10 text-xs font-bold text-ae-accent uppercase tracking-wider">
                  Version 3.0
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                {tool.name}
              </h1>
              <p className="text-xl text-ae-accent font-medium mb-6">
                {tool.tagline}
              </p>
              <p className="text-lg text-ae-muted leading-relaxed max-w-3xl mb-8">
                {tool.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => onTryTeaser(tool)} size="lg" className="shadow-lg shadow-ae-accent/20">
                  Try Interactive Demo <Terminal className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/product-contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Request Full Version <Send className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Features & Scenarios */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Features */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-8">Core Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="bg-ae-card/50 p-5 rounded-xl border border-white/5 flex items-start group hover:border-ae-accent/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-ae-accent mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-bold text-ae-light text-lg mb-1">{feature}</h3>
                      <p className="text-ae-muted text-sm">Professional-grade prompt logic designed for enterprise workflows.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scenarios / Use Cases */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-8">Common Use Cases</h2>
              <div className="space-y-6">
                {tool.scenarios?.map((scenario, idx) => (
                  <div key={scenario.id} className="bg-ae-dark border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
                    <div className="p-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                      <span className="font-bold text-ae-light">Scenario {idx + 1}: {scenario.label}</span>
                      <span className="text-xs text-ae-muted uppercase tracking-wider border border-white/10 px-2 py-1 rounded">Simulation Data</span>
                    </div>
                    <div className="p-6 grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-xs font-bold text-ae-muted uppercase mb-2">Input Context</div>
                        <div className="text-sm text-ae-light font-mono bg-black/30 p-4 rounded-lg border border-white/5 h-full">
                          "{scenario.input}"
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-ae-accent uppercase mb-2">System Output</div>
                        <div className="text-sm text-ae-muted font-mono bg-ae-card p-4 rounded-lg border border-white/5 h-full whitespace-pre-wrap">
                          {scenario.output.slice(0, 150)}...
                          <button 
                            onClick={() => onTryTeaser(tool)}
                            className="block mt-3 text-ae-accent hover:text-white hover:underline text-xs font-bold transition-colors"
                          >
                            [Run Demo to See Full Output]
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Specifications & Sidebar */}
          <div className="space-y-8">
            <div className="bg-ae-card border border-white/10 rounded-2xl p-8 sticky top-36 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Technical Specs</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-ae-muted">Version</span>
                  <span className="text-white font-mono">3.0.1</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-ae-muted">Est. Demo Size</span>
                  <span className="text-white font-mono">{tool.demoFileSize || 'N/A'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-ae-muted">Platform</span>
                  <span className="text-white">Claude / Gemini / GPT-4</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-ae-muted">License Type</span>
                  <span className="text-white">Enterprise / Per Seat</span>
                </div>
              </div>

              <div className="space-y-4">
                 <Button onClick={() => onTryTeaser(tool)} className="w-full justify-between group">
                   Run Simulation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
                 
                 {tool.demoFilePath && (
                   <p className="text-xs text-center text-ae-muted">
                     Includes downloadable .MD specification file
                   </p>
                 )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-ae-accent/10 to-transparent border border-ae-accent/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-ae-accent mb-2">Enterprise Integration</h3>
              <p className="text-sm text-ae-muted mb-6">
                Need this tool connected directly to your internal databases (e.g. StudioBinder, QuickBooks)?
              </p>
              <Link to="/contact" className="text-white text-sm font-bold hover:text-ae-accent flex items-center transition-colors">
                Contact Engineering <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ToolDetail;