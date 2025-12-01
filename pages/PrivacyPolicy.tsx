import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const PrivacyPolicy: React.FC = () => {
  usePageSEO({
    title: "Privacy Policy | AEstruct Inc.",
    description: "Read AEstruct Inc.'s Privacy Policy. We are committed to protecting your data and IP rights while providing secure AI consultancy services for media production."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-ae-light">
      <h1 className="text-4xl font-serif font-bold mb-2 text-white">AEstruct, Inc. Privacy Policy</h1>
      <p className="text-ae-muted mb-12 border-b border-white/10 pb-6">Last Updated: December 1, 2025</p>

      <div className="space-y-12 text-lg text-ae-muted leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Our Commitment to Your Privacy</h2>
          <p className="mb-4">
            Welcome to AEstruct, Inc. ("AEstruct," "we," "us," or "our"). We specialize in providing AI strategic advice and product implementation services to the media and entertainment sector. Your privacy is a top priority for us. This Privacy Policy explains how we collect, use, and protect the limited information you may provide when you visit our website [www.aestruct.com] or contact us.
          </p>
          <p className="mb-4">
            We are committed to collecting only the information that is necessary to respond to your inquiries and to improve our website experience. We do not sell your data.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using our site, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Information We Collect</h2>
          <p className="mb-6">We take a minimalist approach to data collection. The information we collect is limited to the following:</p>
          
          <h3 className="text-lg font-bold text-white mb-2">Information You Voluntarily Provide</h3>
          <p className="mb-6">
            When you contact us through a contact form or by email, we may collect your name and email address, and any other information you choose to provide in your message. We collect this solely to communicate with you and respond to your inquiry.
          </p>

          <h3 className="text-lg font-bold text-white mb-2">Anonymous Website Analytics</h3>
          <p className="mb-4">
            We may collect anonymous data about your visit to help us understand how our website is used and how we can improve it. This information is aggregated and cannot be used to identify you personally. This data may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Your browser type and operating system</li>
            <li>The date and time of your visit</li>
            <li>The pages you visited on our site</li>
            <li>The general geographical region from which you are accessing the site</li>
          </ul>
          <p>
            We do not collect financial data, social network data, or use invasive tracking technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for the following specific purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-white">To Respond to You:</strong> To answer your questions, provide information about our services, or schedule a consultation.</li>
            <li><strong className="text-white">To Improve Our Website:</strong> To analyze usage trends and improve the site's functionality, content, and user experience.</li>
            <li><strong className="text-white">To Maintain Security:</strong> To protect the security and integrity of our website and prevent fraudulent activity.</li>
          </ul>
          <p>
            We will not use your personal information for marketing purposes without your explicit, opt-in consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Disclosure of Your Information</h2>
          <p className="mb-4">
            We do not share your personally identifiable information with third parties, except in the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-white">By Law:</strong> If we are required to do so by law, in connection with any legal proceedings, or to establish, exercise, or defend our legal rights.</li>
            <li><strong className="text-white">Essential Service Providers:</strong> We may share anonymous, aggregated data with trusted third-party service providers who assist us in operating our website, such as web hosting and analytics services. These parties are contractually obligated to keep this information confidential.</li>
          </ul>
          <p>
            We will never share your information with business partners or affiliates for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Data Retention and Security</h2>
          <p className="mb-4">
            We retain the personal information you provide (e.g., name and email from a contact form) only for as long as necessary to fulfill the purpose for which it was collected or as required by law.
          </p>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Request access to the personal information we hold about you.</li>
            <li>Ask us to correct or update any inaccurate information.</li>
            <li>Request that we delete your personal information.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Policy for Children</h2>
          <p>
            Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="bg-ae-card border border-white/10 p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
