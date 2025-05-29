import { motion } from 'framer-motion';
import { ClipboardCheck, Search, CircleDollarSign, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Discover',
    description: 'Browse through our curated list of vetted startups with detailed profiles and financials.',
    color: 'bg-primary-50 text-primary-600',
    number: '01',
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Select',
    description: 'Choose your investment plan and customize your portfolio based on your risk preference.',
    color: 'bg-secondary-50 text-secondary-600',
    number: '02',
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    title: 'Invest',
    description: 'Securely invest with as little as ₹50,000 through our streamlined verification process.',
    color: 'bg-accent-50 text-accent-600',
    number: '03',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Track',
    description: 'Monitor your investments with real-time updates and comprehensive performance analytics.',
    color: 'bg-success-50 text-success-600',
    number: '04',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It <span className="text-primary-600">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our simple four-step process makes startup investing accessible to everyone.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                <div className="absolute -top-4 left-6 px-4 py-1 bg-white shadow-md rounded-lg border border-gray-100">
                  <span className="font-bold text-primary-600">{step.number}</span>
                </div>
                <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center mb-4 mt-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-gray-200 -translate-y-1/2 z-0" style={{ width: 'calc(100% - 3rem)' }}>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;