import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Scale, Shield, AlertCircle } from 'lucide-react';

const CompliancePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Compliance | Small Shark';
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Compliance Framework</h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Small Shark is committed to maintaining the highest standards of regulatory compliance and ethical business practices. Our comprehensive compliance framework ensures that we meet all applicable legal requirements while providing a secure platform for investors and startups.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <FileCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We adhere to all applicable laws and regulations governing investment platforms, including SEBI (Alternative Investment Funds) Regulations, RBI guidelines, and the Companies Act, 2013.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">KYC and Due Diligence</h3>
              <p className="text-gray-600">
                We implement robust Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures for all users. Every investor and startup undergoes thorough verification before joining our platform.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-gray-600">
                We comply with data protection regulations including the Personal Data Protection Bill and maintain strict policies for data collection, storage, processing, and sharing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-success-50 text-success-600 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Disclosure</h3>
              <p className="text-gray-600">
                We provide comprehensive risk disclosures to ensure all investors fully understand the potential risks associated with startup investments before making investment decisions.
              </p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Regulatory Framework</h2>
            <p>
              Small Shark operates under the following regulatory framework:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>SEBI (Alternative Investment Funds) Regulations, 2012</li>
              <li>RBI Guidelines for FinTech Companies</li>
              <li>Prevention of Money Laundering Act, 2002</li>
              <li>Information Technology Act, 2000</li>
              <li>Companies Act, 2013</li>
              <li>Indian Contract Act, 1872</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">KYC Requirements</h2>
            <p>
              All users must complete our KYC process, which includes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Identity verification through government-issued ID (Aadhaar, PAN, etc.)</li>
              <li>Address verification</li>
              <li>Financial status verification (for investors)</li>
              <li>Business registration verification (for startups)</li>
              <li>Screening against sanctions lists and politically exposed persons</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Investor Protection</h2>
            <p>
              We implement several measures to protect investor interests:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Transparent disclosure of investment terms and risks</li>
              <li>Escrow arrangements for investment funds</li>
              <li>Regular reporting on startup performance</li>
              <li>Clear documentation of all investment agreements</li>
              <li>Dispute resolution mechanisms</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance Oversight</h2>
            <p>
              Our compliance program is overseen by:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Chief Compliance Officer</li>
              <li>Legal and Regulatory Affairs Committee</li>
              <li>Independent auditors</li>
              <li>Regular compliance training for all staff</li>
              <li>Periodic compliance reviews and updates</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Non-Compliance</h2>
            <p>
              If you observe any activity that you believe violates our compliance standards or regulatory requirements, please report it to compliance@smallshark.com. All reports are treated confidentially and investigated promptly.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Commitment to Ethics</h2>
            <p>
              Beyond legal compliance, Small Shark is committed to the highest ethical standards in all our business practices. Our code of ethics guides all our interactions with investors, startups, partners, and other stakeholders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompliancePage;