import React, { useEffect, useState } from 'react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('ae_cookie_consent');
    if (consent === null) {
      // Delay slightly for smoother entrance animation
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ae_cookie_consent', 'true');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('ae_cookie_consent', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ae-darker border-t border-ae-accent/20 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-ae-muted text-center md:text-left max-w-2xl">
          <p>
            <strong>We value your privacy.</strong> We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="secondary" size="sm" onClick={handleReject}>
            Reject
          </Button>
          <Button variant="primary" size="sm" onClick={handleAccept}>
            Accept Tracking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;