import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, IndianRupee, Calendar } from 'lucide-react';

interface ROIResult {
  projectedValue: number;
  totalReturn: number;
  annualizedROI: number;
}

const ROICalculator = () => {
  const [amount, setAmount] = useState<number>(100000);
  const [period, setPeriod] = useState<number>(3);
  const [planType, setPlanType] = useState<string>('basic');
  const [result, setResult] = useState<ROIResult | null>(null);
  
  // Min/max ROI rates for each plan
  const roiRates = {
    basic: { min: 0.01, max: 0.03 },
    advanced: { min: 0.03, max: 0.05 },
    angel: { min: 0.05, max: 0.07 },
  };
  
  const calculateROI = () => {
    // Get the selected plan's rates
    const selectedPlan = planType as keyof typeof roiRates;
    const { min, max } = roiRates[selectedPlan];
    
    // Calculate average rate (could be randomized within range for a more realistic feel)
    const avgRate = (min + max) / 2;
    
    // Calculate projected value using compound interest
    const projectedValue = amount * Math.pow(1 + avgRate, period);
    const totalReturn = projectedValue - amount;
    const annualizedROI = (Math.pow(projectedValue / amount, 1 / period) - 1) * 100;
    
    setResult({
      projectedValue,
      totalReturn,
      annualizedROI,
    });
  };
  
  // Calculate whenever inputs change
  useEffect(() => {
    calculateROI();
  }, [amount, period, planType]);
  
  return (
    <section id="roi-calculator" className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="text-primary-600">ROI</span> Calculator
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600"
            >
              Estimate your potential returns based on investment amount, time period, and plan type.
            </motion.p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Calculator className="mr-2 text-primary-600" size={20} />
                  Calculate Your Returns
                </h3>
                
                <div className="space-y-6">
                  {/* Investment Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount (₹)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IndianRupee className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        min="50000"
                        step="10000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  {/* Investment Period */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Period (Years)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        value={period}
                        onChange={(e) => setPeriod(Number(e.target.value))}
                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value={1}>1 Year</option>
                        <option value={2}>2 Years</option>
                        <option value={3}>3 Years</option>
                        <option value={5}>5 Years</option>
                        <option value={10}>10 Years</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Plan Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plan Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPlanType('basic')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          planType === 'basic'
                            ? 'bg-primary-100 text-primary-800 border-2 border-primary-300'
                            : 'bg-gray-100 text-gray-800 border-2 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        Basic
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlanType('advanced')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          planType === 'advanced'
                            ? 'bg-secondary-100 text-secondary-800 border-2 border-secondary-300'
                            : 'bg-gray-100 text-gray-800 border-2 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        Advanced
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlanType('angel')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          planType === 'angel'
                            ? 'bg-accent-100 text-accent-800 border-2 border-accent-300'
                            : 'bg-gray-100 text-gray-800 border-2 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        Angel+
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <TrendingUp className="mr-2 text-success-600" size={20} />
                  Projected Returns
                </h3>
                
                <AnimatePresence mode="wait">
                  {result && (
                    <motion.div
                      key={`${amount}-${period}-${planType}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Projected Value</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{result.projectedValue.toLocaleString('en-IN', {
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Total Return</p>
                        <p className="text-2xl font-bold text-success-600">
                          ₹{result.totalReturn.toLocaleString('en-IN', {
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Annualized ROI</p>
                        <p className="text-2xl font-bold text-primary-600">
                          {result.annualizedROI.toFixed(2)}%
                        </p>
                      </div>
                      
                      <div className="text-sm text-gray-500 mt-4">
                        <p>
                          * These projections are estimates based on historical data and are not guaranteed. Actual returns may vary.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;