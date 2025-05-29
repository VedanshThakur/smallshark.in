import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const investorFaqs: FaqItem[] = [
  {
    question: 'What is the minimum investment amount?',
    answer: 'The minimum investment amount varies by plan. The Basic Plan starts at ₹50,000, the Advanced Plan at ₹2,00,000, and the Angel+ Plan at ₹10,00,000. Each plan offers different benefits and expected returns.',
  },
  {
    question: 'How are startups vetted before being listed?',
    answer: 'Our rigorous vetting process includes financial audits, market analysis, team background checks, product evaluation, legal compliance verification, and growth potential assessment. Only about 5% of applicants pass our screening process.',
  },
  {
    question: 'What are the expected returns on investments?',
    answer: 'Expected returns vary by investment plan: Basic Plan (1-3% p.a.), Advanced Plan (3-5% p.a.), and Angel+ Plan (5-7% p.a.). However, all investments involve risk, and past performance is not indicative of future results.',
  },
  {
    question: 'How do I track my investments?',
    answer: 'All investors have access to a personalized dashboard that provides real-time updates on portfolio performance, startup metrics, and important milestones. The frequency of reports varies by plan.',
  },
  {
    question: 'What happens if a startup fails?',
    answer: 'While we carefully vet all startups, failure is a possibility in early-stage investing. We structure investments to minimize risk through diversification. In case of failure, we work to recover value where possible and provide transparent updates throughout the process.',
  },
];

const startupFaqs: FaqItem[] = [
  {
    question: 'What types of startups are eligible for funding?',
    answer: 'We fund startups across various sectors including fintech, healthtech, edtech, e-commerce, SaaS, AI/ML, clean energy, consumer internet, manufacturing, and agriculture. We look for innovative solutions with strong growth potential and capable founding teams.',
  },
  {
    question: 'What is the application and funding process?',
    answer: 'The process includes application submission, initial screening, due diligence, investor matching, pitch preparation, and funding. The entire process typically takes 4-8 weeks depending on the complexity of your business and funding requirements.',
  },
  {
    question: 'What information do I need to provide during application?',
    answer: 'You\'ll need to provide details about your founding team, business model, market opportunity, competitive landscape, financial projections, current traction, and funding requirements. A pitch deck is highly recommended but not mandatory for the initial application.',
  },
  {
    question: 'How much funding can my startup receive?',
    answer: 'Funding amounts typically range from ₹25 lakhs to ₹5 crores, depending on your startup\'s stage, traction, and capital requirements. The specific amount is determined during the due diligence and investor matching phases.',
  },
  {
    question: 'What support does Small Shark provide beyond funding?',
    answer: 'Beyond capital, we offer strategic mentorship, business development support, networking opportunities, recruitment assistance, and marketing guidance. Our goal is to be a true partner in your growth journey, not just a funding source.',
  },
];

const FaqSection = ({ title, faqs }: { title: string; faqs: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors text-left"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0 text-primary-600" size={20} />
              ) : (
                <ChevronDown className="flex-shrink-0 text-gray-500" size={20} />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-50 border-t border-gray-200"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FaqPage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <FaqSection title="For Investors" faqs={investorFaqs} />
          <FaqSection title="For Startups" faqs={startupFaqs} />
          
          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="mb-4">
              Our team is ready to help you with any additional questions you may have about investing or applying for funding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:support@smallshark.com" className="btn btn-primary">
                Contact Support
              </a>
              <a href="tel:+918000800080" className="btn btn-outline">
                Call Us: +91 8000-800-080
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqPage;