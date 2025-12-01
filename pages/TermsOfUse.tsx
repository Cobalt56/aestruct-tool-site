import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const TermsOfUse: React.FC = () => {
  usePageSEO({
    title: "Terms of Use | AEstruct Inc.",
    description: "Review the Terms of Use for AEstruct Inc. Understand the licensing, usage rights, and liability limitations regarding our AI tools and consultancy services."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-ae-light">
      <h1 className="text-3xl font-serif font-bold mb-6 text-white">Terms of Use</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-ae-muted text-lg">
          Current as of {new Date().toLocaleDateString()}
        </p>
        <p className="text-ae-muted mt-4">
          This content is currently being updated. These terms govern your use of the AEstruct Inc. website and our AI tool recommendations.
          For specific licensing agreements related to our "Pro" tools, please refer to the specific license documentation provided at purchase.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;