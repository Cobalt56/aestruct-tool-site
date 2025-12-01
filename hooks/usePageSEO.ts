import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
}

export const usePageSEO = ({ title, description }: PageSEOProps) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update Open Graph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update Open Graph Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

  }, [title, description]);
};