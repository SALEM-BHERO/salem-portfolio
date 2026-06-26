import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xnjkdjle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowFallback(true);
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowFallback(false);
      }, 5000);
    }
  };

  return (
    <main className="flex-1 w-full bg-slate-50 py-12 lg:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            
            {/* Bio / Contact Info Side */}
            <div className="md:col-span-2 bg-primary text-white p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-6">Let's connect</h2>
                <p className="text-primary-100 mb-8 leading-relaxed text-sm">
                  I'm a Developer specialized in digital products and e-commerce platforms. 
                  My philosophy is that good technology should seamlessly solve business problems, 
                  whether that's increasing conversions, streamlining operations, or opening new digital avenues.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-primary-200 mb-1">Email</span>
                      <a href="mailto:sgwashavanhu55@gmail.com" className="hover:underline">sgwashavanhu55@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-primary-200 mb-1">Phone</span>
                      <span>+263 78 278 6864</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                 <a href="https://www.linkedin.com/in/salem-gwashavanhu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="LinkedIn Profile">
                   <span className="sr-only">LinkedIn</span>
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                 </a>
              </div>
            </div>

            {/* Form Side */}
            <div className="md:col-span-3 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h3>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
              
              {showFallback && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  <p>There was an error sending your message. Please try emailing me directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'}`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'}`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors ${errors.subject ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'}`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <span className="text-xs text-red-500 mt-1 block">{errors.subject}</span>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'}`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;