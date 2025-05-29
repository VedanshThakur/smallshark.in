import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useReferral } from '../../contexts/ReferralContext';

interface SignupInputs {
  email: string;
  password: string;
  confirmPassword: string;
  role: 'investor' | 'startup';
  agreeTerms: boolean;
}

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();
  const { referralCode, trackReferral } = useReferral();
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignupInputs>();
  
  // Get role from URL parameter if provided
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userType = params.get('userType');
    
    if (userType === 'investor' || userType === 'startup') {
      setValue('role', userType);
    }
  }, [location, setValue]);
  
  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    try {
      await signup(data.email, data.password, data.role);
      
      // Track referral if code exists
      if (referralCode) {
        await trackReferral(data.email, referralCode);
      }
      
      // Redirect to appropriate dashboard
      navigate(`/dashboard/${data.role}`);
    } catch (error) {
      console.error('Signup error:', error);
      // In a real app, you would handle the error properly
      alert('Failed to sign up. Please try again.');
    }
  };
  
  useEffect(() => {
    // Update page title
    document.title = 'Sign Up | Small Shark';
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
              <p className="text-gray-600">
                Join Small Shark and discover exciting investment opportunities
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                    errors.email ? 'border-error-500' : 'border-gray-300'
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                      errors.password ? 'border-error-500' : 'border-gray-300'
                    }`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-error-600">{errors.password.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                      errors.confirmPassword ? 'border-error-500' : 'border-gray-300'
                    }`}
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => 
                        value === watch('password') || 'Passwords do not match',
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-error-600">{errors.confirmPassword.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    watch('role') === 'investor' 
                      ? 'bg-primary-50 border-primary-300 text-primary-900' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      value="investor"
                      className="sr-only"
                      {...register('role', { required: 'Please select a role' })}
                    />
                    <span>Investor</span>
                  </label>
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    watch('role') === 'startup' 
                      ? 'bg-primary-50 border-primary-300 text-primary-900' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      value="startup"
                      className="sr-only"
                      {...register('role', { required: 'Please select a role' })}
                    />
                    <span>Startup</span>
                  </label>
                </div>
                {errors.role && (
                  <p className="mt-1 text-sm text-error-600">{errors.role.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2"
                    {...register('agreeTerms', { 
                      required: 'You must agree to the terms and conditions' 
                    })}
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-1 text-sm text-error-600">{errors.agreeTerms.message}</p>
                )}
              </div>
              
              {referralCode && (
                <div className="mb-6 p-3 bg-success-50 text-success-800 rounded-lg text-sm">
                  <p>You were referred by a member. 🎉</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary"
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-primary-600 hover:underline font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;