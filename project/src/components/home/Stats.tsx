import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Landmark, Users, TrendingUp, Briefcase } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix = '', label, delay }: StatItemProps) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2 flex items-baseline">
        {isInView ? (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            decimal="."
            decimals={suffix === '%' ? 1 : 0}
          />
        ) : (
          '0'
        )}
        <span>{suffix}</span>
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight - 100;
        
        if (isVisible && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);
  
  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <StatItem
            icon={<Landmark size={28} />}
            value={100}
            suffix="Cr+"
            label="Capital Deployed"
            delay={0}
          />
          <StatItem
            icon={<Briefcase size={28} />}
            value={125}
            suffix="+"
            label="Startups Funded"
            delay={0.2}
          />
          <StatItem
            icon={<Users size={28} />}
            value={5000}
            suffix="+"
            label="Active Investors"
            delay={0.4}
          />
          <StatItem
            icon={<TrendingUp size={28} />}
            value={18.5}
            suffix="%"
            label="Avg. Annual Return"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;