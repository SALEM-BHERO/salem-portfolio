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
      // Create a temporary link element to trigger the mailto
      const mailtoLink = document.createElement('a');
      mailtoLink.href = `mailto:sgwashavanhu55@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})%0D%0A%0D%0A${formData.message}`)}`;
      mailtoLink.style.display = 'none';
      document.body.appendChild(mailtoLink);
      mailtoLink.click();
      document.body.removeChild(mailtoLink);
      
      // Show success message
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsSubmitting(false);
      }, 5000);
    } catch (error) {
      console.error('Error handling form submission:', error);
      alert('There was an error opening your email client. Please try using the "Open Gmail" button instead.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        
        <div className="card">
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><strong>Email:</strong> <a href="mailto:sgwashavanhu55@gmail.com">sgwashavanhu55@gmail.com</a></p>
              <p><strong>Phone:</strong> +263 78 278 6864</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/salem-gwashavanhu/" target="_blank" rel="noopener noreferrer">Salem Gwashavanhu</a></p>
              <p>I'm always interested in discussing new opportunities, collaborations, and projects. Whether you have a question or just want to say hi, feel free to reach out!</p>
              
              <div className="btn-group" style={{marginTop: 'var(--spacing-lg)'}}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sgwashavanhu55@gmail.com" target="_blank" rel="noopener noreferrer" className="btn">Open Gmail</a>
                <a href="https://www.linkedin.com/in/salem-gwashavanhu/" target="_blank" rel="noopener noreferrer" className="btn btn-green">Connect on LinkedIn</a>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send a Message</h3>
              {submitSuccess && (
                <div className="success-message" style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: 'var(--spacing-sm)',
                  borderRadius: '4px',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  Opening your email client to send the message...
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-green" 
                  disabled={isSubmitting}
                  style={{ marginTop: 'var(--spacing-md)' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;