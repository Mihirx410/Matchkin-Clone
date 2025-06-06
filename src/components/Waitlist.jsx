import { useState } from 'react';

const WaitlistPage = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    accountType: 'individual',
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    industry: 'Marketing',
    companySize: '11-30',
    projectTypes: '',
    companyDescription: '',
    budgetMin: '',
    budgetMax: '',
    timeline: '',
    heardAboutUs: '',
    additionalInfo: ''
  });

  // Client-side validation only
  const validate = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.workEmail.trim()) {
        newErrors.workEmail = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
        newErrors.workEmail = 'Invalid email format';
      }
       if (formData.phone && !/^\d+$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must contain digits only';
      }
    }

    if (step === 2) {
      if (!formData.industry) newErrors.industry = 'Industry is required';
      if (!formData.companySize) newErrors.companySize = 'Company size is required';
    }

    if(step === 3){
      if (!formData.budgetMin) newErrors.budgetMin = 'Minimum budget is required';
      if (!formData.budgetMax) newErrors.budgetMax = 'Maximum budget is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const nextStep = () => validate() && setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission delay
      setTimeout(() => {
        console.log('Form data:', formData); // Log to console instead of API call
        setSubmitSuccess(true);
      }, 800);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#212121] flex items-center justify-center p-4">
        <div className="bg-white dark:bg-[#242320] p-8 rounded-xl shadow-md max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h2>
          <p className="text-gray-600 dark:text-gray-200 mb-6">We've received your information. Our team will contact you soon.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#212121] flex flex-col">
      <header className="bg-white dark:bg-[#242320] shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Consulting Platform</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#242320] rounded-xl shadow-md p-6">
          {/* Step 0: Role Selection */}
          {step === 0 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Our Platform</h2>
              <div className="space-y-4">
                <button 
                  onClick={() => { 
                    setFormData(prev => ({...prev, accountType: 'client'})); 
                    nextStep(); 
                  }}
                  className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 text-left transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Join as Client</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Find expert consultants for your projects</p>
                </button>
                <button 
                  onClick={() => { 
                    setFormData(prev => ({...prev, accountType: 'consultant'})); 
                    nextStep(); 
                  }}
                  className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 text-left transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Join as Consultant</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Showcase your expertise to clients</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Account Type</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="accountType"
                        value="individual"
                        checked={formData.accountType === 'individual'}
                        onChange={handleChange}
                        className="h-4 w-4 text-orange-500"
                      />
                      <span className="ml-2 dark:text-white">Individual</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="accountType"
                        value="company"
                        checked={formData.accountType === 'company'}
                        onChange={handleChange}
                        className="h-4 w-4 text-orange-500"
                      />
                      <span className="ml-2 dark:text-white">Company</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Work Email*</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.workEmail ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number(optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Company Info */}
          {step === 2 && (
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company & Project Needs</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Industry*</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.industry ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    <option value="Marketing">Marketing</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size*</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.companySize ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    <option value="1-10">1-10 employees</option>
                    <option value="11-30">11-30 employees</option>
                    <option value="31-100">31-100 employees</option>
                    <option value="101-500">101-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                  {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Types</label>
                  <textarea
                    name="projectTypes"
                    value={formData.projectTypes}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white"
                    rows="3"
                    placeholder="Describe the types of projects you typically work on..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Description</label>
                  <textarea
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white"
                    rows="3"
                    placeholder="Tell us about your company..."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Budget & Timeline */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Budget & Timeline</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Minimum Budget*</label>
                  <input
                    type="number"
                    name="budgetMin"
                    value={formData.budgetMin}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.budgetMin ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    placeholder="Enter minimum budget"
                  />
                  {errors.budgetMin && <p className="text-red-500 text-xs mt-1">{errors.budgetMin}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Maximum Budget*</label>
                  <input
                    type="number"
                    name="budgetMax"
                    value={formData.budgetMax}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white ${errors.budgetMax ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    placeholder="Enter maximum budget"
                  />
                  {errors.budgetMax && <p className="text-red-500 text-xs mt-1">{errors.budgetMax}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white"
                    placeholder="Expected project duration"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">How did you hear about us?</label>
                  <input
                    type="text"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white"
                    placeholder="Referral, search, social media, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-[#2e2d2a] text-gray-900 dark:text-white"
                    rows="3"
                    placeholder="Any other details you'd like to share..."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default WaitlistPage;