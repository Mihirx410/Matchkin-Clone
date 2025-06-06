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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">We've received your information. Our team will contact you soon.</p>
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-900">Consulting Platform</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          {/* Step 0: Role Selection */}
          {step === 0 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Platform</h2>
              <div className="space-y-4">
                <button 
                  onClick={() => { 
                    setFormData(prev => ({...prev, accountType: 'client'})); 
                    nextStep(); 
                  }}
                  className="w-full p-4 border border-gray-200 rounded-lg hover:bg-orange-50 text-left transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">Join as Client</h3>
                  <p className="text-sm text-gray-600">Find expert consultants for your projects</p>
                </button>
                <button 
                  onClick={() => { 
                    setFormData(prev => ({...prev, accountType: 'consultant'})); 
                    nextStep(); 
                  }}
                  className="w-full p-4 border border-gray-200 rounded-lg hover:bg-orange-50 text-left transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">Join as Consultant</h3>
                  <p className="text-sm text-gray-600">Showcase your expertise to clients</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
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
                      <span className="ml-2">Individual</span>
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
                      <span className="ml-2">Company</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email*</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 ${errors.workEmail ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number(optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-2"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="text-gray-600 hover:text-gray-900"
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">Company & Project Needs</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Industry*</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 ${errors.industry ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="Marketing">Marketing</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Size*</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={`w-full rounded-lg border p-2 ${errors.companySize ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="1-10">1-10 employees</option>
                    <option value="11-30">11-30 employees</option>
                    <option value="31-100">31-100 employees</option>
                    <option value="101-500">101-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                  {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Typical Project Types(optional)</label>
                  <input
                    type="text"
                    name="projectTypes"
                    value={formData.projectTypes}
                    onChange={handleChange}
                    placeholder="e.g., Web development, Data analysis"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brief Company Description(optional)</label>
                  <textarea
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleChange}
                    rows="3"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-600 hover:text-gray-900"
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">Budget & Timeline</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Typical Project Budget</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Min</label>
                      <input
                        type="number"
                        name="budgetMin"
                        value={formData.budgetMin}
                        onChange={handleChange}
                        placeholder="e.g., 5000"
                        className="w-full rounded-lg border border-gray-300 p-2"
                      />
                      {errors.budgetMin && <p className="text-red-500 text-xs mt-1">{errors.budgetMin}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Max</label>
                      <input
                        type="number"
                        name="budgetMax"
                        value={formData.budgetMax}
                        onChange={handleChange}
                        placeholder="e.g., 20000"
                        className="w-full rounded-lg border border-gray-300 p-2"
                      />
                      {errors.budgetMax && <p className="text-red-500 text-xs mt-1">{errors.budgetMax}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Typical Project Timeline(optional)</h3>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-2"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">How did you hear about us?(optional)</h3>
                  <select
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-2"
                  >
                    <option value="">Select option</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Search Engine">Search Engine</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Anything else?</h3>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Any specific results or questions?"
                    rows="3"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                  Submit to Waitlist
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