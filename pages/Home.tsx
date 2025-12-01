import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TOOLS } from '../constants';
import Button from '../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Tool } from '../types';
import { usePageSEO } from '../hooks/usePageSEO';

// Lazy load the ToolCard component
const ToolCard = lazy(() => import('../components/ToolCard'));

interface HomeProps {
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

const Home: React.FC<HomeProps> = ({ onTryTeaser }) => {
  usePageSEO({
    title: "AEstruct Inc. | Media & Entertainment AI Consultancy",
    description: "AEstruct Inc. provides expert AI consultancy for media & entertainment. Optimize script analysis, budgeting, and production workflows with enterprise-grade AI tools."
  });

  // Feature only 3 tools on home page
  const featuredTools = TOOLS.slice(0, 3);

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32">
        {/* Background Image: Abstract AI/Media Flow */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop" 
            alt="Abstract AI Architecture Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Gradient Overlay to ensure text readability and brand tint */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ae-accent/20 via-ae-darker/80 to-ae-darker opacity-90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ae-accent to-amber-200">
                Creative Vision
              </span>
            </h1>
            <p className="text-xl text-ae-muted mb-10 max-w-2xl leading-relaxed">
              AEstruct provides specialized AI architecture for media companies. 
              Turn raw ideas into greenlit productions with our suite of 
              script analysis, financial, and strategy tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Tools <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Consulting Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Featured AI Tools</h2>
            <p className="text-ae-muted">Test drive our proprietary prompt engineering logic.</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex text-ae-accent hover:text-white transition-colors items-center">
            View All Tools <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map(tool => (
            <LazyToolCard key={tool.id} tool={tool} onTryTeaser={onTryTeaser} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
           <Link to="/products" className="text-ae-accent font-medium">View All Tools &rarr;</Link>
        </div>
      </section>

      {/* Value Prop */}
      <section className="bg-ae-card/30 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Why AEstruct?</h2>
              <div className="space-y-6">
                {[
                  "Proprietary logic built by industry veterans, not generic chatbots.",
                  "Security-first architecture for sensitive IP and scripts.",
                  "Seamless integration into existing production workflows.",
                  "Cost-effective scaling for indie and mid-size studios."
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-ae-accent mr-4 flex-shrink-0" />
                    <p className="text-ae-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-ae-accent/10 rounded-xl blur-xl"></div>
              <div className="relative bg-ae-dark border border-white/10 rounded-xl p-8">
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-ae-muted">// AI Analysis Output Example</div>
                  <div className="text-green-400"> {`> Analyzing Script Structure...`}</div>
                  <div className="text-white"> {`> Act 1 Break detected at page 25.`}</div>
                  <div className="text-white"> {`> Inciting Incident needs acceleration.`}</div>
                  <div className="text-amber-400"> {`> Recommendation: Compress pages 10-15.`}</div>
                  <div className="h-4 w-32 bg-ae-accent/20 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;