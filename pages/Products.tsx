
import React, { useState, Suspense, lazy, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TOOLS } from '../constants';
import { Tool, ProductLine } from '../types';
import Button from '../components/Button';
import { usePageSEO } from '../hooks/usePageSEO';
import { Briefcase, Video } from 'lucide-react';

// Lazy load the ToolCard component
const ToolCard = lazy(() => import('../components/ToolCard'));

interface ProductsProps {
  onTryTeaser: (tool: Tool) => void;
}

// Skeleton loader for better UX during lazy load or viewport wait
const ToolCardSkeleton = () => (
  <div className="bg-ae-card border border-ae-muted/20 rounded-xl p-6 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-white/5 rounded-lg animate-pulse"></div>
      <div className="w-24 h-6 bg-white/5 rounded animate-pulse"></div>
    </div>
    <div className="h-8 bg-white/5 rounded mb-4 w-3/4 animate-pulse"></div>
    <div className="h-4 bg-white/5 rounded mb-2 animate-pulse"></div>
    <div className="h-4 bg-white/5 rounded mb-2 w-5/6 animate-pulse"></div>
    <div className="h-4 bg-white/5 rounded mb-6 w-1/2 animate-pulse"></div>
    <div className="mt-auto h-10 bg-white/5 rounded animate-pulse"></div>
  </div>
);

// Wrapper component to handle Viewport visibility
const LazyToolCard: React.FC<{ tool: Tool; onTryTeaser: (tool: Tool) => void }> = ({ tool, onTryTeaser }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Start loading slightly before it comes into view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="h-full">
      {isVisible ? (
        <Suspense fallback={<ToolCardSkeleton />}>
          <ToolCard tool={tool} onTryTeaser={onTryTeaser} />
        </Suspense>
      ) : (
        <ToolCardSkeleton />
      )}
    </div>
  );
};

const Products: React.FC<ProductsProps> = ({ onTryTeaser }) => {
  usePageSEO({
    title: "Production OS Tool Suite | AEstruct Inc.",
    description: "Explore AEstruct's Production OS suite. From Indy Studio tools to Creator Economy accelerators, optimize workflows with professional prompt engineering."
  });

  const [productLineFilter, setProductLineFilter] = useState<string>('All');

  const filteredTools = productLineFilter === 'All' 
    ? TOOLS 
    : TOOLS.filter(t => t.productLine === productLineFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Production OS Tool Suite</h1>
        <p className="text-ae-muted max-w-2xl mx-auto">
          Professional-grade prompt engineering packages designed to optimize every stage of the production pipeline.
        </p>
      </div>

      {/* Product Line Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-ae-card/50 p-1.5 rounded-xl border border-white/5 inline-flex gap-2">
            <button
              onClick={() => setProductLineFilter('All')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                productLineFilter === 'All' 
                  ? 'bg-ae-accent text-ae-darker shadow-lg' 
                  : 'text-ae-muted hover:text-white hover:bg-white/5'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setProductLineFilter(ProductLine.INDY_STUDIO)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                productLineFilter === ProductLine.INDY_STUDIO 
                  ? 'bg-ae-accent text-ae-darker shadow-lg' 
                  : 'text-ae-muted hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase className="w-4 h-4" /> Indy Studio Skills
            </button>
            <button
              onClick={() => setProductLineFilter(ProductLine.CREATOR)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                productLineFilter === ProductLine.CREATOR 
                  ? 'bg-ae-accent text-ae-darker shadow-lg' 
                  : 'text-ae-muted hover:text-white hover:bg-white/5'
              }`}
            >
              <Video className="w-4 h-4" /> Creator Skills
            </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
        {filteredTools.map(tool => (
          <LazyToolCard key={tool.id} tool={tool} onTryTeaser={onTryTeaser} />
        ))}
      </div>
      
      {filteredTools.length === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
           <p className="text-ae-muted">No tools found in this category.</p>
        </div>
      )}

      {/* CTA Box */}
      <div className="mt-24 bg-gradient-to-r from-ae-card to-ae-dark border border-ae-accent/20 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-serif font-bold text-white mb-4">Need a Custom Solution?</h2>
        <p className="text-ae-muted max-w-2xl mx-auto mb-8">
          We build bespoke AI architectures for studios with unique workflows. 
          Integrate directly with your internal databases and existing software.
        </p>
        <Link to="/contact">
          <Button size="lg">Contact Engineering Team</Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;