import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const CookiePolicy: React.FC = () => {
  usePageSEO({
    title: "Cookie Policy | AEstruct Inc.",
    description: "Read AEstruct Inc.'s Cookie Policy. Learn how we use cookies to improve your website experience while respecting your privacy."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-ae-light">
      <h1 className="text-4xl font-serif font-bold mb-2 text-white">AEstruct, Inc. Cookie Policy</h1>
      <p className="text-ae-muted mb-12 border-b border-white/10 pb-6">Last Updated: December 1, 2025</p>

      <div className="space-y-12 text-lg text-ae-muted leading-relaxed">

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">1. What Are Cookies?</h2>
          <p>
            A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
          </p>
          <p className="mt-4">
            This policy explains how we use cookies on our website, [www.aestruct.com] (the "Site").
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We believe in using as few cookies as possible. Our goal is to provide a smooth website experience while respecting your privacy. We use cookies for the following purposes only:
          </p>
          <ul className="list-disc pl-6 space-y-4 mb-4">
            <li>
              <strong className="text-white">Essential Cookies:</strong> These cookies are necessary for the Site to function correctly and securely. For example, they may be used to help with page navigation or to protect our site from security threats. You cannot opt out of these cookies as the website cannot function properly without them.
            </li>
            <li>
              <strong className="text-white">Analytics Cookies:</strong> We use these cookies to collect anonymous, aggregated information about how visitors use our Site. This includes which pages are visited most often and if users receive error messages from web pages. This data helps us improve the way our website works. These cookies do not collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous.
            </li>
          </ul>
          <p>
            We do not use cookies for advertising or marketing purposes. We do not use third-party cookies to track your browsing habits across other websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Session Cookies:</strong> These are temporary cookies that are erased when you close your browser.</li>
            <li><strong className="text-white">Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. We use these for our anonymous analytics to understand if you are a new or returning visitor.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Your Choices and How to Manage Cookies</h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls. Most web browsers allow some control of most cookies through the browser settings.
          </p>
          <p className="mb-4">
            To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="http://www.aboutcookies.org" target="_blank" rel="noreferrer" className="text-ae-accent hover:underline">www.aboutcookies.org</a> or <a href="http://www.allaboutcookies.org" target="_blank" rel="noreferrer" className="text-ae-accent hover:underline">www.allaboutcookies.org</a>.
          </p>
          <p>
            Please note that if you choose to block all cookies (including essential cookies), you may not be able to access all or parts of our Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. We will provide notice of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="bg-ae-card border border-white/10 p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <div className="text-white">
            <p className="font-bold">AEstruct, Inc.</p>
            <p>
              Email: <a href="mailto:contact@aestruct.com" className="text-ae-accent hover:underline">contact@aestruct.com</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CookiePolicy;