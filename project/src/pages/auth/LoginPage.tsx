import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>();
  
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      await login(data.email, data.password);
      
      // In a real app, you would check the user's role and redirect accordingly
      // For demo purposes, we're using a simple email check
      const dashboardRoute = data.email.includes('investor') 
        ? '/dashboard/investor' 
        : '/dashboard/startup';
      
      navigate(dashboardRoute);
    } catch (error) {
      console.error('Login error:', error);
      // In a real app, you would handle the error properly
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };
  
  useEffect(() => {
    // Update page title
    document.title = 'Log In | Small Shark';
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
              <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-600">
                Log in to your Small Shark account
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
                <div className="flex justify-between mb-1">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-primary-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                      errors.password ? 'border-error-500' : 'border-gray-300'
                    }`}
                    {...register('password', {
                      required: 'Password is required',
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
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary"
              >
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary-600 hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;