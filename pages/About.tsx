import React, { useState } from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const About: React.FC = () => {
  usePageSEO({
    title: "About Us | AEstruct Inc.",
    description: "Discover AEstruct Inc. and founder Emil Freund. We combine deep media experience with AI architecture to build secure, scalable production infrastructure."
  });

  const [imageError, setImageError] = useState(false);
  
  // Smart Image Loading Logic
  // We start with the standard relative path.
  const [currentImgSrc, setCurrentImgSrc] = useState("assets/emil_freund.jpg");
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    // Comprehensive fallback list covering dev, prod, and case-sensitivity issues
    const fallbacks = [
      "public/assets/emil_freund.jpg",   // 1. Try explicit public folder (Common in Dev)
      "./assets/emil_freund.jpg",        // 2. Try relative with dot
      "/assets/emil_freund.jpg",         // 3. Try absolute
      "assets/Emil_Freund.jpg",          // 4. Try capitalized filename
      "public/assets/Emil_Freund.jpg",   // 5. Try capitalized in public
      "emil_freund.jpg",                 // 6. Try root flat
      "/emil_freund.jpg"                 // 7. Try absolute root
    ];

    if (retryCount < fallbacks.length) {
      console.log(`Image load failed. Retrying with: ${fallbacks[retryCount]}`);
      setCurrentImgSrc(fallbacks[retryCount]);
      setRetryCount(prev => prev + 1);
    } else {
      // Downgraded to WARN as this is expected in Dev/Preview environments
      console.warn("Image failed to load (Expected in Dev/Preview). Displaying fallback monogram.");
      setImageError(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">The Intersection of Art & Architecture</h1>
        <p className="text-xl text-ae-muted leading-relaxed mb-6">
          AEstruct Inc. was founded on a simple premise: <strong>Creativity scales better with structure.</strong>
        </p>
        <p className="text-lg text-ae-muted leading-relaxed">
          AEstruct is an AI-powered consultancy that gives independent film, television, and digital content creators the strategic infrastructure of a major studio. Our Production OS integrates script analysis, budget forecasting, rights clearance, pitch optimization, and distribution planning into a unified ecosystem—delivering actionable insights in 90 seconds while scaling to comprehensive strategic packages when you need them. We help producers stop managing chaos and start orchestrating success.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="bg-ae-card p-6 rounded-xl border border-white/5 text-center">
          <div className="text-4xl font-serif font-bold text-ae-accent mb-2">15+</div>
          <div className="text-sm text-ae-muted uppercase tracking-wider">Years Industry Exp.</div>
        </div>
        <div className="bg-ae-card p-6 rounded-xl border border-white/5 text-center">
          <div className="text-4xl font-serif font-bold text-ae-accent mb-2">8</div>
          <div className="text-sm text-ae-muted uppercase tracking-wider">Proprietary Tools</div>
        </div>
        <div className="bg-ae-card p-6 rounded-xl border border-white/5 text-center">
          <div className="text-4xl font-serif font-bold text-ae-accent mb-2">100%</div>
          <div className="text-sm text-ae-muted uppercase tracking-wider">Client Satisfaction</div>
        </div>
      </div>

      <section className="border-t border-white/10 pt-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0">
            {!imageError ? (
              <img 
                src={currentImgSrc}
                alt="Emil Freund, Founder" 
                className="w-48 h-48 rounded-xl object-cover border-2 border-ae-accent shadow-lg bg-ae-card"
                onError={handleImageError}
              />
            ) : (
              /* Professional Fallback Monogram */
              <div className="w-48 h-48 rounded-xl border-2 border-ae-accent/30 bg-gradient-to-br from-ae-card to-ae-dark flex flex-col items-center justify-center shadow-lg">
                <span className="font-serif text-5xl font-bold text-ae-accent mb-2">EF</span>
                <span className="text-xs text-ae-muted uppercase tracking-widest">Founder</span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-1">Emil Freund</h3>
            <div className="text-ae-accent font-medium mb-6 tracking-wide uppercase text-sm">Founder & Chief Executive Officer</div>
            
            <div className="space-y-4 text-ae-muted leading-relaxed text-lg">
              <p>
                For most of my career, I've been at the intersection of media and technology, helping visionary companies navigate massive, industry-defining change. I don't just understand the unique DNA of film, digital video, and gaming production; I've lived it. Led it. Delivered it.
              </p>
              <p>
                Before AI became the central topic, I was on the front lines of two other transformations that reshaped the media landscape. I led several organizations in the transition from analog to fully digitized video workflows, from acquisition to distribution. Subsequently, I helped architect the monumental shift of media operations and back-office systems into the cloud. These experiences taught me firsthand about the technical, organizational, and cultural challenges of large-scale disruption.
              </p>
              <p>
                Today, the media industry is facing its third and most profound technology wave: Artificial Intelligence. The patterns are familiar, but the stakes are higher—and most AI vendors are looking in the wrong place. They're chasing flashy content-generation tools while missing where the real value lies: giving solo creators and small production teams access to the studio-level back-office capabilities that have historically been reserved for major players.
              </p>
              <p>
                That insight led me to build AEstruct and develop eight AI-powered tools specifically designed to handle the essential but time-consuming work—script analysis, rights clearance, budget forecasting, production documentation, and more—so content creators can focus on the fun stuff: telling great stories. Because sustainable creative success isn't just about inspiration; it's about having the operational infrastructure to turn ideas into repeatable wins.
              </p>
              <p>
                My role is to act as your translator and strategic partner and help you chart a pragmatic course for AI integration. I help you move beyond the hype to leverage AI for tangible results, whether that's revolutionizing production pipelines, optimizing distribution, or creating new models for audience engagement—all while navigating the sector's unique customer satisfaction and privacy demands.
              </p>
              <p className="text-white font-medium pt-2">
                If you're looking for a partner who understands both the art of media and the science of technology to guide your AI strategy, let's connect.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;