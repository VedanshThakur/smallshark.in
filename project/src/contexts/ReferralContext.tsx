import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface ReferralContextType {
  referralCode: string | null;
  generateReferralCode: (userId: string) => string;
  checkForReferral: () => void;
  trackReferral: (email: string, referralCode: string) => Promise<void>;
}

const ReferralContext = createContext<ReferralContextType>({
  referralCode: null,
  generateReferralCode: () => '',
  checkForReferral: () => {},
  trackReferral: async () => {},
});

export const ReferralProvider = ({ children }: { children: ReactNode }) => {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const location = useLocation();

  // Check for referral code in URL and store it
  const checkForReferral = () => {
    const params = new URLSearchParams(location.search);
    const code = params.get('ref');
    
    if (code) {
      setReferralCode(code);
      localStorage.setItem('referralCode', code);
      console.log(`Referral detected: ${code}`);
    }
  };

  // On mount, check for stored referral code
  useEffect(() => {
    const storedCode = localStorage.getItem('referralCode');
    if (storedCode) {
      setReferralCode(storedCode);
    }
  }, []);

  // Generate a new referral code for a user
  const generateReferralCode = (userId: string) => {
    // In a real app, this would be more sophisticated and unique
    const prefix = 'shark';
    const randomPart = Math.floor(Math.random() * 10000);
    const newCode = `${prefix}${randomPart}`;
    return newCode;
  };

  // Track a successful referral
  const trackReferral = async (email: string, referralCode: string) => {
    if (!referralCode) return;
    
    try {
      // In a real app, this would save to Firestore:
      // 1. Add referrer code to user record
      // 2. Create a record in 'referrals' collection
      // 3. Increment referral count for the referrer
      
      console.log(`Tracking referral: ${email} was referred by ${referralCode}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear the referral code after successful use
      setReferralCode(null);
      localStorage.removeItem('referralCode');
    } catch (error) {
      console.error('Error tracking referral:', error);
    }
  };

  return (
    <ReferralContext.Provider
      value={{
        referralCode,
        generateReferralCode,
        checkForReferral,
        trackReferral,
      }}
    >
      {children}
    </ReferralContext.Provider>
  );
};

export const useReferral = () => useContext(ReferralContext);