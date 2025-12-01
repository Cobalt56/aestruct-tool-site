import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const PrivacyPolicy: React.FC = () => {
  usePageSEO({
    title: "Privacy Policy | AEstruct Inc.",
    description: "Read AEstruct Inc.'s Privacy Policy. We are committed to protecting your data and IP rights while providing secure AI consultancy services for media production."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-ae-light">
      <h1 className="text-3xl font-serif font-bold mb-6 text-white">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-ae-muted text-lg">
          Current as of {new Date().toLocaleDateString()}
        </p>
        <p className="text-ae-muted mt-4">
          This content is currently being updated to reflect our latest data protection standards. 
          For immediate inquiries regarding data privacy, please contact us at <a href="mailto:contact@aestruct.com" className="text-ae-accent hover:underline">contact@aestruct.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;