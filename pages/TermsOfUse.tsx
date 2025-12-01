import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const TermsOfUse: React.FC = () => {
  usePageSEO({
    title: "Terms of Service | AEstruct Inc.",
    description: "Read AEstruct Inc.'s Terms of Service. Understand the agreement regarding your use of our website, intellectual property rights, and liability limitations."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-ae-light">
      <h1 className="text-4xl font-serif font-bold mb-2 text-white">AEstruct, Inc. Terms of Service</h1>
      <p className="text-ae-muted mb-12 border-b border-white/10 pb-6">Last Updated: December 1, 2025</p>

      <div className="space-y-12 text-lg text-ae-muted leading-relaxed">

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            Welcome to AEstruct, Inc. ("AEstruct," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, [www.aestruct.com] (the "Site"), and any information, text, graphics, or other materials appearing on the Site.
          </p>
          <p>
            By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you are prohibited from using the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Our Services</h2>
          <p>
            AEstruct provides AI strategic advice and product implementation services for the media and entertainment sector. The content on our Site is provided for informational purposes only and does not constitute a formal offer of services or create a client relationship. A formal client relationship is only established through a separate, signed engagement agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Intellectual Property Rights</h2>
          <p className="mb-4">
            The Site and its original content, features, and functionality are and will remain the exclusive property of AEstruct, Inc. and its licensors. The content is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AEstruct, Inc.
          </p>
          <p>
            You may access the content for your personal, non-commercial use, but you may not copy, reproduce, modify, distribute, or display any part of this site without our prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">4. User Conduct</h2>
          <p>
            You agree to use the Site only for lawful purposes. You agree not to take any action that might compromise the security of the Site, render the Site inaccessible to others, or otherwise cause damage to the Site or its content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Links to Other Websites</h2>
          <p className="mb-4">
            Our Site may contain links to third-party websites or services that are not owned or controlled by AEstruct. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that AEstruct shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
          <p>
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Disclaimers and Limitation of Liability</h2>
          <p className="mb-4">
            The information on our Site is provided on an "as is" and "as available" basis. AEstruct makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            In no event shall AEstruct or its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Changes to These Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="bg-ae-card border border-white/10 p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfUse;