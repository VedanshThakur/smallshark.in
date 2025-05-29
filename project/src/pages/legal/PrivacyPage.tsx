import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Privacy Policy | Small Shark';
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: June 1, 2025
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Small Shark, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              <strong>Personal Information</strong><br />
              We collect personal information that you voluntarily provide to us when you register, express interest in obtaining information about us or our products and services, participate in activities on the platform, or otherwise contact us.
            </p>
            <p>
              <strong>Automatically Collected Information</strong><br />
              When you visit our platform, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, including for customer service and to provide updates and information</li>
              <li>Process transactions and send related information</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <p>
              <strong>By Law or to Protect Rights</strong><br />
              We may disclose your information when we believe disclosure is appropriate to comply with the law or to protect the rights, property, or safety of our company, our users, or others.
            </p>
            <p>
              <strong>Business Transfers</strong><br />
              We may share or transfer your information in connection with a merger, financing, acquisition, dissolution, or similar business transaction.
            </p>
            <p>
              <strong>Third-Party Service Providers</strong><br />
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>
              You have certain rights regarding the personal information we collect about you. These include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to erase your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at privacy@smallshark.com.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPage;