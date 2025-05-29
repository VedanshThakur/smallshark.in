import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Briefcase } from 'lucide-react';

interface PlanProps {
  type: 'basic' | 'advanced' | 'angel';
  title: string;
  description: string;
  minInvestment: string;
  roiRange: string;
  color: string;
  features: string[];
  icon: React.ReactNode;
  onSelect: (plan: 'basic' | 'advanced' | 'angel') => void;
  isSelected: boolean;
}

const Plan = ({
  type,
  title,
  description,
  minInvestment,
  roiRange,
  color,
  features,
  icon,
  onSelect,
  isSelected,
}: PlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
        isSelected ? `${color} shadow-xl scale-[1.02]` : 'border-gray-100'
      }`}
    >
      <div className={`px-6 py-4 ${isSelected ? 'bg-white' : `${color.replace('border', 'bg')}/10`}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className={`p-2 rounded-full ${color.replace('border', 'bg')}/20 ${color.replace('border', 'text')}`}>
            {icon}
          </div>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Min. Investment</p>
          <p className="text-2xl font-bold">{minInvestment}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Expected ROI</p>
          <p className="text-2xl font-bold">{roiRange}</p>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={() => onSelect(type)}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isSelected
              ? `${color.replace('border', 'bg')} text-white`
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Selected' : 'Select Plan'}
        </button>
      </div>
    </motion.div>
  );
};

const InvestmentPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'advanced' | 'angel' | null>(null);

  const handleSelectPlan = (plan: 'basic' | 'advanced' | 'angel') => {
    setSelectedPlan(plan);
    
    // Scroll to ROI calculator
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Choose Your <span className="text-primary-600">Investment Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Select the plan that aligns with your investment goals and risk tolerance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Plan
            type="basic"
            title="Basic Plan"
            description="Perfect for new investors looking for stable returns"
            minInvestment="₹10,000"
            roiRange="1% - 3% p.a."
            color="border-primary-500"
            icon={<Shield size={24} />}
            features={[
              "Access to 25+ vetted startups",
              "Quarterly performance reports",
              "Diversified portfolio",
              "Free consultation",
            ]}
            onSelect={handleSelectPlan}
            isSelected={selectedPlan === 'basic'}
          />
          
          <Plan
            type="advanced"
            title="Advanced Plan"
            description="Balanced risk-reward for experienced investors"
            minInvestment="₹25,000"
            roiRange="3% - 5% p.a."
            color="border-secondary-500"
            icon={<Briefcase size={24} />}
            features={[
              "Access to 50+ vetted startups",
              "Monthly performance reports",
              "Strategic portfolio allocation",
              "Priority support",
              "Exclusive investor events",
            ]}
            onSelect={handleSelectPlan}
            isSelected={selectedPlan === 'advanced'}
          />
          
          <Plan
            type="angel"
            title="Angel+ Plan"
            description="High-potential returns for seasoned investors"
            minInvestment="₹50,000"
            roiRange="5% - 7% p.a."
            color="border-accent-500"
            icon={<Zap size={24} />}
            features={[
              "Access to all vetted startups",
              "Weekly performance reports",
              "Custom portfolio strategy",
              "Dedicated relationship manager",
              "Direct founder access",
              "Early access to new startups",
            ]}
            onSelect={handleSelectPlan}
            isSelected={selectedPlan === 'angel'}
          />
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;