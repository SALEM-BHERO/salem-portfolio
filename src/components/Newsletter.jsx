import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <h2>Stay Updated</h2>
          <p>Subscribe to my newsletter to receive updates on my latest projects and insights on e-commerce and digital solutions.</p>
          
          {subscribed ? (
            <div className="success-message">
              <h3>Thank you for subscribing!</h3>
              <p>You'll receive the next update soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <button type="submit" className="btn btn-subscribe">Subscribe</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;