import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface StartupFormInputs {
  founderName: string;
  startupName: string;
  email: string;
  phone: string;
  sector: string;
  fundingGoal: number;
  pitchDeckUrl: string;
  description: string;
}

const sectors = [
  'Fintech',
  'Healthtech',
  'Edtech',
  'E-commerce',
  'SaaS',
  'AI/ML',
  'Clean Energy',
  'Consumer Internet',
  'Manufacturing',
  'Agriculture',
  'Other',
];

const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<StartupFormInputs>({
    defaultValues: {
      fundingGoal: 5000000, // 50 Lakhs default
    },
  });
  
  const formValues = watch();
  
  const onSubmit: SubmitHandler<StartupFormInputs> = async (data) => {
    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    // In a real implementation, this would submit to Firebase
    // const docRef = await addDoc(collection(db, 'startup_waitlist'), {
    //   ...data,
    //   createdAt: serverTimestamp(),
    // });
    
    // Set form as submitted
    setIsSubmitted(true);
  };
  
  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
      >
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-success-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for applying to join Small Shark. Our team will review your application and get back to you within 3-5 business days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn btn-primary"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
      {isPreviewMode ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Application Preview</h3>
            <button
              onClick={togglePreview}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Back to Edit
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Founder Name</p>
              <p className="font-medium">{formValues.founderName || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Startup Name</p>
              <p className="font-medium">{formValues.startupName || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-medium">{formValues.email || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="font-medium">{formValues.phone || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Sector</p>
              <p className="font-medium">{formValues.sector || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Funding Goal</p>
              <p className="font-medium">
                ₹{formValues.fundingGoal?.toLocaleString('en-IN') || 'Not provided'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Pitch Deck URL</p>
              <p className="font-medium">
                {formValues.pitchDeckUrl ? (
                  <a
                    href={formValues.pitchDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    {formValues.pitchDeckUrl}
                  </a>
                ) : (
                  'Not provided'
                )}
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-1">Description</p>
            <p className="font-medium">{formValues.description || 'Not provided'}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="btn btn-primary flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
            <button
              type="button"
              onClick={togglePreview}
              className="btn btn-outline"
            >
              Back to Edit
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl font-semibold mb-6">Startup Application</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 mb-1">
                Founder Name *
              </label>
              <input
                id="founderName"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                  errors.founderName ? 'border-error-500' : 'border-gray-300'
                }`}
                {...register('founderName', { required: 'Founder name is required' })}
              />
              {errors.founderName && (
                <p className="mt-1 text-sm text-error-600">{errors.founderName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="startupName" className="block text-sm font-medium text-gray-700 mb-1">
                Startup Name *
              </label>
              <input
                id="startupName"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                  errors.startupName ? 'border-error-500' : 'border-gray-300'
                }`}
                {...register('startupName', { required: 'Startup name is required' })}
              />
              {errors.startupName && (
                <p className="mt-1 text-sm text-error-600">{errors.startupName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
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
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                  errors.phone ? 'border-error-500' : 'border-gray-300'
                }`}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number',
                  },
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-error-600">{errors.phone.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                Sector *
              </label>
              <select
                id="sector"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                  errors.sector ? 'border-error-500' : 'border-gray-300'
                }`}
                {...register('sector', { required: 'Sector is required' })}
              >
                <option value="">Select a sector</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
              {errors.sector && (
                <p className="mt-1 text-sm text-error-600">{errors.sector.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="fundingGoal" className="block text-sm font-medium text-gray-700 mb-1">
                Funding Goal (₹) *
              </label>
              <input
                id="fundingGoal"
                type="number"
                min="1000000"
                step="1000000"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                  errors.fundingGoal ? 'border-error-500' : 'border-gray-300'
                }`}
                {...register('fundingGoal', {
                  required: 'Funding goal is required',
                  min: {
                    value: 1000000,
                    message: 'Minimum funding goal is ₹10,00,000',
                  },
                })}
              />
              {errors.fundingGoal && (
                <p className="mt-1 text-sm text-error-600">{errors.fundingGoal.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="pitchDeckUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Pitch Deck URL
              </label>
              <input
                id="pitchDeckUrl"
                type="url"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                  errors.pitchDeckUrl ? 'border-error-500' : 'border-gray-300'
                }`}
                placeholder="https://docs.google.com/presentation/d/..."
                {...register('pitchDeckUrl', {
                  pattern: {
                    value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
                    message: 'Please enter a valid URL',
                  },
                })}
              />
              {errors.pitchDeckUrl && (
                <p className="mt-1 text-sm text-error-600">{errors.pitchDeckUrl.message}</p>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Brief Description *
            </label>
            <textarea
              id="description"
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                errors.description ? 'border-error-500' : 'border-gray-300'
              }`}
              {...register('description', {
                required: 'Description is required',
                minLength: {
                  value: 100,
                  message: 'Description should be at least 100 characters',
                },
                maxLength: {
                  value: 1000,
                  message: 'Description should not exceed 1000 characters',
                },
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-error-600">{errors.description.message}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              {formValues.description?.length || 0}/1000 characters
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
            <button
              type="button"
              onClick={togglePreview}
              className="btn btn-outline"
            >
              Preview Before Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default WaitlistForm;