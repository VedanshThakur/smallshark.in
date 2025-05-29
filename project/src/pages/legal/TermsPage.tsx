import { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Terms of Service | Small Shark';
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: June 1, 2025
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Small Shark. These Terms of Service govern your use of our website, services, and platform.
              By accessing or using Small Shark, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>
              <strong>"Service"</strong> refers to the Small Shark website, platform, and related services.<br />
              <strong>"User"</strong> refers to any individual who accesses or uses the Service.<br />
              <strong>"Investor"</strong> refers to users who register as investors on the platform.<br />
              <strong>"Startup"</strong> refers to businesses seeking investment through the platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must register for an account. When you register, you agree to provide accurate and complete information.
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Investment Disclaimer</h2>
            <p>
              Small Shark does not provide investment advice. All investments involve risk, including the possible loss of principal.
              Past performance is not indicative of future results. Users should conduct their own due diligence before making any investment decisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Investor Eligibility</h2>
            <p>
              Investors must meet certain eligibility criteria to invest through our platform, including but not limited to being accredited investors as defined by applicable securities laws.
              Small Shark reserves the right to verify investor status and decline service to any user who does not meet the required criteria.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Startup Listing</h2>
            <p>
              Startups applying for listing on Small Shark must provide accurate and complete information about their business.
              Small Shark reserves the right to reject any application and to remove any startup from the platform at our discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Fees and Payments</h2>
            <p>
              Small Shark charges fees for certain services as outlined on our website. All fees are non-refundable unless otherwise stated.
              Payment terms for investments are provided during the investment process and may vary based on the specific opportunity.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by Small Shark and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Small Shark shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@smallshark.com.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsPage;