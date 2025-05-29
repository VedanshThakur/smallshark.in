import { motion } from 'framer-motion';
import { Shield, Search, BarChart, Zap } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Vetted Startups',
    description:
      'Access a curated portfolio of verified startups that have passed our rigorous due diligence process.',
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Advanced Analytics',
    description:
      'Make informed decisions with comprehensive data and performance metrics for each investment opportunity.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Risk Management',
    description:
      'Our diversified investment plans are designed to balance potential returns with appropriate risk profiles.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Deployment',
    description:
      'Quick and efficient capital deployment with transparent fee structures and streamlined processes.',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose <span className="text-primary-600">Small Shark?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We combine industry expertise with cutting-edge technology to deliver superior investment experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;