import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import InvestorPage from './pages/InvestorPage';
import StartupPage from './pages/StartupPage';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import FaqPage from './pages/legal/FaqPage';
import SecurityPage from './pages/legal/SecurityPage';
import CompliancePage from './pages/legal/CompliancePage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import InvestorDashboard from './pages/dashboard/InvestorDashboard';
import StartupDashboard from './pages/dashboard/StartupDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useReferral } from './contexts/ReferralContext';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();
  const { checkForReferral } = useReferral();
  
  useEffect(() => {
    // Track page views (would connect to GA4 in production)
    console.log(`Page view: ${location.pathname}`);
    
    // Check for referral code in URL
    checkForReferral();
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location, checkForReferral]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="investor" element={<InvestorPage />} />
        <Route path="startup" element={<StartupPage />} />
        
        {/* Legal pages */}
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="compliance" element={<CompliancePage />} />
        
        {/* Auth pages */}
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        
        {/* Protected dashboard routes */}
        <Route
          path="dashboard/investor"
          element={
            <ProtectedRoute allowedRole="investor">
              <InvestorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard/startup"
          element={
            <ProtectedRoute allowedRole="startup">
              <StartupDashboard />
            </ProtectedRoute>
          }
        />
        
        {/* 404 catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;