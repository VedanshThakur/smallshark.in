import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, AlarmCheck } from 'lucide-react';

const SecurityPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Security | Small Shark';
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Security Measures</h1>
          
          <p className="text-xl text-gray-600 mb-12">
            At Small Shark, we prioritize the security of your data and investments. We implement industry-leading security measures to protect your information and ensure the integrity of our platform.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-gray-600">
                All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols. We implement strict access controls and regularly audit our systems to ensure data integrity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
              <p className="text-gray-600">
                We use multi-factor authentication, secure password policies, and session management to protect your account. All login attempts are monitored for suspicious activity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Security</h3>
              <p className="text-gray-600">
                Our infrastructure is hosted on secure cloud platforms with redundancy, regular backups, and disaster recovery procedures. We maintain high availability and conduct regular penetration testing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-success-50 text-success-600 rounded-lg flex items-center justify-center mb-4">
                <AlarmCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">
                We employ 24/7 monitoring systems to detect and respond to security events in real-time. Our security team conducts regular vulnerability assessments and security reviews.
              </p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance Standards</h2>
            <p>
              Small Shark adheres to the following security standards and regulations:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>ISO 27001:2013 (Information Security Management)</li>
              <li>PCI DSS (Payment Card Industry Data Security Standard)</li>
              <li>GDPR (General Data Protection Regulation)</li>
              <li>SEBI Guidelines for Alternative Investment Funds</li>
              <li>RBI Guidelines for Financial Data Security</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Security Best Practices for Users</h2>
            <p>
              While we implement robust security measures, we recommend the following best practices for our users:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Use strong, unique passwords for your Small Shark account</li>
              <li>Enable multi-factor authentication</li>
              <li>Keep your device and browser updated</li>
              <li>Be vigilant about phishing attempts and verify email communications</li>
              <li>Regularly review your account activity</li>
              <li>Log out from your account when using shared devices</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Security Concerns</h2>
            <p>
              If you identify a security vulnerability or have concerns about the security of your account, please contact our security team immediately at security@smallshark.com.
            </p>
            <p>
              We appreciate the collaboration of security researchers and have a responsible disclosure program for security vulnerabilities. Details can be found on our security page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Ongoing Commitment</h2>
            <p>
              Security is not a one-time effort but an ongoing commitment. We continually evaluate and enhance our security measures to adapt to emerging threats and protect your data and investments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityPage;