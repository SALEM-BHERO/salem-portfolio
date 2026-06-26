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
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Connect</span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6 max-w-3xl">
          Let's <span className="text-primary text-glow">Build</span> Together.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Contact Info Side */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-between border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group/item">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors border border-outline-variant/30">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-1">Email</span>
                  <a href="mailto:sgwashavanhu55@gmail.com" className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors">sgwashavanhu55@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors border border-outline-variant/30">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-1">Phone</span>
                  <span className="font-body-md text-body-md text-on-surface">+263 78 278 6864</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors border border-outline-variant/30">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-1">Location</span>
                  <span className="font-body-md text-body-md text-on-surface">Zimbabwe</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex gap-4 relative z-10">
             <a href="https://www.linkedin.com/in/salem-gwashavanhu/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors border border-outline-variant/30 text-on-surface" title="LinkedIn Profile">
               <span className="font-label-md text-label-md">in</span>
             </a>
             <a href="https://github.com/SALEM-BHERO" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors border border-outline-variant/30 text-on-surface" title="GitHub Profile">
               <span className="font-label-md text-label-md">gh</span>
             </a>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:col-span-3 glass-card rounded-2xl p-8 lg:p-12 border border-outline-variant/30">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-8">Send me a message</h3>
          
          {submitSuccess && (
            <div className="bg-primary/10 border border-primary/30 text-primary px-6 py-4 rounded-xl mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">check_circle</span>
              <span className="font-body-md text-body-md">Message sent successfully! I will get back to you soon.</span>
            </div>
          )}
          
          {showFallback && (
            <div className="bg-error/10 border border-error/30 text-error px-6 py-4 rounded-xl mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">error</span>
              <span className="font-body-md text-body-md">There was an error sending your message. Please try emailing me directly.</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-surface-container rounded-xl border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors font-body-md text-body-md text-on-surface ${errors.name ? 'border-error bg-error/5' : 'border-outline-variant/30'}`}
                  placeholder="Jane Doe"
                />
                {errors.name && <span className="text-xs text-error mt-2 block">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-surface-container rounded-xl border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors font-body-md text-body-md text-on-surface ${errors.email ? 'border-error bg-error/5' : 'border-outline-variant/30'}`}
                  placeholder="jane@example.com"
                />
                {errors.email && <span className="text-xs text-error mt-2 block">{errors.email}</span>}
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block font-label-md text-label-md text-on-surface-variant mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-surface-container rounded-xl border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors font-body-md text-body-md text-on-surface ${errors.subject ? 'border-error bg-error/5' : 'border-outline-variant/30'}`}
                placeholder="Project Inquiry"
              />
              {errors.subject && <span className="text-xs text-error mt-2 block">{errors.subject}</span>}
            </div>
            
            <div>
              <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-surface-container rounded-xl border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors font-body-md text-body-md text-on-surface resize-none ${errors.message ? 'border-error bg-error/5' : 'border-outline-variant/30'}`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && <span className="text-xs text-error mt-2 block">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 primary-glow active:scale-95"
            >
              {isSubmitting ? 'Processing...' : 'Send Message'}
              <span className="material-symbols-outlined text-sm">{isSubmitting ? 'sync' : 'send'}</span>
            </button>
          </form>
        </div>
        
      </div>
    </main>
  );
};

export default Contact;